#!/usr/bin/env python3
"""index.html 의 시계열 배열을 원본 소스와 재대조한다.

소스마다 확정 시점이 다르다 (국내 수급은 장 마감 후 정정, 미국 지수·환율은
장중값이 그대로 저장되는 경우가 있음). 그래서 "오늘자 추가" 때 새 날짜만
붙이면 최근 며칠이 틀린 채로 남는다. 이 스크립트로 겹치는 구간을 전부
다시 비교해서 어긋난 값을 찾아내고, --fix 를 주면 소스 값으로 덮어쓴다.

  python3 tools/audit_data.py           # 대조만 (읽기 전용)
  python3 tools/audit_data.py --fix     # 어긋난 값을 소스 기준으로 정정

신용공여는 data.go.kr 키가 필요하다 (public 레포라 하드코딩 금지):
  KOFIA_SERVICE_KEY=... python3 tools/audit_data.py
키가 없으면 신용공여만 건너뛴다.
"""
import argparse
import glob
import html
import json
import os
import re
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = os.path.join(ROOT, 'index.html')
UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/120.0 Safari/537.36')
# 이 환경에서는 urllib 이 막혀 있어 curl 로만 나간다.
CURL = ['curl', '-s', '--max-time', '30']


def fetch(url, out, ua=UA, referer=None, euckr=False):
    # ua=None 은 curl 기본 UA. FRED 는 브라우저 UA 를 주면 빈 응답을 돌려준다.
    cmd = CURL + (['-A', ua] if ua else [])
    if referer:
        cmd += ['-e', referer]
    cmd += [url]
    raw = subprocess.run(cmd, capture_output=True).stdout
    if euckr:
        raw = raw.decode('euc-kr', 'replace').encode('utf-8')
    with open(out, 'wb') as f:
        f.write(raw)
    return out


# ---------------------------------------------------------------- 소스 수집
def src_kospi(tmp, pages=4):
    """네이버 일별 시세: 페이지당 6거래일."""
    out = {}
    for p in range(1, pages + 1):
        f = fetch('https://finance.naver.com/sise/sise_index_day.naver?code=KOSPI&page=%d' % p,
                  os.path.join(tmp, 'kospi%d.html' % p), euckr=True)
        t = open(f, encoding='utf-8').read()
        for d, c in re.findall(r'class="date">([\d.]+)<.*?class="number_1">([\d,.]+)<', t, re.S):
            y, m, dd = d.split('.')
            if y == '2026':
                out['%s.%s' % (m, dd)] = float(c.replace(',', ''))
    return out


def src_investor(tmp, bizdates):
    """투자자별 순매수: bizdate 당 10거래일. (개인, 외국인, 기관계, 연기금)"""
    out = {}
    for bd in bizdates:
        f = fetch('https://finance.naver.com/sise/investorDealTrendDay.naver?bizdate=%s&sosok=' % bd,
                  os.path.join(tmp, 'inv%s.html' % bd),
                  referer='https://finance.naver.com/sise/sise_trans_style.naver', euckr=True)
        t = open(f, encoding='utf-8').read()
        for r in re.findall(r'<tr>(.*?)</tr>', t, re.S):
            tds = [html.unescape(re.sub('<[^>]+>', '', x)).replace('\xa0', '').strip()
                   for x in re.findall(r'<td[^>]*>(.*?)</td>', r, re.S)]
            tds = [x for x in tds if x]
            if len(tds) >= 10 and re.match(r'^26\.\d\d\.\d\d$', tds[0]):
                n = lambda i: int(tds[i].replace(',', ''))
                out[tds[0][3:]] = (n(1), n(2), n(3), n(9))
    return out


def src_us_index(tmp):
    """미국 3대 지수. API 창이 ~110거래일이라 그 앞은 비교 대상에서 빠진다."""
    out = {}
    for code, key in [('.INX', 'sp'), ('.IXIC', 'nq'), ('.DJI', 'dj')]:
        f = fetch('https://api.stock.naver.com/chart/foreign/index/%s?periodType=dayCandle&count=300' % code,
                  os.path.join(tmp, 'idx%s.json' % key), ua='Mozilla/5.0',
                  referer='https://m.stock.naver.com/')
        d = json.load(open(f))
        for p in (d['priceInfos'] if isinstance(d, dict) else d):
            ld = p['localDate']
            if ld.startswith('2026'):
                out.setdefault(ld[4:6] + '.' + ld[6:], {})[key] = float(p['closePrice'])
    return out


