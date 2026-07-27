
  // 첫 페인트 전에 테마를 확정해 깜빡임 방지.
  // 기본은 다크(PC·모바일 공통). 직접 라이트를 고른 적이 있을 때만 라이트로 뜬다.
  (function () {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    var mode = saved === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'dark' ? '#17171c' : '#ffffff');
  })();