def src_rates(tmp, cosd='2026-02-11'):
    """FRED. 휴장일은 빈 값 또는 '.' 로 온다 (둘 다 방어)."""
    out = {}
    for sid, key in [('DGS10', 'y10'), ('DGS2', 'y2')]:
        f = fetch('https://fred.stlouisfed.org/graph/fredgraph.csv?id=%s&cosd=%s' % (sid, cosd),
                  os.path.join(tmp, '%s.csv' % sid), ua=None)
        for ln in open(f).read().strip().splitlines()[1:]:
            d, v = ln.split(',')
            v = v.strip()
            if v and v != '.' and d.startswith('2026'):
                out.setdefault(d[5:7] + '.' + d[8:], {})[key] = float(v)
    return out


def src_fx(tmp, pages=3):
    out = {}
    for code, key in [('FX_USDX', 'usdx'), ('FX_USDKRW', 'krw')]:
        for pg in range(1, pages + 1):
            f = fetch('https://api.stock.naver.com/marketindex/exchange/%s/prices?page=%d&pageSize=60' % (code, pg),
                      os.path.join(tmp, 'fx%s%d.json' % (key, pg)), ua='Mozilla/5.0',
                      referer='https://m.stock.naver.com/')
            d = json.load(open(f))
            for x in (d if isinstance(d, list) else d['result']):
                dt = x['localTradedAt']
                if dt.startswith('2026'):
                    out.setdefault(dt[5:7] + '.' + dt[8:], {})[key] = float(x['closePrice'].replace(',', ''))
    return out


def src_credit(tmp):
    key = os.environ.get('KOFIA_SERVICE_KEY')
    if not key:
        return None
    f = fetch('https://apis.data.go.kr/1160100/service/GetKofiaStatisticsInfoService/'
              'getGrantingOfCreditBalanceInfo?serviceKey=%s&resultType=json&numOfRows=200&pageNo=1' % key,
              os.path.join(tmp, 'credit.json'))
    items = json.load(open(f))['response']['body']['items']['item']
    out = {}
    for i in items:
        b = str(i['basDt'])
        if b.startswith('2026'):
            out[b[4:6] + '.' + b[6:]] = (int(i['crdTrFingWhl']), int(i['crdTrFingScrs']),
                                         int(i['crdTrFingKosdaq']))
    return out


# ---------------------------------------------------------------- index.html
def read_array(s, name):
    m = re.search(r'(const %s = \[)(.*?)(\];)' % name, s, re.S)
    return m, eval('[' + m.group(2).replace('null', 'None') + ']')


def write_array(s, name, vals):
    m = re.search(r'(const %s = \[)(.*?)(\];)' % name, s, re.S)
    body = ','.join('null' if v is None else
                    ('"%s"' % v if isinstance(v, str) else repr(v)) for v in vals)
    return s[:m.start(2)] + body + s[m.end(2):]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--fix', action='store_true', help='어긋난 값을 소스 기준으로 덮어쓴다')
    ap.add_argument('--bizdates', nargs='*', default=None,
                    help='투자자 순매수를 긁을 기준일 (YYYYMMDD, 각각 10거래일)')
    args = ap.parse_args()

    s = open(HTML, encoding='utf-8').read()
    labels = read_array(s, 'labels2026')[1]
    bizdates = args.bizdates or ['2026' + labels[-1].replace('.', '')]

    tmp = tempfile.mkdtemp(prefix='mystock-audit-')
    kospi = src_kospi(tmp)
    inv = src_investor(tmp, bizdates)
    idx = src_us_index(tmp)
    rate = src_rates(tmp)
    fx = src_fx(tmp)
    credit = src_credit(tmp)

    diffs = []   # (date, 배열이름, 인덱스, 현재값, 소스값)

    # 국내 코스피 종가 — 객체 리터럴이라 배열과 다루는 법이 다르다
    kblock = re.search(r'(const kospiIndex2026 = \{)(.*?)(\};)', s, re.S)
    kmap = dict((d, float(v)) for d, v in re.findall(r"'(\d\d\.\d\d)':([\d.]+)", kblock.group(2)))
    for d, cur in kmap.items():
        if d in kospi and abs(cur - kospi[d]) > 0.005:
            diffs.append((d, 'kospiIndex2026', None, cur, kospi[d]))

    # 국내 수급 4종
    dom = [('dailyIndividual2026', 0), ('dailyForeign2026', 1),
           ('dailyInstitution2026', 2), ('dailyPension2026', 3)]
    for name, pos in dom:
        vals = read_array(s, name)[1]
        for i, d in enumerate(labels):
            if d in inv and vals[i] != inv[d][pos]:
                diffs.append((d, name, i, vals[i], inv[d][pos]))

    # 해외 3세트
    for lname, series in [('idxLabels', [('idxSP500', 'sp'), ('idxNasdaq', 'nq'), ('idxDow', 'dj')]),
                          ('rateLabels', [('rateUS10Y', 'y10'), ('rateUS2Y', 'y2')]),
                          ('fxLabels', [('fxDollarIndex', 'usdx'), ('fxUsdKrw', 'krw')])]:
        src = {'idxLabels': idx, 'rateLabels': rate, 'fxLabels': fx}[lname]
        tol = 0.0005 if lname == 'rateLabels' else 0.005
        lab = read_array(s, lname)[1]
        for name, key in series:
            vals = read_array(s, name)[1]
            for i, d in enumerate(lab):
                if d in src and key in src[d] and vals[i] is not None:
                    if abs(vals[i] - src[d][key]) > tol:
                        diffs.append((d, name, i, vals[i], src[d][key]))

    # 신용공여 — 조 단위 2자리로 저장돼 있어 반올림 후 비교.
    # chg 는 전일 대비 억원이라 앞 행이 소스에 있을 때만 검산한다.
    if credit:
        rows = list(re.finditer(r"\{date:'(\d\d\.\d\d)',bal:([\d.]+),chg:(-?[\d.]+|null),"
                                r"scrs:([\d.]+),kosdaq:([\d.]+)\}", s))
        for ri, m in enumerate(rows):
            d = m.group(1)
            if d not in credit:
                continue
            whl, scrs, kosdaq = credit[d]
            for gi, key, src_v in [(2, 'bal', whl), (4, 'scrs', scrs), (5, 'kosdaq', kosdaq)]:
                exp = round(src_v / 1e12, 2)
                if abs(float(m.group(gi)) - exp) > 0.005:
                    diffs.append((d, 'credit.' + key, None, float(m.group(gi)), exp))
            prev = rows[ri - 1].group(1) if ri else None
            if prev in credit and m.group(3) != 'null':
                exp = round((whl - credit[prev][0]) / 1e8)
                if abs(float(m.group(3)) - exp) > 0.5:
                    diffs.append((d, 'credit.chg', None, float(m.group(3)), exp))

    print('소스 커버 일수: kospi=%d 수급=%d 미국지수=%d 금리=%d 환율=%d 신용=%s'
          % (len(kospi), len(inv), len(idx), len(rate), len(fx),
             len(credit) if credit else '건너뜀(KOFIA_SERVICE_KEY 없음)'))

    # 소스엔 있는데 배열엔 없는 날 (해외 계열은 02.11 이전을 의도적으로 안 담는다)
    missing = {
        'kospiIndex2026': [d for d in sorted(kospi) if d not in labels],
        'idxLabels': [d for d in sorted(idx) if d not in read_array(s, 'idxLabels')[1] and d >= '02.11'],
        'rateLabels': [d for d in sorted(rate) if d not in read_array(s, 'rateLabels')[1] and d >= '02.11'],
        'fxLabels': [d for d in sorted(fx) if d not in read_array(s, 'fxLabels')[1] and d >= '02.11'],
    }
    for k, v in missing.items():
        if v:
            print('  누락 %s: %s' % (k, v))

    if not diffs:
        print('불일치 없음')
        return 0

    print('불일치 %d건' % len(diffs))
    for d, name, i, cur, src_v in sorted(diffs):
        print('   %s %-16s %s -> %s' % (d, name, cur, src_v))

    if not args.fix:
        print('\n(--fix 를 주면 소스 값으로 정정한다)')
        return 1

    # 배열 계열만 자동 정정. 신용공여는 행 구조라 별도로 처리한다.
    by_arr = {}
    for d, name, i, cur, src_v in diffs:
        if i is not None:
            by_arr.setdefault(name, []).append((i, src_v))
    for name, edits in by_arr.items():
        vals = read_array(s, name)[1]
        for i, v in edits:
            vals[i] = v
        s = write_array(s, name, vals)

    for d, name, i, cur, src_v in diffs:
        if name == 'kospiIndex2026':
            s = re.sub(r"('%s':)[\d.]+" % re.escape(d), r'\g<1>%s' % src_v, s, count=1)
        elif name.startswith('credit.'):
            field = name.split('.', 1)[1]
            # chg 는 음수/null 도 들어온다. bal·scrs·kosdaq 은 조 단위 2자리 유지.
            val = '%d' % src_v if field == 'chg' else '%.2f' % src_v
            s = re.sub(r"(\{date:'%s',[^}]*?\b%s:)(-?[\d.]+|null)" % (re.escape(d), field),
                       lambda mo: mo.group(1) + val, s, count=1)

    open(HTML, 'w', encoding='utf-8').write(s)
    print('\n%d건 정정 완료 — index.html' % len(diffs))
    return 0


if __name__ == '__main__':
    sys.exit(main())
