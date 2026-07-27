
// CSS 변수 읽기 (차트 색상은 테마에 따라 바뀌므로 그릴 때마다 조회)
function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const labels2026 = ['01.02','01.05','01.06','01.07','01.08','01.09','01.12','01.13','01.14','01.15','01.16','01.19','01.20','01.21','01.22','01.23','01.26','01.27','01.28','01.29','01.30','02.02','02.03','02.04','02.05','02.06','02.09','02.10','02.11','02.12','02.13','02.19','02.20','02.23','02.24','02.25','02.26','02.27','03.03','03.04','03.05','03.06','03.09','03.10','03.11','03.12','03.13','03.16','03.17','03.18','03.19','03.20','03.23','03.24','03.25','03.26','03.27','03.30','03.31','04.01','04.02','04.03','04.06','04.07','04.08','04.09','04.10','04.13','04.14','04.15','04.16','04.17','04.20','04.21','04.22','04.23','04.24','04.27','04.28','04.29','04.30','05.04','05.06','05.07','05.08','05.11','05.12','05.13','05.14','05.15','05.18','05.19','05.20','05.21','05.22','05.26','05.27','05.28','05.29','06.01','06.02','06.04','06.05','06.08','06.09','06.10','06.11','06.12','06.15','06.16','06.17','06.18','06.19','06.22','06.23','06.24','06.25','06.26','06.29','06.30','07.01','07.02','07.03','07.06','07.07','07.08','07.09','07.10','07.13','07.14','07.15','07.16','07.20','07.21','07.22','07.23','07.24'];

const dailyIndividual2026 = [-4252,-15141,5963,-2944,12540,1339,-1013,-7125,-4377,-18235,-9383,-7513,3524,-9965,1555,-7239,17157,-10197,12131,16173,22979,45874,-29423,-10119,67791,21736,-32947,-8780,-17149,-44547,7141,-8609,-9872,10815,-22861,2307,6498,62496,57974,796,18228,29488,46242,-18340,-5086,22291,24512,7164,-5752,-38717,24116,22338,70029,7270,-13402,30598,22596,8945,24400,-37628,12097,-20952,-10502,-3429,-54161,2950,-12280,7173,-23919,-9400,-18050,14464,-3158,-19204,11984,4514,11832,-19758,-1306,1681,11824,-47936,-5715,59925,39707,28669,66818,18868,18499,72308,22094,56289,17104,-26754,10655,-5745,4064,36146,-14054,3862,63537,50135,42240,17628,-6167,48643,20803,-43174,-15124,-21841,5254,-4156,16478,21506,85910,26312,-24136,81919,45975,8401,17370,62413,-22942,26829,31359,-358,-13278,-7805,38869,-41424,-24666,36647,3490,-16421,-12176,-22077,51782];

const dailyForeign2026 = [6309,21726,-6184,12548,-979,-16068,-3512,-2793,-3760,3450,4350,5532,1232,4394,-2432,1438,-1588,8448,4008,-14897,-19729,-25168,7038,-9413,-50108,-33233,4320,1474,8461,29954,-9220,-9396,-7420,-11132,-2013,-13082,-21135,-70528,-51487,2303,-1446,-19418,-31735,10283,-2563,-23831,-14502,-8485,-1740,8802,-18760,-12402,-36751,-19863,-12895,-29370,-34286,-20945,-38386,-6411,-1368,8035,-1596,3704,19089,18476,10641,-4579,8276,4973,4814,-19974,-2338,11565,-6762,-820,-19496,8563,-1843,-6071,-14559,29308,31085,-66987,-52967,-28147,-56090,-37227,-21450,-56040,-36492,-57242,-29310,-2212,-19221,-1321,-2493,-27414,-10421,-28219,-63035,-66663,-27638,-2644,-20064,-27754,-14640,22041,10774,15353,-9952,12776,-3555,-25466,-42047,-46546,-8754,-42906,-77332,-37992,-17028,-43706,-21750,-13144,-29172,3437,1343,-3228,-16705,9523,23031,-13665,5198,2952,26211,21359,-32683];

const dailyInstitution2026 = [-2477,-7046,-664,-9397,-14014,12046,2101,7881,5887,12905,3083,-256,-6500,3217,-1568,4790,-15414,2474,-14021,-1673,-4241,-22125,21708,17836,-20693,9414,27123,5643,6927,13800,831,16542,16149,-1271,23773,14701,12569,5666,-8859,-5978,-17186,-11142,-15441,9164,7821,775,-10434,911,7341,31093,-6649,-10260,-38173,9683,23230,-2999,7785,8450,10251,40419,-14517,7390,8371,-4001,27268,-25125,-2031,-6698,12545,368,10783,1501,2938,9181,-4046,-2965,8053,11349,3532,4771,2838,20098,-22894,8917,12542,-458,-12138,16876,1927,-17347,13904,1575,11070,29008,7583,8168,-126,-10422,23688,24427,-546,15255,-13809,-17164,25048,-22665,-7561,22870,4462,7076,5957,-7682,-12244,3034,-44760,19095,33244,-41224,29327,29332,-700,-20825,44079,-14618,-3108,-3552,12884,11314,-22338,32159,1992,-23831,-9235,13744,-13963,976,-19514];
// 연기금등 (기관 내 세부, 억원) — 네이버 investorDealTrendDay
const dailyPension2026 = [-196,-1564,-724,-947,-1510,527,-501,22,149,-312,-901,-1188,-1729,-564,-2049,-2719,-1730,-572,-900,-1197,-307,-399,958,290,-985,1323,-863,-977,-263,722,563,154,-1422,-2685,-718,750,-981,-2283,412,-727,-872,-1748,-1020,-93,-893,-374,285,412,843,960,-649,606,-1617,435,147,-2423,-228,-812,-291,-192,91,-557,-850,-818,-2083,49,-416,-1733,-256,-1116,-299,-757,80,622,995,197,-202,-1771,-277,-21,350,-507,-1590,494,-502,-2948,-1857,-2363,-1933,-949,16,-1386,-1515,-959,-1161,-1162,-3930,-275,909,-305,707,-492,-607,485,-233,-2642,-1125,-3248,250,-338,-1676,-3921,-5267,-1834,-2937,131,-25,-482,581,-394,-2177,-495,563,-338,285,-950,736,355,-662,868,205,592,743,600,-706,741,326];

// 2025년도 데이터
const data2025 = [
{date:'01.02',p:4143,f:-2388,i:-2589,pn:92},
{date:'01.03',p:-6985,f:2801,i:3204,pn:410},
{date:'01.06',p:-5370,f:3662,i:654,pn:400},
{date:'01.07',p:-2049,f:1587,i:-423,pn:969},
{date:'01.08',p:-3855,f:2209,i:1096,pn:1385},
{date:'01.09',p:-3270,f:7482,i:-5056,pn:253},
{date:'01.10',p:3381,f:-16,i:-3976,pn:2643},
{date:'01.13',p:7486,f:-8717,i:260,pn:2593},
{date:'01.14',p:2992,f:-2946,i:-580,pn:570},
{date:'01.15',p:1231,f:561,i:-2590,pn:386},
{date:'01.16',p:-5757,f:6244,i:190,pn:757},
{date:'01.17',p:2864,f:-2331,i:-1007,pn:1314},
{date:'01.20',p:2767,f:-4162,i:664,pn:736},
{date:'01.21',p:534,f:-1731,i:620,pn:589},
{date:'01.22',p:-8232,f:3500,i:4208,pn:881},
{date:'01.23',p:7596,f:-6174,i:-2032,pn:1504},
{date:'01.24',p:-3830,f:2751,i:436,pn:651},
{date:'01.31',p:9620,f:-11679,i:2859,pn:355},
{date:'02.03',p:11220,f:-8689,i:-3704,pn:2097},
{date:'02.04',p:-2932,f:799,i:1231,pn:1387},
{date:'02.05',p:-1929,f:645,i:312,pn:908},
{date:'02.06',p:-6060,f:3516,i:1612,pn:471},
{date:'02.07',p:3302,f:-2389,i:-2099,pn:1224},
{date:'02.10',p:-700,f:-2786,i:2626,pn:1848},
{date:'02.11',p:-4694,f:1402,i:2437,pn:587},
{date:'02.12',p:-1982,f:3729,i:-2217,pn:102},
{date:'02.13',p:-6096,f:-1138,i:6730,pn:683},
{date:'02.14',p:-652,f:-3218,i:3661,pn:1760},
{date:'02.17',p:-336,f:-2228,i:2431,pn:828},
{date:'02.18',p:-1884,f:185,i:1648,pn:1210},
{date:'02.19',p:-12186,f:3927,i:7767,pn:677},
{date:'02.20',p:2907,f:-2904,i:-1079,pn:808},
{date:'02.21',p:28,f:-2181,i:1181,pn:743},
{date:'02.24',p:1929,f:-2040,i:-925,pn:178},
{date:'02.25',p:3121,f:-3190,i:-944,pn:138},
{date:'02.26',p:-201,f:-3228,i:2404,pn:574},
{date:'02.27',p:4810,f:-1754,i:-3389,pn:459},
{date:'02.28',p:20324,f:-15524,i:-6167,pn:59},
{date:'03.04',p:2044,f:-1896,i:-1473,pn:515},
{date:'03.05',p:911,f:-2233,i:479,pn:709},
{date:'03.06',p:-3693,f:1382,i:1561,pn:-6},
{date:'03.07',p:-1941,f:596,i:279,pn:463},
{date:'03.10',p:2097,f:-4242,i:1428,pn:461},
{date:'03.11',p:4929,f:-15373,i:-2381,pn:-269},
{date:'03.12',p:-5050,f:3790,i:319,pn:-306},
{date:'03.13',p:-737,f:-4804,i:4448,pn:-466},
{date:'03.14',p:2079,f:-2894,i:-205,pn:561},
{date:'03.17',p:-11804,f:6152,i:4947,pn:289},
{date:'03.18',p:-6126,f:4408,i:950,pn:342},
{date:'03.19',p:-6744,f:3026,i:2873,pn:230},
{date:'03.20',p:-7013,f:5487,i:664,pn:-30},
{date:'03.21',p:-5379,f:8478,i:-4020,pn:134},
{date:'03.24',p:-781,f:76,i:-288,pn:50},
{date:'03.25',p:-642,f:-787,i:691,pn:-196},
{date:'03.26',p:-6798,f:3504,i:2603,pn:156},
{date:'03.27',p:1196,f:877,i:-3152,pn:-255},
{date:'03.28',p:5408,f:-6403,i:31,pn:401},
{date:'03.31',p:7891,f:-15754,i:6673,pn:607},
{date:'04.01',p:866,f:-3901,i:1806,pn:774},
{date:'04.02',p:4791,f:-7242,i:1480,pn:1735},
{date:'04.03',p:8014,f:-13752,i:4610,pn:2722},
{date:'04.04',p:10770,f:-17869,i:6211,pn:2067},
{date:'04.07',p:16721,f:-20957,i:2571,pn:4307},
{date:'04.08',p:6029,f:-6425,i:-898,pn:1132},
{date:'04.09',p:9389,f:-10007,i:-698,pn:579},
{date:'04.10',p:-10693,f:3287,i:6682,pn:540},
{date:'04.11',p:4339,f:-6888,i:1378,pn:1749},
{date:'04.14',p:1939,f:-2420,i:-67,pn:1119},
{date:'04.15',p:-1468,f:-1177,i:1831,pn:945},
{date:'04.16',p:3835,f:-4577,i:-153,pn:868},
{date:'04.17',p:-1102,f:-3519,i:3689,pn:562},
{date:'04.18',p:-223,f:-1052,i:816,pn:784},
{date:'04.21',p:1864,f:-2886,i:234,pn:563},
{date:'04.22',p:1667,f:-2430,i:107,pn:943},
{date:'04.23',p:-5485,f:-1977,i:6866,pn:637},
{date:'04.24',p:1351,f:-77,i:-1987,pn:-160},
{date:'04.25',p:-7741,f:6126,i:5072,pn:844},
{date:'04.28',p:-496,f:-854,i:916,pn:306},
{date:'04.29',p:-1591,f:6925,i:-5804,pn:574},
{date:'04.30',p:3055,f:-1688,i:-2210,pn:-90},
{date:'05.02',p:-2349,f:-1702,i:3228,pn:452},
{date:'05.07',p:-4646,f:3488,i:869,pn:-82},
{date:'05.08',p:-13,f:1303,i:-1898,pn:-82},
{date:'05.09',p:632,f:675,i:-1873,pn:912},
{date:'05.12',p:-3907,f:-71,i:3429,pn:261},
{date:'05.13',p:-1360,f:1714,i:-893,pn:-600},
{date:'05.14',p:-10024,f:4704,i:5348,pn:141},
{date:'05.15',p:460,f:2723,i:-3681,pn:47},
{date:'05.16',p:-2823,f:1694,i:1134,pn:156},
{date:'05.19',p:2986,f:-1134,i:-1948,pn:-243},
{date:'05.20',p:206,f:-1145,i:610,pn:-207},
{date:'05.21',p:-3315,f:1920,i:1046,pn:-52},
{date:'05.22',p:6848,f:-2237,i:-4319,pn:83},
{date:'05.23',p:1347,f:-585,i:-1026,pn:-107},
{date:'05.26',p:-5158,f:1015,i:4323,pn:475},
{date:'05.27',p:537,f:-781,i:-201,pn:-206},
{date:'05.28',p:-9907,f:2999,i:7438,pn:448},
{date:'05.29',p:-9963,f:2897,i:6842,pn:680},
{date:'05.30',p:6051,f:-6070,i:-160,pn:144},
{date:'06.02',p:982,f:1250,i:-2415,pn:-90},
{date:'06.04',p:-12260,f:10507,i:2046,pn:29},
{date:'06.05',p:-11892,f:9801,i:2207,pn:616},
{date:'06.09',p:-2301,f:9767,i:-7332,pn:-1114},
{date:'06.10',p:-6269,f:6323,i:142,pn:-90},
{date:'06.11',p:-3663,f:1661,i:2304,pn:-276},
{date:'06.12',p:-1794,f:4073,i:-2304,pn:1240},
{date:'06.13',p:4674,f:1210,i:-6461,pn:293},
{date:'06.16',p:463,f:-3224,i:2524,pn:-284},
{date:'06.17',p:2245,f:-953,i:-1006,pn:-1110},
{date:'06.18',p:-4318,f:2870,i:1101,pn:-475},
{date:'06.19',p:3500,f:-826,i:-3018,pn:-1356},
{date:'06.20',p:-5966,f:5626,i:372,pn:113},
{date:'06.23',p:13797,f:-3668,i:-9485,pn:-168},
{date:'06.24',p:-5676,f:4383,i:2594,pn:-984},
{date:'06.25',p:7580,f:-1108,i:-5883,pn:-520},
{date:'06.26',p:8325,f:-5794,i:-4080,pn:-467},
{date:'06.27',p:4868,f:-8580,i:3434,pn:-128},
{date:'06.30',p:1892,f:-6489,i:4757,pn:-301},
{date:'07.01',p:-6405,f:1760,i:4745,pn:-688},
{date:'07.02',p:2329,f:-3278,i:720,pn:-19},
{date:'07.03',p:-12330,f:6427,i:5484,pn:-67},
{date:'07.04',p:2575,f:1624,i:-3822,pn:-795},
{date:'07.07',p:1558,f:-937,i:-811,pn:-593},
{date:'07.08',p:-2549,f:2461,i:-326,pn:-26},
{date:'07.09',p:4310,f:-4105,i:-571,pn:31},
{date:'07.10',p:-5869,f:4694,i:447,pn:450},
{date:'07.11',p:1250,f:3259,i:-743,pn:46},
{date:'07.14',p:-3568,f:3707,i:-947,pn:-205},
{date:'07.15',p:-3102,f:2123,i:-167,pn:289},
{date:'07.16',p:4016,f:555,i:-5525,pn:-748},
{date:'07.17',p:-3356,f:493,i:1583,pn:-136},
{date:'07.18',p:-3411,f:1878,i:320,pn:-942},
{date:'07.21',p:-10578,f:8935,i:994,pn:-93},
{date:'07.22',p:4780,f:-1288,i:-4128,pn:-760},
{date:'07.23',p:-6982,f:4228,i:1917,pn:-1034},
{date:'07.24',p:-9513,f:7386,i:1273,pn:-157},
{date:'07.25',p:-4616,f:2706,i:1100,pn:464},
{date:'07.28',p:-9975,f:4753,i:4520,pn:-668},
{date:'07.29',p:-8259,f:6054,i:1167,pn:-119},
{date:'07.30',p:-9844,f:5783,i:3307,pn:-157},
{date:'07.31',p:2235,f:3450,i:-7053,pn:-1427},
{date:'08.01',p:16283,f:-6524,i:-10720,pn:-196},
{date:'08.04',p:-2996,f:830,i:1316,pn:104},
{date:'08.05',p:-4785,f:2919,i:947,pn:189},
{date:'08.06',p:474,f:2804,i:-4020,pn:-39},
{date:'08.07',p:-2048,f:-171,i:1092,pn:410},
{date:'08.08',p:1835,f:-1576,i:-1318,pn:-802},
{date:'08.11',p:-1407,f:2169,i:-2160,pn:-907},
{date:'08.12',p:634,f:-604,i:-981,pn:214},
{date:'08.13',p:-6648,f:6349,i:-809,pn:-171},
{date:'08.14',p:-534,f:-779,i:197,pn:-788},
{date:'08.18',p:3570,f:-4881,i:813,pn:348},
{date:'08.19',p:904,f:-4544,i:2539,pn:-222},
{date:'08.20',p:-3929,f:-2185,i:5024,pn:-720},
{date:'08.21',p:-2591,f:-152,i:1598,pn:252},
{date:'08.22',p:-4572,f:1826,i:1556,pn:110},
{date:'08.25',p:-3857,f:1224,i:1543,pn:280},
{date:'08.26',p:8519,f:-6836,i:-2657,pn:-161},
{date:'08.27',p:569,f:-2023,i:277,pn:171},
{date:'08.28',p:-3939,f:-241,i:3264,pn:748},
{date:'08.29',p:2353,f:-3724,i:648,pn:-270},
{date:'09.01',p:3469,f:-2720,i:-1940,pn:146},
{date:'09.02',p:-3474,f:4010,i:-1416,pn:174},
{date:'09.03',p:-1563,f:4359,i:-3756,pn:-649},
{date:'09.04',p:-2847,f:2025,i:-232,pn:-212},
{date:'09.05',p:-552,f:-1374,i:1124,pn:-138},
{date:'09.08',p:-3848,f:2301,i:778,pn:-130},
{date:'09.09',p:-10371,f:6808,i:2806,pn:270},
{date:'09.10',p:-22634,f:13817,i:9046,pn:373},
{date:'09.11',p:-11493,f:3000,i:8225,pn:-1489},
{date:'09.12',p:-20287,f:14355,i:6119,pn:1863},
{date:'09.15',p:-1374,f:2667,i:-1376,pn:-567},
{date:'09.16',p:-17637,f:17927,i:1083,pn:138},
{date:'09.17',p:2522,f:-347,i:-3075,pn:435},
{date:'09.18',p:-7816,f:2851,i:4294,pn:467},
{date:'09.19',p:5332,f:-3080,i:-3357,pn:-600},
{date:'09.22',p:-7682,f:5653,i:2672,pn:-137},
{date:'09.23',p:-2462,f:3414,i:-1363,pn:-295},
{date:'09.24',p:17,f:-2486,i:2124,pn:-958},
{date:'09.25',p:-5411,f:2196,i:2707,pn:-962},
{date:'09.26',p:10997,f:-5707,i:-4892,pn:-687},
{date:'09.29',p:-7480,f:4472,i:3014,pn:126},
{date:'09.30',p:-265,f:230,i:-497,pn:-17},
{date:'10.01',p:-10812,f:8455,i:2208,pn:-349},
{date:'10.02',p:-30715,f:31265,i:-675,pn:450},
{date:'10.10',p:-5022,f:10592,i:-5936,pn:834},
{date:'10.13',p:11649,f:-8220,i:-4471,pn:252},
{date:'10.14',p:20,f:5581,i:-6299,pn:-351},
{date:'10.15',p:-9706,f:1631,i:7512,pn:822},
{date:'10.16',p:-13936,f:6533,i:7813,pn:982},
{date:'10.17',p:-3122,f:4438,i:-1688,pn:-80},
{date:'10.20',p:-4109,f:-2500,i:6428,pn:32},
{date:'10.21',p:-1556,f:-124,i:2116,pn:496},
{date:'10.22',p:-769,f:-7033,i:7633,pn:317},
{date:'10.23',p:7505,f:-4071,i:-3972,pn:-1007},
{date:'10.24',p:-20005,f:5756,i:14054,pn:730},
{date:'10.27',p:-7969,f:6471,i:2343,pn:-886},
{date:'10.28',p:15728,f:-16379,i:925,pn:-666},
{date:'10.29',p:-3583,f:-1066,i:5196,pn:-3123},
{date:'10.30',p:9363,f:-1173,i:-8379,pn:-1734},
{date:'10.31',p:-2018,f:13212,i:-11064,pn:-1567},
{date:'11.03',p:6256,f:-7949,i:1841,pn:-332},
{date:'11.04',p:27009,f:-22282,i:-4989,pn:-1195},
{date:'11.05',p:25538,f:-20695,i:-1877,pn:583},
{date:'11.06',p:8840,f:-16950,i:8301,pn:-368},
{date:'11.07',p:6791,f:-4550,i:-2446,pn:-688},
{date:'11.10',p:-11607,f:-1510,i:13066,pn:648},
{date:'11.11',p:-2830,f:770,i:2247,pn:-899},
{date:'11.12',p:-4423,f:-4265,i:9093,pn:-452},
{date:'11.13',p:-2343,f:9989,i:-7179,pn:275},
{date:'11.14',p:32346,f:-23575,i:-9005,pn:-67},
{date:'11.17',p:-5000,f:5189,i:-245,pn:-467},
{date:'11.18',p:12382,f:-5500,i:-6788,pn:-594},
{date:'11.19',p:4450,f:-10495,i:6256,pn:59},
{date:'11.20',p:-13817,f:7406,i:7566,pn:-314},
{date:'11.21',p:22695,f:-28229,i:4935,pn:851},
{date:'11.24',p:-4619,f:-7993,i:12719,pn:-228},
{date:'11.25',p:-276,f:49,i:315,pn:-611},
{date:'11.26',p:-18048,f:5158,i:12280,pn:362},
{date:'11.27',p:-6152,f:1546,i:4326,pn:-6},
{date:'11.28',p:15685,f:-20369,i:4587,pn:-1367},
{date:'12.01',p:528,f:2235,i:-2333,pn:-962},
{date:'12.02',p:-15763,f:12147,i:3929,pn:708},
{date:'12.03',p:-8984,f:2816,i:7364,pn:627},
{date:'12.04',p:5585,f:-6960,i:1318,pn:522},
{date:'12.05',p:-21156,f:9934,i:11528,pn:58},
{date:'12.08',p:-3449,f:3211,i:-308,pn:-153},
{date:'12.09',p:-133,f:-889,i:494,pn:996},
{date:'12.10',p:-889,f:3739,i:-3003,pn:157},
{date:'12.11',p:3922,f:3656,i:-7753,pn:-174},
{date:'12.12',p:-14625,f:414,i:14184,pn:892},
{date:'12.15',p:14210,f:-9569,i:-4803,pn:1166},
{date:'12.16',p:12410,f:-10305,i:-2309,pn:137},
{date:'12.17',p:-3374,f:-322,i:3353,pn:-287},
{date:'12.18',p:4130,f:-3459,i:-1006,pn:-846},
{date:'12.19',p:-1412,f:-7573,i:8541,pn:-412},
{date:'12.22',p:-26714,f:11017,i:16055,pn:228},
{date:'12.23',p:-12853,f:9551,i:3527,pn:-374},
{date:'12.24',p:-7171,f:5225,i:2039,pn:327},
{date:'12.26',p:-23265,f:17790,i:4435,pn:-975},
{date:'12.29',p:661,f:3337,i:-3133,pn:379},
{date:'12.30',p:8448,f:-4768,i:-3763,pn:-1084}
];

// 2026년도 데이터 구성
const data2026 = labels2026.map((d, idx) => ({
  date: d,
  p: dailyIndividual2026[idx],
  f: dailyForeign2026[idx],
  i: dailyInstitution2026[idx],
  pn: dailyPension2026[idx]
}));

// 누적치 계산 (연도별)
function sumField(arr, key) {
  return arr.reduce((acc, cur) => acc + cur[key], 0);
}
function fmtJo(v) {
  const jo = v / 10000;
  return (jo >= 0 ? '+' : '') + jo.toFixed(1) + '조원';
}
function fmtEok(v) {
  return (v >= 0 ? '+' : '') + v.toLocaleString() + '억';
}

const yearlySummaryEl = document.getElementById('yearlySummary');
const combinedData = data2025.map(row => ({ date: '25.' + row.date, p: row.p, f: row.f, i: row.i, pn: row.pn }))
  .concat(data2026.map(row => ({ date: '26.' + row.date, p: row.p, f: row.f, i: row.i, pn: row.pn })));

function groupByMonth(dataArr) {
  const groups = new Map();
  dataArr.forEach(row => {
    const m = row.date.split('.')[0];
    if (!groups.has(m)) groups.set(m, []);
    groups.get(m).push(row);
  });
  return groups;
}

const MONTH_KEY = 'month-nav';
const monthGroups2026 = groupByMonth(data2026);
const monthKeys2026 = Array.from(monthGroups2026.keys());

let currentMonthIdx = monthKeys2026.length - 1;

function monthLabel(idx) {
  const mm = parseInt(monthKeys2026[idx], 10);
  const isLatest = idx === monthKeys2026.length - 1;
  return isLatest ? `이번 달 (${mm}월)` : `2026년 ${mm}월`;
}

function updateMonthNav() {
  const monthBtn = document.getElementById('monthBtn');
  const prevBtn = document.getElementById('monthPrev');
  const nextBtn = document.getElementById('monthNext');
  if (!monthBtn) return;
  const key = monthKeys2026[currentMonthIdx];
  yearDatasets[MONTH_KEY] = monthGroups2026.get(key);
  monthBtn.textContent = monthLabel(currentMonthIdx);
  prevBtn.disabled = currentMonthIdx <= 0;
  nextBtn.disabled = currentMonthIdx >= monthKeys2026.length - 1;
}

const yearDatasets = {};
yearDatasets['2025~2026년 총합'] = combinedData;
yearDatasets['2026년'] = data2026;
yearDatasets['2025년'] = data2025;
if (monthKeys2026.length) yearDatasets[MONTH_KEY] = monthGroups2026.get(monthKeys2026[currentMonthIdx]);

function buildCumulative(dataArr, kospiLookup) {
  const labels = [];
  const individual = [];
  const foreign = [];
  const institution = [];
  const pension = [];
  const kospi = [];
  let si = 0, sf = 0, sn = 0, sp = 0;
  dataArr.forEach(row => {
    si += row.p; sf += row.f; sn += row.i; sp += (row.pn || 0);
    labels.push(row.date);
    individual.push(Math.round(si / 1000) / 10);
    foreign.push(Math.round(sf / 1000) / 10);
    institution.push(Math.round(sn / 1000) / 10);
    pension.push(Math.round(sp / 1000) / 10);
    let kVal;
    if (typeof kospiLookup === 'function') {
      kVal = kospiLookup(row.date);
    } else if (kospiLookup) {
      kVal = kospiLookup[row.date];
    }
    kospi.push(kVal === undefined || kVal === null ? null : kVal);
  });
  return { labels, individual, foreign, institution, pension, kospi };
}

function getKospiLookup(yearLabel) {
  if (yearLabel === '2025~2026년 총합') {
    return (dateStr) => {
      if (dateStr.startsWith('25.')) return kospiIndex2025[dateStr.slice(3)];
      if (dateStr.startsWith('26.')) return kospiIndex2026[dateStr.slice(3)];
      return undefined;
    };
  }
  if (yearLabel === '2025년') return kospiIndex2025;
  return kospiIndex2026;
}

let activeYearLabel = '2026년';
let activeDisplayLabel = null;
let chartInstance = null;

const narrowQuery = window.matchMedia('(max-width: 1099px)');
function isNarrow() {
  return narrowQuery.matches;
}
// Daily swings crammed into a phone-width plot read as jagged spikes, but with
// only a month of points the same smoothing makes the line wobble.
function lineTension(pointCount) {
  if (!isNarrow() || pointCount < 60) return 0;
  return 0.15;
}
function layoutTotalBar() {
  const bar = document.querySelector('#view-mytrades .mytrades-total');
  const philosophy = document.querySelector('#view-mytrades .mytrades-col.philosophy');
  if (!bar || !philosophy) return;
  if (isNarrow()) {
    bar.classList.add('mobile-bar');
    if (bar.parentElement !== document.body) document.body.appendChild(bar);
  } else {
    bar.classList.remove('mobile-bar');
    if (bar.parentElement !== philosophy) philosophy.appendChild(bar);
  }
}

// 모바일에서는 누적 데이터 섹션을 투자자별 차트 카드 바로 아래로 옮기고,
// 데스크톱에서는 사이드바 맨 위로 되돌린다. (노드만 이동, 재생성 없음)
function layoutYearlySection() {
  const yearlyToggle = document.getElementById('yearlyToggle');
  const sidebar = document.getElementById('sidebarPanel');
  const chart = document.getElementById('investorChart');
  if (!yearlyToggle || !sidebar || !chart) return;
  const yearlySection = yearlyToggle.closest('.sidebar-section');
  const chartSection = chart.closest('.panel-card');
  if (!yearlySection || !chartSection) return;
  if (isNarrow()) {
    if (yearlySection.previousElementSibling !== chartSection) chartSection.after(yearlySection);
  } else if (sidebar.firstElementChild !== yearlySection) {
    sidebar.insertBefore(yearlySection, sidebar.firstElementChild);
  }
}

function layoutMonthPnl() {
  document.querySelectorAll('.month-block').forEach(block => {
    const header = block.querySelector('h4.collapsible-header');
    const entry = block.querySelector('.month-entry');
    const pnl = block.querySelector('.month-pnl');
    if (!header || !entry || !pnl) return;
    if (isNarrow()) {
      if (pnl.parentElement !== header) header.appendChild(pnl);
    } else if (pnl.parentElement !== entry) {
      entry.insertBefore(pnl, entry.firstChild);
    }
  });
}

// 월별 상승 폭 카드 높이를 좌측 달력과 동일하게 고정 → 목록이 길어도 늘어나지 않고 스크롤
function layoutMonthReturns() {
  const cal = document.getElementById('monthUpdown');
  const card = document.getElementById('monthReturns');
  if (!cal || !card) return;
  if (isNarrow()) { card.style.height = ''; return; } // 모바일은 자연 높이(세로 스택)
  card.style.height = cal.offsetHeight + 'px';
}
window.addEventListener('resize', layoutMonthReturns);

narrowQuery.addEventListener('change', () => {
  layoutMonthPnl();
  layoutTotalBar();
  layoutYearlySection();
  layoutMonthReturns();
  if (!chartInstance) return;
  chartInstance.destroy();
  chartInstance = null;
  renderChart(activeYearLabel, activeDisplayLabel);
});

function renderChart(yearLabel, displayLabel) {
  const dataArr = yearDatasets[yearLabel];
  if (!dataArr || dataArr.length === 0) return;

  activeYearLabel = yearLabel;
  activeDisplayLabel = displayLabel;
  const kospiLookup = getKospiLookup(yearLabel);
  const { labels, individual, foreign, institution, pension, kospi } = buildCumulative(dataArr, kospiLookup);
  const p = sumField(dataArr, 'p');
  const f = sumField(dataArr, 'f');
  const i = sumField(dataArr, 'i');

  document.getElementById('totalIndividual').textContent = fmtJo(p);
  document.getElementById('totalIndividual').className = 'value ' + (p >= 0 ? 'red' : 'blue');
  document.getElementById('totalForeign').textContent = fmtJo(f);
  document.getElementById('totalForeign').className = 'value ' + (f >= 0 ? 'red' : 'blue');
  document.getElementById('totalInstitution').textContent = fmtJo(i);
  document.getElementById('totalInstitution').className = 'value ' + (i >= 0 ? 'red' : 'blue');
  const pn = dataArr.reduce((acc, r) => acc + (r.pn || 0), 0);
  const pnEl = document.getElementById('totalPension');
  if (pnEl) { pnEl.textContent = fmtJo(pn); pnEl.className = 'value ' + (pn >= 0 ? 'red' : 'blue'); }
  document.getElementById('pageSubtitle').textContent = `${dataArr[0].date} ~ ${dataArr[dataArr.length - 1].date}`;

  document.querySelectorAll('.year-card').forEach(card => {
    card.classList.toggle('active', card.dataset.year === yearLabel);
  });
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.year === yearLabel);
  });

  if (chartInstance) {
    // Periods have different point counts, so Chart.js morphing looks like the
    // lines are crawling. Swap the data instantly behind a short fade instead.
    const canvas = chartInstance.canvas;
    canvas.classList.add('swapping');
    setTimeout(() => {
      chartInstance.data.labels = labels;
      chartInstance.data.datasets[0].data = individual;
      chartInstance.data.datasets[1].data = foreign;
      chartInstance.data.datasets[2].data = institution;
      chartInstance.data.datasets[3].data = pension;
      chartInstance.data.datasets[4].data = kospi;
      const tension = lineTension(labels.length);
      chartInstance.data.datasets.forEach(ds => { ds.tension = tension; });
      chartInstance.update('none');
      canvas.classList.remove('swapping');
    }, 130);
  } else {
    // 툴팁: 수직 크로스헤어 옆에 붙여서 따라감, y(상하)는 차트 상단 고정
    Chart.Tooltip.positioners.fixedTop = function(elements, eventPosition) {
      const area = this.chart.chartArea;
      const px = elements.length ? elements[0].element.x : eventPosition.x;
      const w = this.width || 0;
      const gap = 18;
      // 오른쪽에 공간 있으면 선 오른쪽, 없으면 왼쪽에 배치 (박스는 x 중심 정렬)
      const x = (px + gap + w <= area.right) ? (px + gap + w / 2) : (px - gap - w / 2);
      return { x, y: area.top + 6 };
    };
    const crosshairPlugin = {
      id: 'crosshair',
      afterDraw(chart) {
        const active = chart.tooltip && chart.tooltip._active;
        if (!active || !active.length) return;
        const x = active[0].element.x;
        const { top, bottom } = chart.chartArea;
        const ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = cssVar('--chart-axis');
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.stroke();
        ctx.restore();
      }
    };
    chartInstance = new Chart(document.getElementById('investorChart'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: '개인', data: individual, borderColor: cssVar('--s-individual'), backgroundColor: cssVar('--s-individual'), borderWidth: isNarrow() ? 1 : 2, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4, tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round', yAxisID: 'y' },
          { label: '외국인', data: foreign, borderColor: cssVar('--s-foreign'), backgroundColor: cssVar('--s-foreign'), borderWidth: isNarrow() ? 1 : 2, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4, tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round', yAxisID: 'y' },
          { label: '기관', data: institution, borderColor: cssVar('--s-inst'), backgroundColor: cssVar('--s-inst'), borderWidth: isNarrow() ? 1 : 1.5, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4, tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round', yAxisID: 'y' },
          { label: '연기금', data: pension, borderColor: cssVar('--s-pension'), backgroundColor: cssVar('--s-pension'), borderWidth: isNarrow() ? 1 : 1.5, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4, tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round', yAxisID: 'y' },
          { label: '코스피', data: kospi, borderColor: cssVar('--s-kospi'), backgroundColor: cssVar('--s-kospi'), borderWidth: isNarrow() ? 1 : 1.5, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4, tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round', yAxisID: 'y1', spanGaps: true }
        ]
      },
      plugins: [crosshairPlugin],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // The built-in grow-from-baseline animation reads as a flash of a flat
        // line; the canvas cross-fade handles the transition instead.
        animation: false,
        animations: { colors: false, x: false, y: false },
        transitions: { active: { animation: { duration: 0 } } },
        // 신용공여 차트와 같은 기본 터치 정책: 누르는 동안 해당 지점을
        // 탐색하고 손가락 이동에 따라 툴팁이 자연스럽게 갱신된다.
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        interaction: { mode: 'index', intersect: false },
        hover: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            position: 'fixedTop',
            yAlign: 'top',
            backgroundColor: cssVar('--tooltip-bg'),
            cornerRadius: 12,
            padding: isNarrow() ? 9 : 14,
            boxPadding: isNarrow() ? 3 : 6,
            bodySpacing: isNarrow() ? 4 : 8,
            titleMarginBottom: isNarrow() ? 6 : 10,
            titleColor: cssVar('--tooltip-title'),
            bodyColor: cssVar('--tooltip-body'),
            titleFont: { size: isNarrow() ? 11 : 13, weight: '600' },
            bodyFont: { size: isNarrow() ? 11 : 12 },
            caretPadding: 8,
            caretSize: 0,
            displayColors: true,
            usePointStyle: true,
            callbacks: {
              label: (ctx) => {
                if (ctx.dataset.label === '코스피') {
                  return ctx.parsed.y === null ? '코스피: 데이터 없음' : `코스피: ${ctx.parsed.y.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                }
                return `${ctx.dataset.label} 누적: ${ctx.parsed.y > 0 ? '+' : ''}${ctx.parsed.y}조원`;
              },
              afterBody: (items) => {
                const idx = items[0].dataIndex;
                const row = yearDatasets[activeYearLabel][idx];
                const lines = ['', `[${row.date} 당일]`, `개인 ${fmtEok(row.p)}원`, `외국인 ${fmtEok(row.f)}원`, `기관 ${fmtEok(row.i)}원`];
                if (row.pn != null) lines.push(`연기금 ${fmtEok(row.pn)}원`);
                return lines;
              }
            }
          }
        },
        layout: { padding: { right: isNarrow() ? 8 : 0 } },
        scales: {
          y: {
            position: 'left',
            grace: isNarrow() ? '6%' : 0,
            title: { display: !isNarrow(), text: '누적 순매수 (조원)', color: cssVar('--chart-axis'), font: { size: 12 } },
            ticks: {
              color: cssVar('--chart-axis'),
              font: { size: isNarrow() ? 10 : 11 },
              maxTicksLimit: isNarrow() ? 5 : undefined,
              padding: isNarrow() ? 2 : 3
            },
            grid: { color: cssVar('--chart-grid') },
            border: { display: true, color: cssVar('--chart-grid') }
          },
          y1: {
            position: 'right',
            display: !isNarrow(),
            // Without headroom the KOSPI line is pinned to the axis line.
            grace: isNarrow() ? '12%' : '4%',
            title: { display: true, text: '코스피 지수', color: cssVar('--s-kospi'), font: { size: 12 } },
            ticks: { color: cssVar('--s-kospi'), font: { size: 11 }, padding: 3 },
            grid: { display: false },
            border: { display: true, color: cssVar('--chart-grid') }
          },
          x: {
            ticks: {
              color: cssVar('--chart-axis'),
              font: { size: isNarrow() ? 9 : 10 },
              maxRotation: isNarrow() ? 0 : 0,
              minRotation: 0,
              autoSkip: true,
              maxTicksLimit: isNarrow() ? 5 : 9,
              padding: 4
            },
            grid: { display: false },
            border: { display: false }
          }
        }
      }
    });

    const canvas = document.getElementById('investorChart');
    const clearTooltip = () => {
      if (!chartInstance) return;
      chartInstance.setActiveElements([]);
      chartInstance.tooltip.setActiveElements([], { x: 0, y: 0 });
      chartInstance.update('none');
    };
    // Leave only the tooltip interaction; block long-press copy/save and drag.
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    canvas.addEventListener('dragstart', e => e.preventDefault());
    canvas.addEventListener('mouseleave', clearTooltip, { passive: true });
    // 모바일에서 손가락을 떼면 브라우저가 그 지점에 유령 마우스 이벤트
    // (mousemove/click)를 발생시켜 방금 지운 툴팁을 되살린다. touchend에서
    // preventDefault로 그 에뮬레이션을 막아, 손을 떼는 즉시 툴팁이 사라지고
    // 다시 뜨지 않게 한다.
    canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      clearTooltip();
    }, { passive: false });
    canvas.addEventListener('touchcancel', clearTooltip, { passive: true });

  }
  syncLegendDim();
}

// 범례 클릭 → 해당 항목만 표시(다시 누르면 전체 복귀), 나머지는 흐리게
function syncLegendDim() {
  const legend = document.getElementById('investorLegend');
  if (!legend || !chartInstance) return;
  legend.querySelectorAll('span[data-ds]').forEach(span => {
    span.classList.toggle('legend-off', !chartInstance.isDatasetVisible(+span.dataset.ds));
  });
}
(function initLegendIsolate() {
  const legend = document.getElementById('investorLegend');
  if (!legend) return;
  legend.querySelectorAll('span[data-ds]').forEach(span => {
    const idx = +span.dataset.ds;
    span.addEventListener('click', () => {
      if (!chartInstance) return;
      const n = chartInstance.data.datasets.length;
      let visCount = 0;
      for (let k = 0; k < n; k++) if (chartInstance.isDatasetVisible(k)) visCount++;
      const onlyThis = chartInstance.isDatasetVisible(idx) && visCount === 1;
      for (let k = 0; k < n; k++) chartInstance.setDatasetVisibility(k, onlyThis ? true : k === idx);
      chartInstance.update();
      syncLegendDim();
    });
  });
})();

Object.keys(yearDatasets).forEach(label => {
  if (label === MONTH_KEY) return;
  const data = yearDatasets[label];
  const card = document.createElement('div');
  card.className = 'year-card';
  card.dataset.year = label;
  if (data.length === 0) {
    card.innerHTML = `<p class="year-label">${label}</p><p style="font-size:12px;color:var(--text-5);margin:0;">데이터 없음</p>`;
    card.style.cursor = 'default';
    card.style.opacity = '0.6';
  } else {
    const stats = [
      ['개인', sumField(data, 'p')],
      ['외국인', sumField(data, 'f')],
      ['기관', sumField(data, 'i')]
    ];
    if (data.some(r => r.pn != null)) {
      stats.push(['연기금', data.reduce((a, r) => a + (r.pn || 0), 0)]);
    }
    const statsHtml = stats.map(([k, v]) =>
      `<div class="stat"><span class="k">${k}</span><span class="v ${v>=0?'pos':'neg'}">${fmtJo(v)}</span></div>`
    ).join('');
    card.innerHTML = `
      <p class="year-label">${label.replace(' 총합', '')}</p>
      <div class="year-stats" style="grid-template-columns:repeat(${stats.length},minmax(0,1fr))">${statsHtml}</div>
    `;
    card.addEventListener('click', () => renderChart(label));
  }
  yearlySummaryEl.appendChild(card);
});

const periodButtonsEl = document.getElementById('periodButtons');

if (monthKeys2026.length) {
  const monthNav = document.createElement('div');
  monthNav.className = 'month-nav';
  monthNav.id = 'monthNav';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'month-arrow';
  prevBtn.id = 'monthPrev';
  prevBtn.setAttribute('aria-label', '이전 달');
  prevBtn.innerHTML = '<span class="chevron left"></span>';

  const monthBtn = document.createElement('button');
  monthBtn.className = 'seg-btn';
  monthBtn.id = 'monthBtn';
  monthBtn.dataset.year = MONTH_KEY;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'month-arrow';
  nextBtn.id = 'monthNext';
  nextBtn.setAttribute('aria-label', '다음 달');
  nextBtn.innerHTML = '<span class="chevron right"></span>';

  monthNav.appendChild(prevBtn);
  monthNav.appendChild(monthBtn);
  monthNav.appendChild(nextBtn);
  periodButtonsEl.appendChild(monthNav);

  // Pressing the month button again returns to whatever period was showing.
  let periodBeforeMonth = '2026년';
  monthBtn.addEventListener('click', () => {
    if (activeYearLabel === MONTH_KEY) {
      renderChart(periodBeforeMonth);
      if (periodBeforeMonth === '2025~2026년 총합') {
        setDayTabsVisible(true);
      } else {
        showDayTab(yearCardToTab[periodBeforeMonth]);
        setDayTabsVisible(false);
      }
      return;
    }
    periodBeforeMonth = activeYearLabel;
    renderChart(MONTH_KEY, monthLabel(currentMonthIdx));
    showDayTab('2026');
    setDayTabsVisible(false);
  });
  prevBtn.addEventListener('click', () => {
    if (currentMonthIdx <= 0) return;
    currentMonthIdx--;
    updateMonthNav();
    renderChart(MONTH_KEY, monthLabel(currentMonthIdx));
  });
  nextBtn.addEventListener('click', () => {
    if (currentMonthIdx >= monthKeys2026.length - 1) return;
    currentMonthIdx++;
    updateMonthNav();
    renderChart(MONTH_KEY, monthLabel(currentMonthIdx));
  });

  updateMonthNav();
}

const kospiIndex2025 = {'01.02':2398.94,'01.03':2441.92,'01.06':2488.64,'01.07':2492.1,'01.08':2521.05,'01.09':2521.9,'01.10':2515.78,'01.13':2489.56,'01.14':2497.4,'01.15':2496.81,'01.16':2527.49,'01.17':2523.55,'01.20':2520.05,'01.21':2518.03,'01.22':2547.06,'01.23':2515.49,'01.24':2536.8,'01.31':2517.37,'02.03':2453.95,'02.04':2481.69,'02.05':2509.27,'02.06':2536.75,'02.07':2521.92,'02.10':2521.27,'02.11':2539.05,'02.12':2548.39,'02.13':2583.17,'02.14':2591.05,'02.17':2610.42,'02.18':2626.81,'02.19':2671.52,'02.20':2654.06,'02.21':2654.58,'02.24':2645.27,'02.25':2630.29,'02.26':2641.09,'02.27':2621.75,'02.28':2532.78,'03.04':2528.92,'03.05':2558.13,'03.06':2576.16,'03.07':2563.48,'03.10':2570.39,'03.11':2537.6,'03.12':2574.82,'03.13':2573.64,'03.14':2566.36,'03.17':2610.69,'03.18':2612.34,'03.19':2628.62,'03.20':2637.1,'03.21':2643.13,'03.24':2632.07,'03.25':2615.81,'03.26':2643.94,'03.27':2607.15,'03.28':2557.98,'03.31':2481.12,'04.01':2521.39,'04.02':2505.86,'04.03':2486.7,'04.04':2465.42,'04.07':2328.2,'04.08':2334.23,'04.09':2293.7,'04.10':2445.06,'04.11':2432.72,'04.14':2455.89,'04.15':2477.41,'04.16':2447.43,'04.17':2470.41,'04.18':2483.42,'04.21':2488.42,'04.22':2486.64,'04.23':2525.56,'04.24':2522.33,'04.25':2546.3,'04.28':2548.86,'04.29':2565.42,'04.30':2556.61,'05.02':2559.79,'05.07':2573.8,'05.08':2579.48,'05.09':2577.27,'05.12':2607.33,'05.13':2608.42,'05.14':2640.57,'05.15':2621.36,'05.16':2626.87,'05.19':2603.42,'05.20':2601.8,'05.21':2625.58,'05.22':2593.67,'05.23':2592.09,'05.26':2644.4,'05.27':2637.22,'05.28':2670.15,'05.29':2720.64,'05.30':2697.67,'06.02':2698.97,'06.04':2770.84,'06.05':2812.05,'06.09':2855.77,'06.10':2871.85,'06.11':2907.04,'06.12':2920.03,'06.13':2894.62,'06.16':2946.66,'06.17':2950.3,'06.18':2972.19,'06.19':2977.74,'06.20':3021.84,'06.23':3014.47,'06.24':3103.64,'06.25':3108.25,'06.26':3079.56,'06.27':3055.94,'06.30':3071.7,'07.01':3089.65,'07.02':3075.06,'07.03':3116.27,'07.04':3054.28,'07.07':3059.47,'07.08':3114.95,'07.09':3133.74,'07.10':3183.23,'07.11':3175.77,'07.14':3202.03,'07.15':3215.28,'07.16':3186.38,'07.17':3192.29,'07.18':3188.07,'07.21':3210.81,'07.22':3169.94,'07.23':3183.77,'07.24':3190.45,'07.25':3196.05,'07.28':3209.52,'07.29':3230.57,'07.30':3254.47,'07.31':3245.44,'08.01':3119.41,'08.04':3147.75,'08.05':3198.0,'08.06':3198.14,'08.07':3227.68,'08.08':3210.01,'08.11':3206.77,'08.12':3189.91,'08.13':3224.37,'08.14':3225.66,'08.18':3177.28,'08.19':3151.56,'08.20':3130.09,'08.21':3141.74,'08.22':3168.73,'08.25':3209.86,'08.26':3179.36,'08.27':3187.16,'08.28':3196.32,'08.29':3186.01,'09.01':3142.93,'09.02':3172.35,'09.03':3184.42,'09.04':3200.83,'09.05':3205.12,'09.08':3219.59,'09.09':3260.05,'09.10':3314.53,'09.11':3344.2,'09.12':3395.54,'09.15':3407.31,'09.16':3449.62,'09.17':3413.4,'09.18':3461.3,'09.19':3445.24,'09.22':3468.65,'09.23':3486.19,'09.24':3472.14,'09.25':3471.11,'09.26':3386.05,'09.29':3431.21,'09.30':3424.6,'10.01':3455.83,'10.02':3549.21,'10.10':3610.6,'10.13':3584.55,'10.14':3561.81,'10.15':3657.28,'10.16':3748.37,'10.17':3748.89,'10.20':3814.69,'10.21':3823.84,'10.22':3883.68,'10.23':3845.56,'10.24':3941.59,'10.27':4042.83,'10.28':4010.41,'10.29':4081.15,'10.30':4086.89,'10.31':4107.5,'11.03':4221.87,'11.04':4121.74,'11.05':4004.42,'11.06':4026.45,'11.07':3953.76,'11.10':4073.24,'11.11':4106.39,'11.12':4150.39,'11.13':4170.63,'11.14':4011.57,'11.17':4089.25,'11.18':3953.62,'11.19':3929.51,'11.20':4004.85,'11.21':3853.26,'11.24':3846.06,'11.25':3857.78,'11.26':3960.87,'11.27':3986.91,'11.28':3926.59,'12.01':3920.37,'12.02':3994.93,'12.03':4036.3,'12.04':4028.51,'12.05':4100.05,'12.08':4154.85,'12.09':4143.55,'12.10':4135.0,'12.11':4110.62,'12.12':4167.16,'12.15':4090.59,'12.16':3999.13,'12.17':4056.41,'12.18':3994.51,'12.19':4020.55,'12.22':4105.93,'12.23':4117.32,'12.24':4108.62,'12.26':4129.68,'12.29':4220.56,'12.30':4214.17};
const kospiIndex2026 = {'01.02':4309.63,'01.05':4457.52,'01.06':4525.48,'01.07':4551.06,'01.08':4552.37,'01.09':4586.32,'01.12':4624.79,'01.13':4692.64,'01.14':4723.1,'01.15':4797.55,'01.16':4840.74,'01.19':4904.66,'01.20':4885.75,'01.21':4909.93,'01.22':4952.53,'01.23':4990.07,'01.26':4949.59,'01.27':5084.85,'01.28':5170.81,'01.29':5221.25,'01.30':5224.36,'02.02':4949.67,'02.03':5288.08,'02.04':5371.1,'02.05':5163.57,'02.06':5089.14,'02.09':5298.04,'02.10':5301.69,'02.11':5354.49,'02.12':5522.27,'02.13':5507.01,'02.19':5677.25,'02.20':5808.53,'02.23':5846.09,'02.24':5969.64,'02.25':6083.86,'02.26':6307.27,'02.27':6244.13,'03.03':5791.91,'03.04':5093.54,'03.05':5583.9,'03.06':5584.87,'03.09':5251.87,'03.10':5532.59,'03.11':5609.95,'03.12':5583.25,'03.13':5487.24,'03.16':5549.85,'03.17':5640.48,'03.18':5925.03,'03.19':5763.22,'03.20':5781.2,'03.23':5405.75,'03.24':5553.92,'03.25':5642.21,'03.26':5460.46,'03.27':5438.87,'03.30':5277.3,'03.31':5052.46,'04.01':5478.7,'04.02':5234.05,'04.03':5377.3,'04.06':5450.33,'04.07':5494.78,'04.08':5872.34,'04.09':5778.01,'04.10':5858.87,'04.13':5808.62,'04.14':5967.75,'04.15':6091.39,'04.16':6226.05,'04.17':6191.92,'04.20':6219.09,'04.21':6388.47,'04.22':6417.93,'04.23':6475.81,'04.24':6475.63,'04.27':6615.03,'04.28':6641.02,'04.29':6690.9,'04.30':6598.87,'05.04':6936.99,'05.06':7384.56,'05.07':7490.05,'05.08':7498.0,'05.11':7822.24,'05.12':7643.15,'05.13':7844.01,'05.14':7981.41,'05.15':7493.18,'05.18':7516.04,'05.19':7271.66,'05.20':7208.95,'05.21':7815.59,'05.22':7847.71,'05.26':8047.51,'05.27':8228.7,'05.28':8185.29,'05.29':8476.15,'06.01':8788.38,'06.02':8801.49,'06.04':8639.41,'06.05':8160.59,'06.08':7484.41,'06.09':8096.93,'06.10':7730.82,'06.11':7763.95,'06.12':8123.62,'06.15':8545.98,'06.16':8726.6,'06.17':8864.24,'06.18':9063.84,'06.19':9052.42,'06.22':9114.55,'06.23':8203.84,'06.24':8471.02,'06.25':8930.3,'06.26':8411.21,'06.29':8394.65,'06.30':8476.48,'07.01':8303.41,'07.02':7648.09,'07.03':8088.34,'07.06':8051.33,'07.07':7656.31,'07.08':7246.79,'07.09':7291.91,'07.10':7475.94,'07.13':6806.93,'07.14':6856.83,'07.15':7284.41,'07.16':6820.60,'07.20':6516.27,'07.21':6747.95,'07.22':6797.70,'07.23':7096.89,'07.24':6690.62};
function fmtKospi(dateStr, kospiMap) {
  const v = kospiMap[dateStr];
  return v === undefined || v === null ? '-' : v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function kospiPctChange(dataArr, idx, kospiMap) {
  const cur = kospiMap[dataArr[idx].date];
  if (cur === undefined || cur === null || idx === 0) return { text: '-', cls: '' };
  const prev = kospiMap[dataArr[idx - 1].date];
  if (prev === undefined || prev === null) return { text: '-', cls: '' };
  const pct = (cur - prev) / prev * 100;
  return { text: (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%', cls: pct >= 0 ? 'pos' : 'neg' };
}

const DAY_LIST_LIMIT = 6; // ATF: 기본 6행만 노출하고 나머지는 더보기로
const dayListEl = document.getElementById('dayRows');
const dayMoreWrapEl = document.getElementById('dayMoreWrap');
const dayListContainerEl = document.getElementById('dayList');
// 전체 행을 렌더하고 목록(.day-rows)은 기본 스크롤 박스(약 6행). 더보기는 박스를 펼침.
function renderDayList(data, kospiIndex, year) {
  const rows = data.map((row, idx) => ({ row, pct: kospiPctChange(data, idx, kospiIndex) })).reverse();
  rows.forEach(({ row, pct }) => {
    const div = document.createElement('div');
    div.className = 'day-row';
    div.dataset.year = year;
    div.dataset.date = row.date;
    const pn = row.pn;
    const pnCell = pn == null
      ? `<span class="col-pension">-</span>`
      : `<span class="col-pension ${pn>=0?'pos':'neg'}">${fmtEok(pn)}</span>`;
    div.innerHTML = `<span>${row.date}</span><span class="${row.p>=0?'pos':'neg'}">${fmtEok(row.p)}</span><span class="${row.f>=0?'pos':'neg'}">${fmtEok(row.f)}</span><span class="${row.i>=0?'pos':'neg'}">${fmtEok(row.i)}</span>${pnCell}<span>${fmtKospi(row.date, kospiIndex)}</span><span class="${pct.cls}">${pct.text}</span>`;
    dayListEl.appendChild(div);
  });
}

if (data2025.length > 0) renderDayList(data2025, kospiIndex2025, '2025');
renderDayList(data2026, kospiIndex2026, '2026');

// 일별 데이터 행에 마우스를 올리면 상단 누적 차트에 그 날짜 툴팁을 표시
function showChartTooltipForDate(dateStr) {
  if (!chartInstance) return;
  const labels = chartInstance.data.labels || [];
  const idx = labels.indexOf(dateStr);
  if (idx < 0) return;
  const active = [];
  chartInstance.data.datasets.forEach((_, di) => {
    if (chartInstance.isDatasetVisible(di)) active.push({ datasetIndex: di, index: idx });
  });
  if (!active.length) return;
  chartInstance.setActiveElements(active);
  chartInstance.tooltip.setActiveElements(active, { x: 0, y: 0 });
  chartInstance.update('none');
}
function clearChartTooltipFromList() {
  if (!chartInstance) return;
  chartInstance.setActiveElements([]);
  chartInstance.tooltip.setActiveElements([], { x: 0, y: 0 });
  chartInstance.update('none');
}
dayListEl.addEventListener('mouseover', e => {
  const row = e.target.closest('.day-row[data-date]');
  if (row) showChartTooltipForDate(row.dataset.date);
});
dayListEl.addEventListener('mouseleave', clearChartTooltipFromList);

// 신용공여 잔고 추이 (단위: 억원). date=MM.DD, bal=신용잔고, chg=전일대비 증감.
// 자동 수집 소스(KRX/KOFIA)가 스크래핑 차단이라 값은 수기로 append한다.
const creditData2026 = [
  {date:'01.02',bal:27.42,chg:null,scrs:17.24,kosdaq:10.19},
  {date:'01.05',bal:27.62,chg:2017,scrs:17.42,kosdaq:10.20},
  {date:'01.06',bal:27.80,chg:1739,scrs:17.59,kosdaq:10.21},
  {date:'01.07',bal:27.87,chg:745,scrs:17.59,kosdaq:10.28},
  {date:'01.08',bal:28.19,chg:3195,scrs:17.86,kosdaq:10.33},
  {date:'01.09',bal:28.35,chg:1595,scrs:17.94,kosdaq:10.41},
  {date:'01.12',bal:28.52,chg:1727,scrs:18.12,kosdaq:10.41},
  {date:'01.13',bal:28.66,chg:1350,scrs:18.27,kosdaq:10.39},
  {date:'01.14',bal:28.60,chg:-581,scrs:18.20,kosdaq:10.40},
  {date:'01.15',bal:28.75,chg:1463,scrs:18.29,kosdaq:10.45},
  {date:'01.16',bal:28.93,chg:1882,scrs:18.45,kosdaq:10.49},
  {date:'01.19',bal:29.00,chg:612,scrs:18.47,kosdaq:10.52},
  {date:'01.20',bal:29.06,chg:635,scrs:18.55,kosdaq:10.51},
  {date:'01.21',bal:29.08,chg:236,scrs:18.51,kosdaq:10.57},
  {date:'01.22',bal:28.93,chg:-1564,scrs:18.45,kosdaq:10.47},
  {date:'01.23',bal:29.06,chg:1297,scrs:18.60,kosdaq:10.46},
  {date:'01.26',bal:29.35,chg:2913,scrs:18.86,kosdaq:10.48},
  {date:'01.27',bal:29.24,chg:-1017,scrs:18.78,kosdaq:10.46},
  {date:'01.28',bal:29.60,chg:3512,scrs:19.15,kosdaq:10.45},
  {date:'01.29',bal:30.09,chg:4963,scrs:19.59,kosdaq:10.50},
  {date:'01.30',bal:30.28,chg:1854,scrs:19.85,kosdaq:10.42},
  {date:'02.02',bal:30.47,chg:1952,scrs:20.10,kosdaq:10.37},
  {date:'02.03',bal:30.54,chg:667,scrs:20.27,kosdaq:10.27},
  {date:'02.04',bal:30.94,chg:3954,scrs:20.62,kosdaq:10.31},
  {date:'02.05',bal:30.79,chg:-1484,scrs:20.47,kosdaq:10.32},
  {date:'02.06',bal:31.10,chg:3127,scrs:20.67,kosdaq:10.43},
  {date:'02.09',bal:31.61,chg:5082,scrs:21.18,kosdaq:10.42},
  {date:'02.10',bal:31.56,chg:-470,scrs:21.19,kosdaq:10.38},
  {date:'02.11',bal:31.32,chg:-2427,scrs:20.92,kosdaq:10.40},
  {date:'02.12',bal:31.47,chg:1484,scrs:20.96,kosdaq:10.51},
  {date:'02.13',bal:31.48,chg:103,scrs:20.94,kosdaq:10.53},
  {date:'02.19',bal:31.59,chg:1166,scrs:20.94,kosdaq:10.65},
  {date:'02.20',bal:31.64,chg:452,scrs:20.98,kosdaq:10.66},
  {date:'02.23',bal:31.71,chg:739,scrs:21.12,kosdaq:10.59},
  {date:'02.24',bal:31.96,chg:2479,scrs:21.28,kosdaq:10.68},
  {date:'02.25',bal:32.13,chg:1738,scrs:21.40,kosdaq:10.73},
  {date:'02.26',bal:32.37,chg:2344,scrs:21.50,kosdaq:10.87},
  {date:'02.27',bal:32.67,chg:3005,scrs:21.67,kosdaq:11.00},
  {date:'03.03',bal:32.80,chg:1351,scrs:21.78,kosdaq:11.03},
  {date:'03.04',bal:33.20,chg:3937,scrs:22.23,kosdaq:10.97},
  {date:'03.05',bal:33.69,chg:4967,scrs:22.82,kosdaq:10.88},
  {date:'03.06',bal:32.79,chg:-9046,scrs:22.35,kosdaq:10.44},
  {date:'03.09',bal:31.69,chg:-10994,scrs:21.56,kosdaq:10.13},
  {date:'03.10',bal:31.80,chg:1128,scrs:21.63,kosdaq:10.17},
  {date:'03.11',bal:31.76,chg:-449,scrs:21.61,kosdaq:10.15},
  {date:'03.12',bal:32.14,chg:3836,scrs:21.82,kosdaq:10.32},
  {date:'03.13',bal:32.68,chg:5414,scrs:22.19,kosdaq:10.50},
  {date:'03.16',bal:33.22,chg:5358,scrs:22.62,kosdaq:10.60},
  {date:'03.17',bal:33.33,chg:1125,scrs:22.71,kosdaq:10.63},
  {date:'03.18',bal:33.49,chg:1560,scrs:22.85,kosdaq:10.64},
  {date:'03.19',bal:33.31,chg:-1800,scrs:22.69,kosdaq:10.62},
  {date:'03.20',bal:33.26,chg:-526,scrs:22.62,kosdaq:10.64},
  {date:'03.23',bal:33.35,chg:936,scrs:22.73,kosdaq:10.62},
  {date:'03.24',bal:33.42,chg:732,scrs:22.85,kosdaq:10.58},
  {date:'03.25',bal:33.03,chg:-3933,scrs:22.63,kosdaq:10.39},
  {date:'03.26',bal:32.75,chg:-2761,scrs:22.45,kosdaq:10.30},
  {date:'03.27',bal:32.78,chg:321,scrs:22.46,kosdaq:10.33},
  {date:'03.30',bal:32.60,chg:-1827,scrs:22.28,kosdaq:10.32},
  {date:'03.31',bal:32.92,chg:3209,scrs:22.56,kosdaq:10.36},
  {date:'04.01',bal:32.98,chg:584,scrs:22.61,kosdaq:10.37},
  {date:'04.02',bal:32.73,chg:-2555,scrs:22.51,kosdaq:10.22},
  {date:'04.03',bal:32.44,chg:-2815,scrs:22.28,kosdaq:10.17},
  {date:'04.06',bal:32.85,chg:4019,scrs:22.64,kosdaq:10.20},
  {date:'04.07',bal:32.66,chg:-1882,scrs:22.47,kosdaq:10.19},
  {date:'04.08',bal:32.73,chg:723,scrs:22.57,kosdaq:10.16},
  {date:'04.09',bal:32.72,chg:-100,scrs:22.64,kosdaq:10.08},
  {date:'04.10',bal:32.90,chg:1814,scrs:22.75,kosdaq:10.15},
  {date:'04.13',bal:33.22,chg:3154,scrs:22.99,kosdaq:10.23},
  {date:'04.14',bal:33.28,chg:656,scrs:23.04,kosdaq:10.24},
  {date:'04.15',bal:33.36,chg:742,scrs:23.10,kosdaq:10.26},
  {date:'04.16',bal:33.87,chg:5156,scrs:23.43,kosdaq:10.45},
  {date:'04.17',bal:34.03,chg:1557,scrs:23.51,kosdaq:10.52},
  {date:'04.20',bal:34.26,chg:2313,scrs:23.63,kosdaq:10.63},
  {date:'04.21',bal:34.69,chg:4354,scrs:23.99,kosdaq:10.70},
  {date:'04.22',bal:34.81,chg:1161,scrs:24.06,kosdaq:10.75},
  {date:'04.23',bal:35.08,chg:2692,scrs:24.24,kosdaq:10.84},
  {date:'04.24',bal:35.46,chg:3831,scrs:24.58,kosdaq:10.88},
  {date:'04.27',bal:35.54,chg:747,scrs:24.65,kosdaq:10.89},
  {date:'04.28',bal:35.69,chg:1519,scrs:24.81,kosdaq:10.88},
  {date:'04.29',bal:36.07,chg:3786,scrs:25.02,kosdaq:11.05},
  {date:'04.30',bal:35.71,chg:-3552,scrs:24.68,kosdaq:11.03},
  {date:'05.04',bal:35.84,chg:1258,scrs:24.82,kosdaq:11.02},
  {date:'05.06',bal:35.43,chg:-4092,scrs:24.50,kosdaq:10.93},
  {date:'05.07',bal:35.51,chg:774,scrs:24.55,kosdaq:10.95},
  {date:'05.08',bal:35.95,chg:4428,scrs:24.94,kosdaq:11.01},
  {date:'05.11',bal:36.00,chg:485,scrs:25.05,kosdaq:10.95},
  {date:'05.12',bal:36.27,chg:2692,scrs:25.40,kosdaq:10.86},
  {date:'05.13',bal:36.07,chg:-1937,scrs:25.31,kosdaq:10.76},
  {date:'05.14',bal:36.47,chg:3958,scrs:25.83,kosdaq:10.64},
  {date:'05.15',bal:36.57,chg:977,scrs:25.99,kosdaq:10.58},
  {date:'05.18',bal:36.40,chg:-1709,scrs:25.90,kosdaq:10.50},
  {date:'05.19',bal:35.86,chg:-5406,scrs:25.52,kosdaq:10.33},
  {date:'05.20',bal:36.24,chg:3810,scrs:26.00,kosdaq:10.23},
  {date:'05.21',bal:36.47,chg:2354,scrs:26.36,kosdaq:10.11},
  {date:'05.22',bal:36.36,chg:-1169,scrs:26.42,kosdaq:9.94},
  {date:'05.26',bal:36.25,chg:-1007,scrs:26.40,kosdaq:9.86},
  {date:'05.27',bal:36.69,chg:4352,scrs:26.83,kosdaq:9.86},
  {date:'05.28',bal:37.07,chg:3787,scrs:27.18,kosdaq:9.88},
  {date:'05.29',bal:38.02,chg:9540,scrs:28.02,kosdaq:10.00},
  {date:'06.01',bal:37.68,chg:-3415,scrs:27.85,kosdaq:9.84},
  {date:'06.02',bal:37.71,chg:280,scrs:27.92,kosdaq:9.78},
  {date:'06.04',bal:37.74,chg:285,scrs:28.03,kosdaq:9.71},
  {date:'06.05',bal:37.84,chg:1008,scrs:28.27,kosdaq:9.56},
  {date:'06.08',bal:37.79,chg:-480,scrs:28.33,kosdaq:9.46},
  {date:'06.09',bal:37.93,chg:1386,scrs:28.57,kosdaq:9.36},
  {date:'06.10',bal:36.77,chg:-11554,scrs:27.81,kosdaq:8.97},
  {date:'06.11',bal:36.66,chg:-1172,scrs:27.87,kosdaq:8.78},
  {date:'06.12',bal:36.88,chg:2228,scrs:28.11,kosdaq:8.77},
  {date:'06.15',bal:37.08,chg:1977,scrs:28.30,kosdaq:8.78},
  {date:'06.16',bal:37.39,chg:3087,scrs:28.53,kosdaq:8.85},
  {date:'06.17',bal:37.80,chg:4149,scrs:28.84,kosdaq:8.96},
  {date:'06.18',bal:37.98,chg:1792,scrs:28.93,kosdaq:9.05},
  {date:'06.19',bal:38.48,chg:4990,scrs:29.40,kosdaq:9.08},
  {date:'06.22',bal:38.53,chg:525,scrs:29.47,kosdaq:9.06},
  {date:'06.23',bal:38.09,chg:-4376,scrs:29.13,kosdaq:8.96},
  {date:'06.24',bal:38.63,chg:5392,scrs:29.75,kosdaq:8.88},
  {date:'06.25',bal:38.05,chg:-5844,scrs:29.39,kosdaq:8.66},
  {date:'06.26',bal:37.76,chg:-2868,scrs:29.33,kosdaq:8.43},
  {date:'06.29',bal:37.81,chg:454,scrs:29.43,kosdaq:8.38},
  {date:'06.30',bal:37.33,chg:-4788,scrs:29.23,kosdaq:8.09},
  {date:'07.01',bal:37.34,chg:111,scrs:29.34,kosdaq:8.00},
  {date:'07.02',bal:37.72,chg:3793,scrs:29.63,kosdaq:8.08},
  {date:'07.03',bal:37.79,chg:735,scrs:29.68,kosdaq:8.11},
  {date:'07.06',bal:37.66,chg:-1322,scrs:29.56,kosdaq:8.10},
  {date:'07.07',bal:37.07,chg:-5946,scrs:29.07,kosdaq:7.99},
  {date:'07.08',bal:37.20,chg:1345,scrs:29.24,kosdaq:7.96},
  {date:'07.09',bal:36.63,chg:-5662,scrs:28.84,kosdaq:7.80},
  {date:'07.10',bal:35.57,chg:-10597,scrs:28.02,kosdaq:7.55},
  {date:'07.13',bal:34.79,chg:-7854,scrs:27.45,kosdaq:7.34},
  {date:'07.14',bal:34.71,chg:-809,scrs:27.45,kosdaq:7.26},
  {date:'07.15',bal:34.37,chg:-3376,scrs:27.14,kosdaq:7.23},
  {date:'07.16',bal:33.36,chg:-10077,scrs:26.25,kosdaq:7.11},
  {date:'07.20',bal:33.33,chg:-298,scrs:26.21,kosdaq:7.13},
  {date:'07.21',bal:33.56,chg:2257,scrs:26.42,kosdaq:7.14}
];
function renderCreditList() {
  const el = document.getElementById('creditRows');
  if (!el) return;
  if (!creditData2026.length) {
    el.innerHTML = '<div class="credit-empty">데이터 준비 중입니다.</div>';
    return;
  }
  const rows = creditData2026.slice().reverse();
  el.innerHTML = rows.map(r => {
    const chgCell = r.chg == null
      ? '<span>-</span>'
      : `<span class="${r.chg>=0?'pos':'neg'}">${fmtEok(r.chg)}</span>`;
    return `<div class="day-row credit-row"><span>${r.date}</span><span>${r.bal.toFixed(2)}조</span>${chgCell}<span>${r.scrs.toFixed(2)}조</span><span>${r.kosdaq.toFixed(2)}조</span></div>`;
  }).join('');
}
renderCreditList();

// 신용공여 잔고 추이 2026 차트 (전체 = 유가증권 + 코스닥, 단위: 조원)
let creditChartInstance = null;
function buildCreditChart() {
  const canvas = document.getElementById('creditChart');
  if (!canvas || typeof Chart === 'undefined' || !creditData2026.length) return;
  const labels = creditData2026.map(r => r.date);
  const mkSet = (label, key, color, width) => ({
    label, data: creditData2026.map(r => r[key]),
    borderColor: color, backgroundColor: color,
    borderWidth: width, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4,
    tension: lineTension(labels.length), borderJoinStyle: 'round', borderCapStyle: 'round'
  });
  // 위 투자자 차트와 동일: 툴팁을 차트 상단에 고정하고 세로 점선 크로스헤어 표시
  if (!Chart.Tooltip.positioners.fixedTop) {
    Chart.Tooltip.positioners.fixedTop = function(elements, eventPosition) {
      const area = this.chart.chartArea;
      const px = elements.length ? elements[0].element.x : eventPosition.x;
      const w = this.width || 0;
      const gap = 18;
      const x = (px + gap + w <= area.right) ? (px + gap + w / 2) : (px - gap - w / 2);
      return { x, y: area.top + 6 };
    };
  }
  const creditCrosshair = {
    id: 'creditCrosshair',
    afterDraw(chart) {
      const active = chart.tooltip && chart.tooltip._active;
      if (!active || !active.length) return;
      const x = active[0].element.x;
      const { top, bottom } = chart.chartArea;
      const ctx = chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = cssVar('--chart-axis');
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.stroke();
      ctx.restore();
    }
  };
  if (creditChartInstance) creditChartInstance.destroy();
  creditChartInstance = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets: [
      mkSet('전체', 'bal', cssVar('--s-total'), isNarrow() ? 1.5 : 2.5),
      mkSet('유가증권', 'scrs', cssVar('--s-foreign'), isNarrow() ? 1 : 1.5),
      mkSet('코스닥', 'kosdaq', cssVar('--s-inst'), isNarrow() ? 1 : 1.5)
    ] },
    plugins: [creditCrosshair],
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      interaction: { mode: 'index', intersect: false },
      hover: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          position: 'fixedTop', yAlign: 'top', caretPadding: 8, caretSize: 0,
          backgroundColor: cssVar('--tooltip-bg'), cornerRadius: 12, padding: 14,
          boxPadding: 6, bodySpacing: 8, titleMarginBottom: 10, titleColor: cssVar('--tooltip-title'),
          bodyColor: cssVar('--tooltip-body'), titleFont: { size: 13, weight: '600' }, bodyFont: { size: 12 },
          displayColors: true, usePointStyle: true,
          callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}조원` }
        }
      },
      scales: {
        y: {
          position: 'left', grace: '4%',
          title: { display: !isNarrow(), text: '신용잔고 (조원)', color: cssVar('--chart-axis'), font: { size: 12 } },
          ticks: { color: cssVar('--chart-axis'), font: { size: isNarrow() ? 10 : 11 }, padding: 3 },
          grid: { color: cssVar('--chart-grid') }, border: { display: true, color: cssVar('--chart-grid') }
        },
        x: {
          ticks: { color: cssVar('--chart-axis'), font: { size: isNarrow() ? 9 : 10 }, autoSkip: true, maxTicksLimit: isNarrow() ? 5 : 9, padding: 4 },
          grid: { display: false }, border: { display: false }
        }
      }
    }
  });
  const clearCreditTooltip = () => {
    creditChartInstance.setActiveElements([]);
    creditChartInstance.tooltip.setActiveElements([], { x: 0, y: 0 });
    creditChartInstance.update('none');
  };
  // 이전 빌드(모바일/PC 전환 재빌드)에서 붙인 리스너 제거
  if (canvas._creditTouchEnd) {
    canvas.removeEventListener('touchend', canvas._creditTouchEnd);
    canvas.removeEventListener('touchcancel', canvas._creditTouchCancel);
  }
  // 투자자 차트와 동일: touchend에서 유령 마우스 이벤트를 막아 손을 떼면 즉시 사라지게.
  const creditTouchEnd = (e) => { e.preventDefault(); clearCreditTooltip(); };
  const creditTouchCancel = () => clearCreditTooltip();
  canvas._creditTouchEnd = creditTouchEnd;
  canvas._creditTouchCancel = creditTouchCancel;
  canvas.addEventListener('touchend', creditTouchEnd, { passive: false });
  canvas.addEventListener('touchcancel', creditTouchCancel, { passive: true });
}
buildCreditChart();
narrowQuery.addEventListener('change', buildCreditChart); // 모바일/PC 전환 시 두께·틱 갱신

// Scrolling back up to the top of the day list resets it to the first 10 rows.
renderChart('2026년'); // 시작 시 2026년 누적 데이터
layoutMonthPnl();
layoutTotalBar();
layoutYearlySection();

// 월별 등락 달력: 전일 종가 대비 상승(빨강)/하락(파랑), 좌우 화살표로 월 이동 (연도별)
const calYearData = {
  '2025': { labels: data2025.map(d => d.date), kospi: kospiIndex2025, prevLast: null },
  '2026': { labels: labels2026, kospi: kospiIndex2026, prevLast: (typeof kospiIndex2025 !== 'undefined') ? kospiIndex2025['12.30'] : null }
};
const muEntries = [];
['2025', '2026'].forEach(y => {
  const d = calYearData[y];
  if (!d || !d.labels.length) return;
  [...new Set(d.labels.map(k => parseInt(k.slice(0, 2), 10)))].sort((a, b) => a - b)
    .forEach(m => muEntries.push({ year: y, month: m }));
});
let muIdx = muEntries.length - 1; // 최신(2026-07)부터
function renderMonthUpdown(year, month) {
  const grid = document.getElementById('muGrid');
  if (!grid) return;
  const { labels, kospi, prevLast } = calYearData[year];
  grid.innerHTML = '';
  ['일','월','화','수','목','금','토'].forEach(d => {
    const el = document.createElement('div');
    el.className = 'mu-dow';
    el.textContent = d;
    grid.appendChild(el);
  });
  const pad = n => String(n).padStart(2, '0');
  const yr = parseInt(year, 10);
  const firstDow = new Date(yr, month - 1, 1).getDay();
  const daysInMonth = new Date(yr, month, 0).getDate();
  for (let i = 0; i < firstDow; i++) {
    const el = document.createElement('div');
    el.className = 'mu-cell empty';
    grid.appendChild(el);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const key = pad(month) + '.' + pad(d);
    const idx = labels.indexOf(key);
    let cls = 'none', pct = null;
    if (idx >= 0) {
      const cur = kospi[key];
      const prev = idx > 0 ? kospi[labels[idx - 1]] : prevLast;
      if (cur != null && prev != null) {
        cls = cur > prev ? 'up' : (cur < prev ? 'down' : 'flat');
        pct = (cur - prev) / prev * 100;
      }
    }
    const el = document.createElement('div');
    el.className = 'mu-cell ' + cls;
    el.innerHTML = pct === null
      ? `<span class="mu-day">${d}</span>`
      : `<span class="mu-day">${d}</span><span class="mu-pct">${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%</span>`;
    grid.appendChild(el);
  }
  // 월마다 주 수(5~6줄)가 달라 높이가 변하지 않도록 항상 6주(42칸)로 패딩
  for (let i = firstDow + daysInMonth; i < 42; i++) {
    const el = document.createElement('div');
    el.className = 'mu-cell empty';
    grid.appendChild(el);
  }
  const title = document.getElementById('muTitle');
  if (title) title.textContent = `${year}년 ${month}월`;
}
function updateMuNav() {
  const e = muEntries[muIdx];
  renderMonthUpdown(e.year, e.month);
  const prev = document.getElementById('muPrev');
  const next = document.getElementById('muNext');
  if (prev) prev.disabled = muIdx <= 0;
  if (next) next.disabled = muIdx >= muEntries.length - 1;
  layoutMonthReturns(); // 달력 높이(주 수)가 바뀌면 상승폭 카드도 맞춤
}
document.getElementById('muPrev').addEventListener('click', () => { if (muIdx > 0) { muIdx--; updateMuNav(); } });
document.getElementById('muNext').addEventListener('click', () => { if (muIdx < muEntries.length - 1) { muIdx++; updateMuNav(); } });
updateMuNav();

// 월별 상승 폭: 전월 말 종가 대비 코스피 등락률, 최신 월이 위. 연도 전환 가능.
const mrData = {
  '2025': { labels: data2025.map(d => d.date), kospi: kospiIndex2025, prevLast: null },
  '2026': { labels: labels2026, kospi: kospiIndex2026, prevLast: (typeof kospiIndex2025 !== 'undefined') ? kospiIndex2025['12.30'] : null }
};
const mrYears = ['2025', '2026'].filter(y => mrData[y] && mrData[y].labels.length);
let mrIdx = mrYears.length - 1; // 최신 연도부터
function renderMonthReturns() {
  const el = document.getElementById('mrList');
  if (!el) return;
  const year = mrYears[mrIdx];
  const { labels, kospi, prevLast } = mrData[year];
  const months = [...new Set(labels.map(k => parseInt(k.slice(0, 2), 10)))].sort((a, b) => b - a); // 최신 위
  el.innerHTML = '';
  months.forEach(m => {
    const days = labels.filter(k => parseInt(k.slice(0, 2), 10) === m);
    const fi = labels.indexOf(days[0]);
    const last = kospi[days[days.length - 1]];
    const base = fi > 0 ? kospi[labels[fi - 1]] : (prevLast != null ? prevLast : kospi[days[0]]);
    if (base == null || last == null) return;
    const ret = (last - base) / base * 100;
    const close = last.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const row = document.createElement('div');
    row.className = 'mr-row';
    row.innerHTML = `<span class="mr-month">${m}월</span><span class="mr-close">${close}</span><span class="mr-val ${ret >= 0 ? 'pos' : 'neg'}">${ret >= 0 ? '+' : ''}${ret.toFixed(1)}%</span>`;
    el.appendChild(row);
  });
  const title = document.getElementById('mrTitle');
  if (title) title.textContent = year + '년 상승 폭';
  const prev = document.getElementById('mrPrev');
  const next = document.getElementById('mrNext');
  if (prev) prev.disabled = mrIdx <= 0;
  if (next) next.disabled = mrIdx >= mrYears.length - 1;
}
document.getElementById('mrPrev').addEventListener('click', () => { if (mrIdx > 0) { mrIdx--; renderMonthReturns(); } });
document.getElementById('mrNext').addEventListener('click', () => { if (mrIdx < mrYears.length - 1) { mrIdx++; renderMonthReturns(); } });
renderMonthReturns();
layoutMonthReturns();

(function updateMytradesTotal() {
  const totalEl = document.getElementById('mytradesTotal');
  if (!totalEl) return;
  let total = 0;
  document.querySelectorAll('#view-mytrades .month-pnl .pnl-value').forEach(el => {
    const num = parseInt(el.textContent.replace(/[^0-9-]/g, ''), 10);
    if (!isNaN(num)) total += num;
  });
  totalEl.textContent = (total >= 0 ? '+' : '') + total.toLocaleString() + '원';
  totalEl.className = 'value ' + (total >= 0 ? 'pos' : 'neg');
})();

const philosophyToggle = document.getElementById('philosophyToggle');
const philosophyList = document.getElementById('philosophyList');
const philosophyCol = philosophyToggle.closest('.mytrades-col.philosophy');
function syncPhilosophy(collapsed) {
  philosophyList.classList.toggle('collapsed', collapsed);
  philosophyToggle.classList.toggle('collapsed', collapsed);
  philosophyCol.classList.toggle('is-collapsed', collapsed);
  philosophyToggle.setAttribute('aria-expanded', String(!collapsed));
}
function togglePhilosophy() {
  syncPhilosophy(!philosophyList.classList.contains('collapsed'));
}
syncPhilosophy(narrowQuery.matches); // PC는 펼침, 모바일은 접힘
philosophyToggle.addEventListener('click', togglePhilosophy);
philosophyToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    togglePhilosophy();
  }
});

const yearlyToggle = document.getElementById('yearlyToggle');
const yearlySummaryPanel = document.getElementById('yearlySummary');
// 년도별·일별헤더는 CSS flex로 고정 → JS 오프셋 불필요
function toggleYearly() {
  const collapsed = yearlySummaryPanel.classList.toggle('collapsed');
  yearlyToggle.classList.toggle('collapsed', collapsed);
  yearlyToggle.setAttribute('aria-expanded', String(!collapsed));
}
yearlyToggle.addEventListener('click', toggleYearly);
yearlyToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleYearly();
  }
});
// 누적 데이터는 PC·모바일 모두 기본으로 펼친다.
yearlySummaryPanel.classList.remove('collapsed');
yearlyToggle.classList.remove('collapsed');
yearlyToggle.setAttribute('aria-expanded', 'true');

// 일별 데이터 접기/펼치기 (PC·모바일 모두 기본 펼침)
const dayListToggle = document.getElementById('dayListToggle');
const dayListSectionPanel = document.getElementById('dayListSection');
function toggleDayList() {
  const collapsed = dayListSectionPanel.classList.toggle('collapsed');
  dayListToggle.classList.toggle('collapsed', collapsed);
  dayListToggle.setAttribute('aria-expanded', String(!collapsed));
}
dayListToggle.addEventListener('click', toggleDayList);
dayListToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDayList(); }
});
// 신용공여 잔고 추이 접기/펼치기 (PC·모바일 모두 기본 펼침)
const creditToggle = document.getElementById('creditToggle');
const creditSectionPanel = document.getElementById('creditSection');
function toggleCredit() {
  const collapsed = creditSectionPanel.classList.toggle('collapsed');
  creditToggle.classList.toggle('collapsed', collapsed);
  creditToggle.setAttribute('aria-expanded', String(!collapsed));
}
creditToggle.addEventListener('click', toggleCredit);
creditToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCredit(); }
});
// 헤더 우측 '자세히 보기/간단히' → 목록 박스를 펼침. 섹션 접기로 이벤트 번짐 방지(stopPropagation)
function wireListMore(btnId, boxId) {
  const btn = document.getElementById(btnId);
  const box = document.getElementById(boxId);
  if (!btn || !box) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const expanded = box.classList.toggle('expanded');
    btn.textContent = expanded ? '간단히' : '자세히 보기';
  });
  btn.addEventListener('keydown', e => e.stopPropagation());
}
wireListMore('dayListMore', 'dayList');
wireListMore('creditMore', 'creditRows');

const pnlLockBtn = document.getElementById('pnlLockBtn');
const lockIcon = document.getElementById('lockIcon');
const LOCK_PATH_CLOSED = 'M8 11V7a4 4 0 0 1 8 0v4';
const LOCK_PATH_OPEN = 'M8 11V7a4 4 0 0 1 7.5-2';
function setPnlLocked(locked) {
  document.body.classList.toggle('pnl-hidden', locked);
  pnlLockBtn.classList.toggle('locked', locked);
  lockIcon.querySelector('path').setAttribute('d', locked ? LOCK_PATH_CLOSED : LOCK_PATH_OPEN);
}
const PNL_PASSWORD = '1234';
const PNL_UNLOCK_MS = 30 * 60 * 1000;
const PNL_UNLOCK_KEY = 'mystock-pnl-unlocked-until';
const pwOverlay = document.getElementById('pwOverlay');
const pwInput = document.getElementById('pwInput');
const pwError = document.getElementById('pwError');
let relockTimer = null;

function unlockExpiresAt() {
  return Number(localStorage.getItem(PNL_UNLOCK_KEY)) || 0;
}
function isUnlockValid() {
  return unlockExpiresAt() > Date.now();
}
function scheduleRelock() {
  clearTimeout(relockTimer);
  const remaining = unlockExpiresAt() - Date.now();
  if (remaining > 0) relockTimer = setTimeout(expireUnlock, remaining);
}
function grantUnlock() {
  localStorage.setItem(PNL_UNLOCK_KEY, String(Date.now() + PNL_UNLOCK_MS));
  scheduleRelock();
}
function expireUnlock() {
  clearTimeout(relockTimer);
  localStorage.removeItem(PNL_UNLOCK_KEY);
  setPnlLocked(true);
}

// The keyboard makes the browser scroll containers around to reveal the input;
// snapshot the scroll offsets so closing the dialog puts the page back.
let pwScrollSnapshot = null;
function activeScroller() {
  const btn = document.querySelector('.nav-btn.active');
  return btn ? document.getElementById('view-' + btn.dataset.view) : null;
}
function snapshotScroll() {
  const el = activeScroller();
  pwScrollSnapshot = { el, top: el ? el.scrollTop : 0, win: window.scrollY };
}
function restoreScrollKeepingSnapshot() {
  if (!pwScrollSnapshot) return;
  const { el, top, win } = pwScrollSnapshot;
  if (el) el.scrollTop = top;
  // iOS 는 포커스된 입력을 보이려고 페이지를 밀어올린다. 모바일에서는 문서가
  // 스크롤 주체이므로 0 이 아니라 열기 직전 위치로 되돌린다.
  window.scrollTo(0, win || 0);
}
function restoreScroll() {
  restoreScrollKeepingSnapshot();
  pwScrollSnapshot = null;
}

function openPwModal() {
  pwInput.value = '';
  pwError.classList.remove('show');
  snapshotScroll();
  pwOverlay.classList.add('open');
  pwInput.focus({ preventScroll: true });
  // Focusing lets the browser scroll the view to "reveal" the input; undo that.
  requestAnimationFrame(restoreScrollKeepingSnapshot);
  setTimeout(restoreScrollKeepingSnapshot, 300);
}
function closePwModal() {
  pwInput.blur();
  pwOverlay.classList.remove('open');
  requestAnimationFrame(restoreScrollKeepingSnapshot);
  // The keyboard collapses a beat after blur; settle the layout again then.
  setTimeout(restoreScroll, 350);
}
function submitPw() {
  if (pwInput.value !== PNL_PASSWORD) {
    pwError.classList.add('show');
    pwInput.select();
    return;
  }
  grantUnlock();
  setPnlLocked(false);
  closePwModal();
}

pnlLockBtn.addEventListener('click', () => {
  if (!document.body.classList.contains('pnl-hidden')) {
    setPnlLocked(true);
  } else if (isUnlockValid()) {
    setPnlLocked(false);
  } else {
    openPwModal();
  }
});
document.getElementById('pwConfirm').addEventListener('click', submitPw);
document.getElementById('pwCancel').addEventListener('click', closePwModal);
pwInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') submitPw();
});
pwOverlay.addEventListener('click', e => {
  if (e.target === pwOverlay) closePwModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && pwOverlay.classList.contains('open')) closePwModal();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;
  if (isUnlockValid()) scheduleRelock();
  else expireUnlock();
});

if (isUnlockValid()) {
  setPnlLocked(false);
  scheduleRelock();
} else {
  expireUnlock();
}


function showDayTab(year) {
  document.querySelectorAll('.day-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.year === year);
  });
  // 행(#dayRows)을 data-year로 필터
  dayListEl.querySelectorAll('.day-row[data-year]').forEach(el => {
    el.style.display = el.dataset.year === year ? '' : 'none';
  });
  // 탭 전환 시 펼침(더보기) 초기화 후 목록 맨 위로
  dayListContainerEl.classList.remove('expanded');
  const dlMore = document.getElementById('dayListMore');
  if (dlMore) dlMore.textContent = '자세히 보기';
  dayListEl.scrollTop = 0;
}
document.querySelectorAll('.day-tab').forEach(btn => {
  btn.addEventListener('click', () => showDayTab(btn.dataset.year));
});
showDayTab('2026'); // 초기 탭: 2025 행 숨김

// 해외주식: 좌측 대카테고리(시나리오 / 지수 동향) 클릭 → 우측 패널 전환
// 새로고침 때 복원할 수 있도록 선택 로직을 밖에서도 부를 수 있게 노출한다.
let selectScenario = () => {};
let currentScenario = () => null;

(function initScenarios() {
  const col = document.querySelector('#view-overseas .mytrades-col.philosophy');
  const panels = document.getElementById('scenarioPanels');
  const titleEl = document.getElementById('scenarioTitle');
  if (!col || !panels) return;
  const allCats = col.querySelectorAll('.scenario-cat');

  selectScenario = (key) => {
    const cat = [...allCats].find(c => c.dataset.scenario === key);
    if (!cat) return;
    allCats.forEach(c => c.classList.toggle('active', c === cat));
    panels.querySelectorAll('.scenario-panel').forEach(p => { p.hidden = p.dataset.scenario !== key; });
    if (titleEl) titleEl.textContent = cat.dataset.title || cat.textContent;
    if (key === 'usindex') ensureIndexCharts();
    else if (key === 'ratesfx') requestAnimationFrame(() => { buildGapChart(); buildRateChart(); buildDollarChart(); });
  };
  currentScenario = () => {
    const active = col.querySelector('.scenario-cat.active');
    return active ? active.dataset.scenario : null;
  };

  allCats.forEach(cat => {
    cat.addEventListener('click', () => {
      selectScenario(cat.dataset.scenario);
      saveViewState();
    });
  });
})();

function setDayTabsVisible(visible) {
  document.querySelector('.day-tabs').style.display = visible ? 'flex' : 'none';
}

const yearCardToTab = { '2025년': '2025', '2026년': '2026', [MONTH_KEY]: '2026' };
document.querySelectorAll('.year-card[data-year], .seg-btn[data-year]').forEach(card => {
  const label = card.dataset.year;
  // The month button manages the day tabs itself (it toggles back to the
  // previous period), so keep this listener off it.
  if (label === MONTH_KEY) return;
  const tabYear = yearCardToTab[label];
  if (tabYear) {
    card.addEventListener('click', () => {
      showDayTab(tabYear);
      setDayTabsVisible(false);
    });
  } else if (label === '2025~2026년 총합') {
    card.addEventListener('click', () => setDayTabsVisible(true));
  }
});
// 시작이 2026년 누적이므로 일별도 2026 고정(탭 숨김)
showDayTab('2026');
setDayTabsVisible(false);

const views = {
  domestic: document.getElementById('view-domestic'),
  overseas: document.getElementById('view-overseas'),
  mytrades: document.getElementById('view-mytrades')
};
function setActiveView(view) {
  document.body.classList.remove('view-domestic', 'view-overseas', 'view-mytrades');
  document.body.classList.add('view-' + view);
}
setActiveView('domestic');

// 해외 지수 동향 (S&P500 / 나스닥 / 다우존스) — 네이버 세계지수 일별 종가 (02.11~)
const idxLabels = ["02.11","02.12","02.13","02.17","02.18","02.19","02.20","02.23","02.24","02.25","02.26","02.27","03.02","03.03","03.04","03.05","03.06","03.09","03.10","03.11","03.12","03.13","03.16","03.17","03.18","03.19","03.20","03.23","03.24","03.25","03.26","03.27","03.30","03.31","04.01","04.02","04.06","04.07","04.08","04.09","04.10","04.13","04.14","04.15","04.16","04.17","04.20","04.21","04.22","04.23","04.24","04.27","04.28","04.29","04.30","05.01","05.04","05.05","05.06","05.07","05.08","05.11","05.12","05.13","05.14","05.15","05.18","05.19","05.20","05.21","05.22","05.26","05.27","05.28","05.29","06.01","06.02","06.03","06.04","06.05","06.08","06.09","06.10","06.11","06.12","06.15","06.16","06.17","06.18","06.22","06.23","06.24","06.25","06.26","06.29","06.30","07.01","07.02","07.06","07.07","07.08","07.09","07.10","07.13","07.14","07.15","07.16","07.17","07.20","07.21","07.22","07.23","07.24"];
const idxSP500 = [6941.47,6832.76,6836.17,6843.22,6881.31,6861.89,6909.51,6837.75,6890.07,6946.13,6908.86,6878.88,6881.62,6816.63,6869.5,6830.71,6740.02,6795.99,6781.48,6775.8,6672.62,6632.19,6699.38,6716.09,6624.7,6606.49,6506.48,6581.0,6556.37,6591.9,6477.16,6368.85,6343.72,6528.52,6575.32,6582.69,6611.83,6616.85,6782.81,6824.66,6816.89,6886.24,6967.38,7022.95,7041.28,7126.06,7109.14,7064.01,7137.9,7108.4,7165.08,7173.91,7138.8,7135.95,7209.01,7230.12,7200.75,7259.22,7365.12,7337.11,7398.93,7412.84,7400.96,7444.25,7501.24,7408.5,7403.05,7353.61,7432.97,7445.72,7473.47,7519.12,7520.36,7563.63,7580.06,7599.96,7609.78,7553.68,7584.31,7383.74,7405.73,7386.65,7266.99,7394.3,7431.46,7554.29,7511.35,7420.1,7500.58,7472.79,7365.46,7358.22,7357.49,7354.02,7440.43,7499.36,7483.23,7483.24,7537.43,7503.85,7482.71,7543.64,7575.39,7515.34,7543.59,7572.4,7533.77,7457.69,7443.28,7509.2,7498.96,7408.3,7411.98];
const idxNasdaq = [23066.47,22597.15,22546.67,22578.38,22753.63,22682.73,22886.07,22627.27,22863.68,23152.08,22878.38,22668.21,22748.86,22516.69,22807.48,22748.99,22387.68,22695.95,22697.1,22716.13,22311.98,22105.36,22374.18,22479.53,22152.42,22090.69,21647.61,21946.76,21761.89,21929.83,21408.08,20948.36,20794.64,21590.63,21840.95,21879.18,21996.34,22017.85,22634.99,22822.42,22902.89,23183.74,23639.08,24016.02,24102.7,24468.48,24404.39,24259.96,24657.57,24438.5,24836.6,24887.1,24663.8,24673.24,24892.31,25114.44,25067.8,25326.13,25838.94,25806.2,26247.08,26274.12,26088.2,26402.34,26635.22,26225.15,26090.73,25870.71,26270.36,26293.1,26343.97,26656.18,26674.74,26917.47,26972.62,27086.81,27093.9,26853.98,26830.96,25709.43,25929.66,25678.82,25169.5,25809.66,25888.84,26683.94,26376.34,26021.66,26517.93,26166.6,25587.04,25476.64,25358.6,25297.62,25820.14,26213.72,26040.03,25832.67,26121.16,25818.69,25870.65,26206.89,26281.61,25873.18,26107.01,26269.23,25881.95,25520.24,25508.07,25837.21,25690.9,25137.69,24975.82];
const idxDow = [50121.4,49451.98,49500.93,49533.19,49662.66,49395.16,49625.97,48804.06,49174.5,49482.15,49499.2,48977.92,48904.78,48501.27,48739.41,47954.74,47501.55,47740.8,47706.51,47417.27,46677.85,46558.47,46946.41,46993.26,46225.15,46021.43,45577.47,46208.47,46124.06,46429.49,45960.11,45166.64,45216.14,46341.51,46565.74,46504.67,46669.88,46584.46,47909.92,48185.8,47916.57,48218.25,48535.99,48463.72,48578.72,49447.43,49442.56,49149.38,49490.03,49310.32,49230.71,49167.79,49141.93,48861.81,49652.14,49499.27,48941.9,49298.25,49910.59,49596.97,49609.16,49704.47,49760.56,49693.2,50063.46,49526.17,49686.12,49363.88,50009.35,50285.66,50579.7,50461.68,50644.28,50668.97,51032.46,51078.88,51307.79,50687.07,51561.93,50866.78,50786.01,50872.11,49918.78,50848.75,51202.26,51671.03,51999.67,51492.55,51564.7,51712.71,51666.84,51848.9,51920.62,51876.11,52182.74,52319.2,52305.24,52900.07,53055.91,52925.15,52348.39,52487.41,52637.01,52498.64,52508.27,52658.64,52552.97,52146.42,51839.26,52224.64,52218.58,51711.65,51947.25];
let indexChartsBuilt = false;
let indexChartInstance = null;
function ensureIndexCharts() {
  if (indexChartsBuilt) return;
  const canvas = document.getElementById('chartIndices');
  if (!canvas || typeof Chart === 'undefined' || !idxLabels.length) return;
  indexChartsBuilt = true;
  requestAnimationFrame(() => {
    const norm = arr => arr.map(v => v / arr[0] * 100); // 시작일=100 정규화
    const raw = { 'S&P 500': idxSP500, '나스닥': idxNasdaq, '다우존스': idxDow };
    const mk = (label, arr, color) => ({
      label, data: norm(arr), borderColor: color, backgroundColor: color,
      borderWidth: 2, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4,
      tension: lineTension(idxLabels.length), borderJoinStyle: 'round', borderCapStyle: 'round'
    });
    indexChartInstance = new Chart(canvas, {
      type: 'line',
      data: { labels: idxLabels, datasets: [
        mk('S&P 500', idxSP500, cssVar('--s-sp500')),
        mk('나스닥', idxNasdaq, cssVar('--s-nasdaq')),
        mk('다우존스', idxDow, cssVar('--s-dow'))
      ] },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false,
        interaction: { mode: 'index', intersect: false }, hover: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: cssVar('--tooltip-bg'), cornerRadius: 10, padding: 12, boxPadding: 6, bodySpacing: 6,
            titleFont: { size: 12, weight: '600' }, bodyFont: { size: 12 }, usePointStyle: true,
            callbacks: { label: (ctx) => {
              const actual = raw[ctx.dataset.label][ctx.dataIndex];
              const chg = ctx.parsed.y - 100;
              return `${ctx.dataset.label}: ${actual.toLocaleString()} (${chg >= 0 ? '+' : ''}${chg.toFixed(1)}%)`;
            } }
          }
        },
        scales: {
          y: { position: 'right', grace: '3%', title: { display: true, text: '시작일=100', color: cssVar('--chart-axis'), font: { size: 11 } }, ticks: { color: cssVar('--chart-axis'), font: { size: 10 } }, grid: { color: cssVar('--chart-grid') }, border: { display: false } },
          x: { ticks: { color: cssVar('--chart-axis'), font: { size: 9 }, autoSkip: true, maxTicksLimit: 8 }, grid: { display: false }, border: { display: false } }
        }
      }
    });
  });
}

/* ===== 금리(미국 국채 10년물·2년물) / 달러(달러인덱스·원달러) =====
   출처: FRED DGS10·DGS2, 네이버 시장지표 FX_USDX·FX_USDKRW.
   원/달러는 한국 휴장일이 있어 null 이 섞이므로 spanGaps 로 이어 그린다. */
const rateLabels = ["02.11","02.12","02.13","02.17","02.18","02.19","02.20","02.23","02.24","02.25","02.26","02.27","03.02","03.03","03.04","03.05","03.06","03.09","03.10","03.11","03.12","03.13","03.16","03.17","03.18","03.19","03.20","03.23","03.24","03.25","03.26","03.27","03.30","03.31","04.01","04.02","04.03","04.06","04.07","04.08","04.09","04.10","04.13","04.14","04.15","04.16","04.17","04.20","04.21","04.22","04.23","04.24","04.27","04.28","04.29","04.30","05.01","05.04","05.05","05.06","05.07","05.08","05.11","05.12","05.13","05.14","05.15","05.18","05.19","05.20","05.21","05.22","05.26","05.27","05.28","05.29","06.01","06.02","06.03","06.04","06.05","06.08","06.09","06.10","06.11","06.12","06.15","06.16","06.17","06.18","06.22","06.23","06.24","06.25","06.26","06.29","06.30","07.01","07.02","07.06","07.07","07.08","07.09","07.10","07.13","07.14","07.15","07.16","07.17","07.20","07.21","07.22","07.23"];
const rateUS10Y = [4.18,4.09,4.04,4.05,4.09,4.08,4.08,4.03,4.04,4.05,4.02,3.97,4.05,4.06,4.09,4.13,4.15,4.12,4.15,4.21,4.27,4.28,4.23,4.2,4.26,4.25,4.39,4.34,4.39,4.33,4.42,4.44,4.35,4.3,4.33,4.31,4.35,4.34,4.33,4.29,4.29,4.31,4.3,4.26,4.29,4.32,4.26,4.26,4.3,4.3,4.34,4.31,4.35,4.36,4.42,4.4,4.39,4.45,4.43,4.36,4.41,4.38,4.42,4.46,4.46,4.47,4.59,4.61,4.67,4.57,4.57,4.56,4.5,4.48,4.45,4.45,4.47,4.46,4.49,4.47,4.55,4.56,4.53,4.55,4.45,4.48,4.47,4.43,4.49,4.46,4.51,4.5,4.41,4.4,4.38,4.38,4.44,4.48,4.49,4.48,4.55,4.56,4.54,4.56,4.62,4.58,4.55,4.57,4.55,4.6,4.63,4.67,4.71];
const rateUS2Y = [3.52,3.47,3.4,3.43,3.47,3.47,3.48,3.43,3.43,3.45,3.42,3.38,3.47,3.51,3.54,3.57,3.56,3.56,3.57,3.64,3.76,3.73,3.68,3.68,3.76,3.79,3.88,3.83,3.9,3.84,3.96,3.88,3.82,3.79,3.81,3.79,3.84,3.84,3.81,3.79,3.78,3.81,3.78,3.76,3.76,3.78,3.71,3.72,3.78,3.79,3.83,3.78,3.78,3.84,3.92,3.88,3.88,3.95,3.93,3.87,3.92,3.9,3.95,4.0,3.98,4.0,4.09,4.07,4.13,4.04,4.08,4.13,4.01,4.0,3.99,3.98,4.05,4.05,4.08,4.05,4.17,4.15,4.13,4.13,4.05,4.09,4.07,4.05,4.2,4.19,4.24,4.16,4.11,4.09,4.07,4.1,4.14,4.17,4.14,4.13,4.19,4.21,4.16,4.21,4.26,4.18,4.13,4.16,4.18,4.21,4.26,4.31,4.37];
const fxLabels = ["02.11","02.12","02.13","02.16","02.17","02.18","02.19","02.20","02.23","02.24","02.25","02.26","02.27","03.02","03.03","03.04","03.05","03.06","03.09","03.10","03.11","03.12","03.13","03.16","03.17","03.18","03.19","03.20","03.23","03.24","03.25","03.26","03.27","03.30","03.31","04.01","04.02","04.03","04.06","04.07","04.08","04.09","04.10","04.13","04.14","04.15","04.16","04.17","04.20","04.21","04.22","04.23","04.24","04.27","04.28","04.29","04.30","05.01","05.04","05.05","05.06","05.07","05.08","05.11","05.12","05.13","05.14","05.15","05.18","05.19","05.20","05.21","05.22","05.25","05.26","05.27","05.28","05.29","06.01","06.02","06.03","06.04","06.05","06.08","06.09","06.10","06.11","06.12","06.15","06.16","06.17","06.18","06.19","06.22","06.23","06.24","06.25","06.26","06.29","06.30","07.01","07.02","07.03","07.06","07.07","07.08","07.09","07.10","07.13","07.14","07.15","07.16","07.17","07.20","07.21","07.22","07.23","07.24"];
const fxDollarIndex = [96.72,96.83,96.81,96.81,97.06,97.62,97.85,97.72,97.64,97.77,97.62,97.74,97.56,98.33,99.0,98.73,99.3,98.97,99.17,98.8,99.22,99.75,100.36,99.46,99.33,99.87,99.05,99.45,98.72,99.24,99.39,99.7,99.98,100.35,99.75,99.45,99.85,99.85,99.8,99.68,98.92,98.58,98.43,98.16,97.9,97.85,98.02,97.89,97.9,98.22,98.41,98.6,98.36,98.31,98.47,98.82,97.91,98.0,98.26,98.31,97.87,97.94,97.78,97.82,98.18,98.42,98.72,99.2,99.1,99.26,99.01,99.21,99.18,99.18,99.1,99.14,98.96,98.85,99.14,99.18,99.5,99.38,100.05,100.02,99.88,99.93,99.84,99.74,99.37,99.27,99.86,100.61,100.61,100.79,101.17,101.39,101.19,101.12,100.87,100.95,101.15,100.62,100.62,100.61,100.77,100.75,100.68,100.75,101.04,100.71,100.27,100.56,100.58,100.78,101.0,100.95,101.28,101.3];
const fxUsdKrw = [1448.0,1442.5,1453.0,null,null,null,1451.0,1448.0,1446.0,1442.5,1427.5,1432.5,1466.5,null,1480.0,1463.5,1479.0,1485.0,1467.5,1475.5,1479.0,1491.0,1499.0,1491.5,1488.0,1505.0,1491.0,1506.5,1489.5,1497.0,1504.5,1508.0,1509.0,1517.5,1510.5,1513.0,1512.5,1513.5,1508.5,1497.0,1481.0,1476.0,1489.2,1480.5,1473.5,1476.5,1480.8,1479.3,1472.3,1482.0,1479.5,1484.0,1478.0,1475.0,1474.5,1488.0,1475.5,null,1469.0,null,1449.0,1458.0,1464.0,1475.0,1492.0,1489.5,1493.5,1498.0,1492.0,1507.8,1498.5,1505.5,1512.0,null,1507.5,1502.0,1496.5,1507.5,1514.5,1535.0,null,1534.0,1559.5,1527.8,1524.5,1524.5,1519.0,1514.7,1515.5,1511.0,1525.5,1538.0,1533.0,1538.5,1533.5,1543.5,1545.0,1537.5,1541.5,1548.0,1552.5,1542.5,1529.0,1530.5,1517.2,1507.0,1507.0,1502.0,1499.5,1491.0,1488.5,1491.0,null,1478.5,1482.5,1479.0,1476.5,1463.1];

let rateChartInstance = null;
let dollarChartInstance = null;

// 두 차트가 공유하는 옵션 뼈대 (미국 지수 차트와 동일한 톤)
function trendChartOptions(fmt, scales) {
  return {
    responsive: true, maintainAspectRatio: false, animation: false,
    interaction: { mode: 'index', intersect: false }, hover: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: cssVar('--tooltip-bg'), cornerRadius: 10, padding: 12, boxPadding: 6, bodySpacing: 6,
        titleColor: cssVar('--tooltip-title'), bodyColor: cssVar('--tooltip-body'),
        titleFont: { size: 12, weight: '600' }, bodyFont: { size: 12 }, usePointStyle: true,
        callbacks: { label: (ctx) => `${ctx.dataset.label}: ${fmt(ctx.parsed.y, ctx.dataset.label)}` }
      }
    },
    scales: Object.assign({
      x: { ticks: { color: cssVar('--chart-axis'), font: { size: 9 }, autoSkip: true, maxTicksLimit: 8 }, grid: { display: false }, border: { display: false } }
    }, scales)
  };
}

function trendLine(label, data, color, axis) {
  return {
    label, data, borderColor: color, backgroundColor: color,
    borderWidth: isNarrow() ? 1.5 : 2, pointRadius: 0, pointHitRadius: 8, pointHoverRadius: 4,
    tension: lineTension(data.length), borderJoinStyle: 'round', borderCapStyle: 'round',
    spanGaps: true, yAxisID: axis || 'y'
  };
}

function buildRateChart() {
  const canvas = document.getElementById('chartRates');
  if (!canvas || typeof Chart === 'undefined' || !rateLabels.length) return;
  if (rateChartInstance) rateChartInstance.destroy();
  rateChartInstance = new Chart(canvas, {
    type: 'line',
    data: { labels: rateLabels, datasets: [
      trendLine('미국 10년물', rateUS10Y, cssVar('--s-us10y')),
      trendLine('미국 2년물', rateUS2Y, cssVar('--s-us2y'))
    ] },
    options: trendChartOptions(v => `${v.toFixed(2)}%`, {
      y: {
        position: 'right', grace: '6%',
        title: { display: !isNarrow(), text: '금리 (%)', color: cssVar('--chart-axis'), font: { size: 11 } },
        ticks: { color: cssVar('--chart-axis'), font: { size: 10 }, callback: v => v.toFixed(1) },
        grid: { color: cssVar('--chart-grid') }, border: { display: false }
      }
    })
  });
}

function buildDollarChart() {
  const canvas = document.getElementById('chartDollar');
  if (!canvas || typeof Chart === 'undefined' || !fxLabels.length) return;
  if (dollarChartInstance) dollarChartInstance.destroy();
  dollarChartInstance = new Chart(canvas, {
    type: 'line',
    data: { labels: fxLabels, datasets: [
      trendLine('달러인덱스', fxDollarIndex, cssVar('--s-dxy'), 'y'),
      trendLine('원/달러', fxUsdKrw, cssVar('--s-usdkrw'), 'y1')
    ] },
    options: trendChartOptions(
      (v, label) => label === '원/달러' ? `${Math.round(v).toLocaleString()}원` : v.toFixed(2),
      {
        y: {
          position: 'left', grace: '6%',
          title: { display: !isNarrow(), text: '달러인덱스', color: cssVar('--s-dxy'), font: { size: 11 } },
          ticks: { color: cssVar('--s-dxy'), font: { size: 10 }, callback: v => v.toFixed(0) },
          grid: { color: cssVar('--chart-grid') }, border: { display: false }
        },
        y1: {
          position: 'right', grace: '6%',
          title: { display: !isNarrow(), text: '원/달러', color: cssVar('--s-usdkrw'), font: { size: 11 } },
          ticks: { color: cssVar('--s-usdkrw'), font: { size: 10 }, callback: v => Math.round(v).toLocaleString() },
          grid: { display: false }, border: { display: false }
        }
      }
    )
  });
}

let gapChartInstance = null;

/* 금리·달러 괴리: 미국 국채 10년(좌축, %)과 달러인덱스(우축)를 각자 축에 원값 그대로 얹는다.
   보통 같이 움직이므로 두 선이 벌어지는 구간이 곧 괴리다.
   금리는 FRED DGS10, 달러인덱스는 네이버 시장지표 FX_USDX (2023-01 ~). */
const gapLabels = ["23.01.03","23.01.04","23.01.05","23.01.06","23.01.09","23.01.10","23.01.11","23.01.12","23.01.13","23.01.17","23.01.18","23.01.19","23.01.20","23.01.23","23.01.24","23.01.25","23.01.26","23.01.27","23.01.30","23.01.31","23.02.01","23.02.02","23.02.03","23.02.06","23.02.07","23.02.08","23.02.09","23.02.10","23.02.13","23.02.14","23.02.15","23.02.16","23.02.17","23.02.21","23.02.22","23.02.23","23.02.24","23.02.27","23.02.28","23.03.01","23.03.02","23.03.03","23.03.06","23.03.07","23.03.08","23.03.09","23.03.10","23.03.13","23.03.14","23.03.15","23.03.16","23.03.17","23.03.20","23.03.21","23.03.22","23.03.23","23.03.24","23.03.27","23.03.28","23.03.29","23.03.30","23.03.31","23.04.03","23.04.04","23.04.05","23.04.06","23.04.07","23.04.10","23.04.11","23.04.12","23.04.13","23.04.14","23.04.17","23.04.18","23.04.19","23.04.20","23.04.21","23.04.24","23.04.25","23.04.26","23.04.27","23.04.28","23.05.01","23.05.02","23.05.03","23.05.04","23.05.05","23.05.08","23.05.09","23.05.10","23.05.11","23.05.12","23.05.15","23.05.16","23.05.17","23.05.18","23.05.19","23.05.22","23.05.23","23.05.24","23.05.25","23.05.26","23.05.29","23.05.30","23.05.31","23.06.01","23.06.02","23.06.05","23.06.06","23.06.07","23.06.08","23.06.09","23.06.12","23.06.13","23.06.14","23.06.15","23.06.16","23.06.19","23.06.20","23.06.21","23.06.22","23.06.23","23.06.26","23.06.27","23.06.28","23.06.29","23.06.30","23.07.03","23.07.04","23.07.05","23.07.06","23.07.07","23.07.10","23.07.11","23.07.12","23.07.13","23.07.14","23.07.17","23.07.18","23.07.19","23.07.20","23.07.21","23.07.24","23.07.25","23.07.26","23.07.27","23.07.28","23.07.31","23.08.01","23.08.02","23.08.03","23.08.04","23.08.07","23.08.08","23.08.09","23.08.10","23.08.11","23.08.14","23.08.15","23.08.16","23.08.17","23.08.18","23.08.21","23.08.22","23.08.23","23.08.24","23.08.25","23.08.28","23.08.29","23.08.30","23.08.31","23.09.01","23.09.05","23.09.06","23.09.07","23.09.08","23.09.11","23.09.12","23.09.13","23.09.14","23.09.15","23.09.18","23.09.19","23.09.20","23.09.21","23.09.22","23.09.25","23.09.26","23.09.27","23.09.28","23.09.29","23.10.02","23.10.03","23.10.04","23.10.05","23.10.06","23.10.09","23.10.10","23.10.11","23.10.12","23.10.13","23.10.16","23.10.17","23.10.18","23.10.19","23.10.20","23.10.23","23.10.24","23.10.25","23.10.26","23.10.27","23.10.30","23.10.31","23.11.01","23.11.02","23.11.03","23.11.06","23.11.07","23.11.08","23.11.09","23.11.10","23.11.13","23.11.14","23.11.15","23.11.16","23.11.17","23.11.20","23.11.21","23.11.22","23.11.23","23.11.24","23.11.27","23.11.28","23.11.29","23.11.30","23.12.01","23.12.04","23.12.05","23.12.06","23.12.07","23.12.08","23.12.11","23.12.12","23.12.13","23.12.14","23.12.15","23.12.18","23.12.19","23.12.20","23.12.21","23.12.22","23.12.26","23.12.27","23.12.28","23.12.29","24.01.02","24.01.03","24.01.04","24.01.05","24.01.08","24.01.09","24.01.10","24.01.11","24.01.12","24.01.15","24.01.16","24.01.17","24.01.18","24.01.19","24.01.22","24.01.23","24.01.24","24.01.25","24.01.26","24.01.29","24.01.30","24.01.31","24.02.01","24.02.02","24.02.05","24.02.06","24.02.07","24.02.08","24.02.09","24.02.12","24.02.13","24.02.14","24.02.15","24.02.16","24.02.20","24.02.21","24.02.22","24.02.23","24.02.26","24.02.27","24.02.28","24.02.29","24.03.01","24.03.04","24.03.05","24.03.06","24.03.07","24.03.08","24.03.11","24.03.12","24.03.13","24.03.14","24.03.15","24.03.18","24.03.19","24.03.20","24.03.21","24.03.22","24.03.25","24.03.26","24.03.27","24.03.28","24.04.01","24.04.02","24.04.03","24.04.04","24.04.05","24.04.08","24.04.09","24.04.10","24.04.11","24.04.12","24.04.15","24.04.16","24.04.17","24.04.18","24.04.19","24.04.22","24.04.23","24.04.24","24.04.25","24.04.26","24.04.29","24.04.30","24.05.01","24.05.02","24.05.03","24.05.06","24.05.07","24.05.08","24.05.09","24.05.10","24.05.13","24.05.14","24.05.15","24.05.16","24.05.17","24.05.20","24.05.21","24.05.22","24.05.23","24.05.24","24.05.28","24.05.29","24.05.30","24.05.31","24.06.03","24.06.04","24.06.05","24.06.06","24.06.07","24.06.10","24.06.11","24.06.12","24.06.13","24.06.14","24.06.17","24.06.18","24.06.20","24.06.21","24.06.24","24.06.25","24.06.26","24.06.27","24.06.28","24.07.01","24.07.02","24.07.03","24.07.05","24.07.08","24.07.09","24.07.10","24.07.11","24.07.12","24.07.15","24.07.16","24.07.17","24.07.18","24.07.19","24.07.22","24.07.23","24.07.24","24.07.25","24.07.26","24.07.29","24.07.30","24.07.31","24.08.01","24.08.02","24.08.05","24.08.06","24.08.07","24.08.08","24.08.09","24.08.12","24.08.13","24.08.14","24.08.15","24.08.16","24.08.19","24.08.20","24.08.21","24.08.22","24.08.23","24.08.26","24.08.27","24.08.28","24.08.29","24.08.30","24.09.03","24.09.04","24.09.05","24.09.06","24.09.09","24.09.10","24.09.11","24.09.12","24.09.13","24.09.16","24.09.17","24.09.18","24.09.19","24.09.20","24.09.23","24.09.24","24.09.25","24.09.26","24.09.27","24.09.30","24.10.01","24.10.02","24.10.03","24.10.04","24.10.07","24.10.08","24.10.09","24.10.10","24.10.11","24.10.14","24.10.15","24.10.16","24.10.17","24.10.18","24.10.21","24.10.22","24.10.23","24.10.24","24.10.25","24.10.28","24.10.29","24.10.30","24.10.31","24.11.01","24.11.04","24.11.05","24.11.06","24.11.07","24.11.08","24.11.11","24.11.12","24.11.13","24.11.14","24.11.15","24.11.18","24.11.19","24.11.20","24.11.21","24.11.22","24.11.25","24.11.26","24.11.27","24.11.28","24.11.29","24.12.02","24.12.03","24.12.04","24.12.05","24.12.06","24.12.09","24.12.10","24.12.11","24.12.12","24.12.13","24.12.16","24.12.17","24.12.18","24.12.19","24.12.20","24.12.23","24.12.24","24.12.26","24.12.27","24.12.30","24.12.31","25.01.02","25.01.03","25.01.06","25.01.07","25.01.08","25.01.09","25.01.10","25.01.13","25.01.14","25.01.15","25.01.16","25.01.17","25.01.20","25.01.21","25.01.22","25.01.23","25.01.24","25.01.27","25.01.28","25.01.29","25.01.30","25.01.31","25.02.03","25.02.04","25.02.05","25.02.06","25.02.07","25.02.10","25.02.11","25.02.12","25.02.13","25.02.14","25.02.17","25.02.18","25.02.19","25.02.20","25.02.21","25.02.24","25.02.25","25.02.26","25.02.27","25.02.28","25.03.03","25.03.04","25.03.05","25.03.06","25.03.07","25.03.10","25.03.11","25.03.12","25.03.13","25.03.14","25.03.17","25.03.18","25.03.19","25.03.20","25.03.21","25.03.24","25.03.25","25.03.26","25.03.27","25.03.28","25.03.31","25.04.01","25.04.02","25.04.03","25.04.04","25.04.07","25.04.08","25.04.09","25.04.10","25.04.11","25.04.14","25.04.15","25.04.16","25.04.17","25.04.21","25.04.22","25.04.23","25.04.24","25.04.25","25.04.28","25.04.29","25.04.30","25.05.01","25.05.02","25.05.05","25.05.06","25.05.07","25.05.08","25.05.09","25.05.12","25.05.13","25.05.14","25.05.15","25.05.16","25.05.19","25.05.20","25.05.21","25.05.22","25.05.23","25.05.26","25.05.27","25.05.28","25.05.29","25.05.30","25.06.02","25.06.03","25.06.04","25.06.05","25.06.06","25.06.09","25.06.10","25.06.11","25.06.12","25.06.13","25.06.16","25.06.17","25.06.18","25.06.19","25.06.20","25.06.23","25.06.24","25.06.25","25.06.26","25.06.27","25.06.30","25.07.01","25.07.02","25.07.03","25.07.04","25.07.07","25.07.08","25.07.09","25.07.10","25.07.11","25.07.14","25.07.15","25.07.16","25.07.17","25.07.18","25.07.21","25.07.22","25.07.23","25.07.24","25.07.25","25.07.28","25.07.29","25.07.30","25.07.31","25.08.01","25.08.04","25.08.05","25.08.06","25.08.07","25.08.08","25.08.11","25.08.12","25.08.13","25.08.14","25.08.15","25.08.18","25.08.19","25.08.20","25.08.21","25.08.22","25.08.25","25.08.26","25.08.27","25.08.28","25.08.29","25.09.01","25.09.02","25.09.03","25.09.04","25.09.05","25.09.08","25.09.09","25.09.10","25.09.11","25.09.12","25.09.15","25.09.16","25.09.17","25.09.18","25.09.19","25.09.22","25.09.23","25.09.24","25.09.25","25.09.26","25.09.29","25.09.30","25.10.01","25.10.02","25.10.03","25.10.06","25.10.07","25.10.08","25.10.09","25.10.10","25.10.13","25.10.14","25.10.15","25.10.16","25.10.17","25.10.20","25.10.21","25.10.22","25.10.23","25.10.24","25.10.27","25.10.28","25.10.29","25.10.30","25.10.31","25.11.03","25.11.04","25.11.05","25.11.06","25.11.07","25.11.10","25.11.11","25.11.12","25.11.13","25.11.14","25.11.17","25.11.18","25.11.19","25.11.20","25.11.21","25.11.24","25.11.25","25.11.26","25.11.27","25.11.28","25.12.01","25.12.02","25.12.03","25.12.04","25.12.05","25.12.08","25.12.09","25.12.10","25.12.11","25.12.12","25.12.15","25.12.16","25.12.17","25.12.18","25.12.19","25.12.22","25.12.23","25.12.24","25.12.26","25.12.29","25.12.30","25.12.31","26.01.02","26.01.05","26.01.06","26.01.07","26.01.08","26.01.09","26.01.12","26.01.13","26.01.14","26.01.15","26.01.16","26.01.19","26.01.20","26.01.21","26.01.22","26.01.23","26.01.26","26.01.27","26.01.28","26.01.29","26.01.30","26.02.02","26.02.03","26.02.04","26.02.05","26.02.06","26.02.09","26.02.10","26.02.11","26.02.12","26.02.13","26.02.16","26.02.17","26.02.18","26.02.19","26.02.20","26.02.23","26.02.24","26.02.25","26.02.26","26.02.27","26.03.02","26.03.03","26.03.04","26.03.05","26.03.06","26.03.09","26.03.10","26.03.11","26.03.12","26.03.13","26.03.16","26.03.17","26.03.18","26.03.19","26.03.20","26.03.23","26.03.24","26.03.25","26.03.26","26.03.27","26.03.30","26.03.31","26.04.01","26.04.02","26.04.03","26.04.06","26.04.07","26.04.08","26.04.09","26.04.10","26.04.13","26.04.14","26.04.15","26.04.16","26.04.17","26.04.20","26.04.21","26.04.22","26.04.23","26.04.24","26.04.27","26.04.28","26.04.29","26.04.30","26.05.01","26.05.04","26.05.05","26.05.06","26.05.07","26.05.08","26.05.11","26.05.12","26.05.13","26.05.14","26.05.15","26.05.18","26.05.19","26.05.20","26.05.21","26.05.22","26.05.25","26.05.26","26.05.27","26.05.28","26.05.29","26.06.01","26.06.02","26.06.03","26.06.04","26.06.05","26.06.08","26.06.09","26.06.10","26.06.11","26.06.12","26.06.15","26.06.16","26.06.17","26.06.18","26.06.19","26.06.22","26.06.23","26.06.24","26.06.25","26.06.26","26.06.29","26.06.30","26.07.01","26.07.02","26.07.03","26.07.06","26.07.07","26.07.08","26.07.09","26.07.10","26.07.13","26.07.14","26.07.15","26.07.16","26.07.17","26.07.20","26.07.21","26.07.22","26.07.23","26.07.24"];
const gapUS10Y = [3.79,3.69,3.71,3.55,3.53,3.61,3.54,3.43,3.49,3.53,3.37,3.39,3.48,3.52,3.46,3.46,3.49,3.52,3.55,3.52,3.39,3.4,3.53,3.63,3.67,3.63,3.67,3.74,3.72,3.77,3.81,3.86,3.82,3.95,3.93,3.88,3.95,3.92,3.92,4.01,4.08,3.97,3.98,3.97,3.98,3.93,3.7,3.55,3.64,3.51,3.56,3.39,3.47,3.59,3.48,3.38,3.38,3.53,3.55,3.57,3.55,3.48,3.43,3.35,3.3,3.3,3.39,3.41,3.43,3.41,3.45,3.52,3.6,3.58,3.6,3.54,3.57,3.52,3.4,3.43,3.53,3.44,3.59,3.44,3.38,3.37,3.44,3.52,3.53,3.43,3.39,3.46,3.5,3.54,3.57,3.65,3.7,3.72,3.7,3.73,3.83,3.8,null,3.69,3.64,3.61,3.69,3.69,3.7,3.79,3.73,3.75,3.73,3.84,3.83,3.72,3.77,null,3.74,3.72,3.8,3.74,3.72,3.77,3.71,3.85,3.81,3.86,null,3.95,4.05,4.06,4.01,3.99,3.86,3.76,3.83,3.81,3.8,3.75,3.85,3.84,3.86,3.91,3.86,4.01,3.96,3.97,4.05,4.08,4.2,4.05,4.09,4.02,4.0,4.09,4.16,4.19,4.21,4.28,4.3,4.26,4.34,4.34,4.19,4.23,4.25,4.2,4.12,4.12,4.09,4.18,4.27,4.3,4.27,4.26,4.29,4.27,4.25,4.29,4.33,4.32,4.37,4.35,4.49,4.44,4.55,4.56,4.61,4.59,4.59,4.69,4.81,4.73,4.72,4.78,null,4.66,4.58,4.7,4.63,4.71,4.83,4.91,4.98,4.93,4.86,4.83,4.95,4.86,4.84,4.88,4.88,4.77,4.67,4.57,4.67,4.58,4.49,4.62,4.61,4.63,4.44,4.53,4.45,4.44,4.42,4.41,4.42,null,4.47,4.39,4.34,4.27,4.37,4.22,4.28,4.18,4.12,4.14,4.23,4.23,4.2,4.04,3.92,3.91,3.95,3.93,3.86,3.89,3.9,3.89,3.79,3.84,3.88,3.95,3.91,3.99,4.05,4.01,4.02,4.04,3.98,3.96,null,4.07,4.1,4.14,4.15,4.11,4.14,4.18,4.14,4.15,4.08,4.06,3.99,3.87,4.03,4.17,4.09,4.09,4.15,4.17,4.17,4.31,4.27,4.24,4.3,4.27,4.32,4.33,4.26,4.28,4.31,4.27,4.25,4.19,4.22,4.13,4.11,4.09,4.09,4.1,4.16,4.19,4.29,4.31,4.34,4.3,4.27,4.27,4.22,4.25,4.24,4.2,4.2,4.33,4.36,4.36,4.31,4.39,4.42,4.36,4.55,4.56,4.5,4.63,4.67,4.59,4.64,4.62,4.62,4.61,4.65,4.7,4.67,4.63,4.69,4.63,4.58,4.5,4.49,4.47,4.48,4.45,4.5,4.48,4.45,4.36,4.38,4.42,4.44,4.41,4.43,4.47,4.46,4.54,4.61,4.55,4.51,4.41,4.33,4.29,4.28,4.43,4.47,4.39,4.31,4.24,4.2,4.28,4.22,4.25,4.25,4.25,4.23,4.32,4.29,4.36,4.48,4.43,4.36,4.28,4.28,4.3,4.28,4.2,4.18,4.23,4.17,4.16,4.2,4.25,4.26,4.25,4.28,4.27,4.2,4.17,4.15,4.09,3.99,3.8,3.78,3.9,3.96,3.99,3.94,3.9,3.85,3.83,3.92,3.89,3.86,3.82,3.79,3.86,3.81,3.82,3.83,3.84,3.87,3.91,3.84,3.77,3.73,3.72,3.7,3.65,3.65,3.68,3.66,3.63,3.65,3.7,3.73,3.73,3.75,3.74,3.79,3.79,3.75,3.81,3.74,3.79,3.85,3.98,4.03,4.04,4.06,4.09,4.08,null,4.03,4.02,4.09,4.08,4.19,4.2,4.24,4.21,4.25,4.28,4.28,4.29,4.28,4.37,4.31,4.26,4.42,4.31,4.3,null,4.43,4.44,4.43,4.43,4.42,4.39,4.41,4.43,4.41,4.27,4.3,4.25,null,4.18,4.19,4.23,4.19,4.17,4.15,4.2,4.22,4.26,4.32,4.4,4.39,4.4,4.5,4.57,4.52,4.59,4.59,4.58,4.62,4.55,4.58,4.57,4.6,4.62,4.67,4.67,4.68,4.77,4.79,4.78,4.66,4.61,4.61,null,4.57,4.6,4.65,4.63,4.53,4.55,4.55,4.52,4.58,4.54,4.52,4.43,4.45,4.49,4.51,4.54,4.62,4.52,4.47,null,4.55,4.53,4.5,4.42,4.4,4.3,4.25,4.29,4.24,4.16,4.22,4.28,4.29,4.32,4.22,4.28,4.32,4.27,4.31,4.31,4.29,4.25,4.24,4.25,4.34,4.31,4.35,4.38,4.27,4.23,4.17,4.2,4.06,4.01,4.15,4.26,4.34,4.4,4.48,4.38,4.35,4.29,4.34,4.42,4.41,4.4,4.32,4.29,4.23,4.19,4.17,4.25,4.33,4.36,4.3,4.26,4.37,4.37,4.45,4.49,4.53,4.45,4.43,4.46,4.48,4.58,4.54,4.51,null,4.43,4.47,4.43,4.41,4.46,4.46,4.37,4.4,4.51,4.49,4.47,4.41,4.36,4.41,4.46,4.39,4.38,null,4.38,4.34,4.3,4.29,4.26,4.29,4.24,4.26,4.3,4.35,null,4.4,4.42,4.34,4.35,4.43,4.43,4.5,4.46,4.47,4.44,4.38,4.35,4.4,4.43,4.4,4.42,4.34,4.38,4.37,4.23,4.22,4.22,4.22,4.23,4.27,4.27,4.29,4.24,4.29,4.33,4.34,4.3,4.29,4.33,4.26,4.28,4.26,4.24,4.22,4.23,null,4.28,4.22,4.17,4.1,4.05,4.08,4.04,4.01,4.06,4.05,4.04,4.06,4.11,4.14,4.15,4.12,4.16,4.18,4.2,4.15,4.16,4.12,4.1,4.13,4.18,4.14,4.13,4.14,4.05,null,4.03,4.05,3.99,4.02,4.0,3.98,3.97,4.01,4.02,4.01,3.99,4.08,4.11,4.11,4.13,4.1,4.17,4.11,4.11,4.13,null,4.08,4.11,4.14,4.13,4.12,4.13,4.1,4.06,4.04,4.01,4.0,null,4.02,4.09,4.09,4.06,4.11,4.14,4.17,4.18,4.13,4.14,4.19,4.18,4.15,4.16,4.12,4.16,4.17,4.18,4.15,4.14,4.12,4.14,4.18,4.19,4.17,4.18,4.15,4.19,4.18,4.19,4.18,4.15,4.17,4.24,null,4.3,4.26,4.26,4.24,4.22,4.24,4.26,4.24,4.26,4.29,4.28,4.29,4.21,4.22,4.22,4.16,4.18,4.09,4.04,null,4.05,4.09,4.08,4.08,4.03,4.04,4.05,4.02,3.97,4.05,4.06,4.09,4.13,4.15,4.12,4.15,4.21,4.27,4.28,4.23,4.2,4.26,4.25,4.39,4.34,4.39,4.33,4.42,4.44,4.35,4.3,4.33,4.31,4.35,4.34,4.33,4.29,4.29,4.31,4.3,4.26,4.29,4.32,4.26,4.26,4.3,4.3,4.34,4.31,4.35,4.36,4.42,4.4,4.39,4.45,4.43,4.36,4.41,4.38,4.42,4.46,4.46,4.47,4.59,4.61,4.67,4.57,4.57,4.56,null,4.5,4.48,4.45,4.45,4.47,4.46,4.49,4.47,4.55,4.56,4.53,4.55,4.45,4.48,4.47,4.43,4.49,4.46,null,4.51,4.5,4.41,4.4,4.38,4.38,4.44,4.48,4.49,null,4.48,4.55,4.56,4.54,4.56,4.62,4.58,4.55,4.57,4.55,4.6,4.63,4.67,4.71,null];
const gapDollarIdx = [104.31,104.02,104.82,103.64,102.74,102.98,102.92,101.99,101.94,102.14,102.1,101.83,101.78,101.91,101.67,101.41,101.63,101.72,102.08,101.91,101.02,101.57,102.75,103.49,103.29,103.27,103.1,103.53,103.24,103.12,103.83,103.79,103.78,104.11,104.52,104.53,105.15,104.62,104.82,104.43,104.99,104.48,104.32,105.59,105.63,105.3,104.55,103.18,103.21,104.27,104.09,103.36,102.93,102.89,101.97,102.2,102.76,102.51,102.1,102.29,101.82,102.18,101.78,101.26,101.54,101.51,null,102.24,101.88,101.17,100.7,101.24,101.79,101.44,101.66,101.56,101.55,101.07,101.59,101.2,101.25,101.4,101.92,101.72,101.11,101.18,100.99,101.15,101.39,101.26,101.87,102.5,102.27,102.4,102.72,103.45,103.07,103.07,103.38,103.79,104.17,104.13,104.13,104.07,104.24,103.5,103.95,103.93,104.07,104.05,103.31,103.53,103.63,103.31,102.91,101.71,101.83,101.83,102.12,101.67,101.99,102.54,102.33,102.12,102.54,103.0,102.58,102.65,102.65,103.03,102.86,101.95,101.64,101.4,100.19,99.45,99.6,99.52,99.62,99.98,100.59,100.79,101.08,101.09,100.63,101.54,101.39,101.62,102.08,102.38,102.35,101.83,101.86,102.34,102.31,102.36,102.68,103.05,103.09,103.31,103.47,103.27,103.2,103.47,103.33,103.91,104.01,103.99,103.47,103.09,103.58,104.19,104.76,104.82,105.02,105.06,104.53,104.69,104.74,105.39,105.32,104.85,104.83,104.78,105.04,105.26,105.69,105.93,106.36,105.93,105.81,106.6,106.71,106.53,106.06,105.78,105.81,105.55,105.56,106.36,106.43,106.03,106.04,106.35,106.04,105.98,105.33,106.08,106.35,106.42,106.38,105.93,106.49,106.71,105.97,104.85,105.04,105.37,105.44,105.78,105.72,105.5,103.9,104.26,104.23,103.79,103.31,103.44,103.82,103.82,103.3,103.1,102.64,102.67,103.42,103.2,103.64,103.99,104.1,103.5,103.98,104.06,103.83,102.84,101.94,102.54,102.18,101.79,102.04,101.47,101.33,101.1,100.65,100.91,101.02,101.89,102.19,102.13,102.12,101.92,102.28,102.08,102.02,102.15,102.15,103.11,103.2,103.31,103.06,103.11,103.4,103.03,103.37,103.23,103.42,103.21,103.08,102.87,103.78,104.31,104.06,103.91,104.03,103.99,104.04,104.85,104.61,104.2,104.18,103.97,103.91,103.87,103.85,103.75,103.75,103.9,104.09,103.79,103.77,103.75,103.32,102.77,102.68,102.85,102.93,102.76,103.34,103.41,103.23,103.48,103.04,103.66,104.17,103.93,103.99,104.06,104.26,104.76,104.56,103.99,103.89,104.07,103.9,103.92,105.03,105.06,105.83,105.99,106.06,105.76,105.98,105.98,105.91,105.5,105.7,105.45,105.8,105.44,106.1,105.62,105.17,104.91,104.91,105.3,105.42,105.1,105.17,105.1,104.89,104.21,104.34,104.33,104.46,104.55,104.83,105.03,104.63,104.53,105.03,104.65,104.62,104.07,104.05,104.22,104.05,104.85,105.11,105.19,104.61,105.18,105.54,104.94,104.87,105.22,105.44,105.12,105.25,105.71,105.57,105.54,105.58,105.4,105.07,104.54,104.66,104.8,104.72,104.13,103.78,103.88,103.95,103.44,103.88,104.11,104.03,104.17,104.12,104.1,104.05,104.31,104.31,103.85,104.2,102.98,102.48,102.75,102.99,103.02,102.95,102.96,102.38,102.38,102.8,102.3,101.73,101.29,100.91,101.39,100.6,100.74,100.45,100.99,101.27,101.62,101.76,101.3,101.07,101.14,101.51,101.59,101.65,101.35,101.12,100.43,100.56,100.28,100.32,100.42,100.56,100.15,100.62,100.24,100.1,100.52,100.93,101.42,101.75,102.27,102.3,102.3,102.69,102.77,102.67,103.08,103.05,103.4,103.65,103.3,103.83,103.9,104.27,103.91,104.13,104.18,104.19,103.86,103.87,104.2,103.79,103.32,104.98,104.37,104.89,105.45,105.95,106.37,106.59,106.61,106.2,106.14,106.61,106.93,107.5,106.77,106.96,106.04,106.04,105.82,106.42,106.34,106.29,105.7,106.03,106.12,106.38,106.69,106.95,106.99,106.55,106.66,107.74,108.15,107.35,107.8,108.02,107.89,107.79,107.93,108.29,109.2,108.79,108.1,108.37,108.92,null,109.48,109.81,109.11,108.91,108.81,109.2,109.2,107.86,107.96,107.86,107.24,107.16,107.68,107.8,107.63,108.21,108.87,107.82,107.44,107.54,107.92,108.19,107.83,107.82,107.21,106.57,106.57,106.95,107.06,106.26,106.51,106.5,106.22,106.32,107.17,107.55,106.66,105.68,104.25,104.02,103.81,103.95,103.27,103.58,103.83,103.7,103.0,102.89,103.09,103.49,103.74,103.93,103.83,104.2,103.99,103.7,103.88,103.94,103.49,101.79,102.76,102.97,102.7,102.62,100.61,99.89,99.39,99.96,99.14,99.12,98.04,98.69,99.63,99.16,99.25,98.78,99.01,99.27,100.05,99.84,99.64,99.04,99.43,100.49,100.16,101.59,100.82,100.87,100.72,100.94,100.28,99.97,99.43,99.84,99.01,99.01,99.42,99.78,99.2,99.25,98.63,99.15,98.73,98.7,99.14,98.9,99.07,98.6,97.9,98.17,97.55,98.39,98.46,98.46,98.28,98.01,97.45,97.27,96.76,97.03,96.49,96.46,96.42,96.82,96.82,97.14,97.17,97.19,97.32,97.52,97.76,98.31,98.07,98.44,98.19,97.57,97.11,96.94,97.12,97.39,98.39,98.64,99.58,99.74,98.93,98.58,98.58,97.98,98.22,98.0,98.36,97.92,97.66,98.1,97.71,98.01,98.11,98.08,98.51,97.59,98.31,98.12,98.12,97.73,97.69,97.69,98.34,98.08,98.3,97.72,97.41,97.75,97.74,97.52,97.53,96.9,96.24,96.52,96.97,97.27,96.97,96.89,97.51,98.21,97.82,97.58,97.45,97.38,97.54,97.41,97.8,98.28,98.64,99.28,98.73,99.03,98.81,98.54,98.09,98.19,98.35,98.71,98.67,98.72,98.74,98.56,98.45,99.02,99.34,99.63,99.7,100.07,100.05,99.58,99.47,99.46,99.31,99.37,99.05,99.19,99.48,99.44,100.15,100.09,100.11,100.07,99.58,99.52,99.52,99.4,99.36,99.29,98.79,98.95,98.96,99.06,99.19,98.76,98.34,98.39,97.95,97.79,98.0,98.08,98.25,97.95,97.61,97.68,97.69,97.73,97.95,98.04,98.15,97.98,98.31,98.42,98.68,98.89,98.62,98.9,98.9,99.12,99.2,99.2,98.43,98.56,98.17,97.4,96.85,96.05,96.27,96.13,96.85,97.49,97.3,97.48,97.7,97.5,96.68,96.67,96.72,96.83,96.81,96.81,97.06,97.62,97.85,97.72,97.64,97.77,97.62,97.74,97.56,98.33,99.0,98.73,99.3,98.97,99.17,98.8,99.22,99.75,100.36,99.46,99.33,99.87,99.05,99.45,98.72,99.24,99.39,99.7,99.98,100.35,99.75,99.45,99.85,99.85,99.8,99.68,98.92,98.58,98.43,98.16,97.9,97.85,98.02,97.89,97.9,98.22,98.41,98.6,98.36,98.31,98.47,98.82,97.91,98.0,98.26,98.31,97.87,97.94,97.78,97.82,98.18,98.42,98.72,99.2,99.1,99.26,99.01,99.21,99.18,99.18,99.1,99.14,98.96,98.85,99.14,99.18,99.5,99.38,100.05,100.02,99.88,99.93,99.84,99.74,99.37,99.27,99.86,100.61,100.61,100.79,101.17,101.39,101.19,101.12,100.87,100.95,101.15,100.62,100.62,100.61,100.77,100.75,100.68,100.75,101.04,100.71,100.27,100.56,100.58,100.78,101.0,100.95,101.28,101.3];

function buildGapChart() {
  const canvas = document.getElementById('chartGap');
  if (!canvas || typeof Chart === 'undefined' || !gapLabels.length) return;
  if (gapChartInstance) gapChartInstance.destroy();

  const thin = { borderWidth: isNarrow() ? 0.9 : 1.2, tension: 0, pointRadius: 0, pointHitRadius: 6, pointHoverRadius: 3, spanGaps: true };
  gapChartInstance = new Chart(canvas, {
    type: 'line',
    data: { labels: gapLabels, datasets: [
      Object.assign({ label: '미국 국채 10년', data: gapUS10Y, borderColor: cssVar('--s-us10y'), backgroundColor: cssVar('--s-us10y'), yAxisID: 'y' }, thin),
      Object.assign({ label: '달러인덱스', data: gapDollarIdx, borderColor: cssVar('--s-dxy'), backgroundColor: cssVar('--s-dxy'), yAxisID: 'y1' }, thin)
    ] },
    options: trendChartOptions(
      (v, label) => label === '달러인덱스' ? v.toFixed(2) : `${v.toFixed(2)}%`,
      {
        y: {
          position: 'left', grace: '4%',
          title: { display: !isNarrow(), text: '금리 (%)', color: cssVar('--s-us10y'), font: { size: 11 } },
          ticks: { color: cssVar('--s-us10y'), font: { size: 10 }, callback: v => v.toFixed(1) },
          grid: { color: cssVar('--chart-grid') }, border: { display: false }
        },
        y1: {
          position: 'right', grace: '4%',
          title: { display: !isNarrow(), text: '달러인덱스', color: cssVar('--s-dxy'), font: { size: 11 } },
          ticks: { color: cssVar('--s-dxy'), font: { size: 10 }, callback: v => v.toFixed(0) },
          grid: { display: false }, border: { display: false }
        }
      }
    )
  });
}

// 모바일은 뷰 안이 아니라 문서가 스크롤되므로 탭마다 위치를 따로 들고 있어야
// 이전(뷰별 scrollTop)과 같은 감각이 유지된다. PC 는 뷰가 각자 스크롤하므로 무관.
const viewScrollTop = {};

function showView(view) {
  const prev = currentView();
  if (isNarrow() && prev && prev !== view) viewScrollTop[prev] = window.scrollY;

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
  setActiveView(view);
  Object.entries(views).forEach(([key, el]) => {
    el.style.display = key === view ? 'flex' : 'none';
  });

  // 프로그램적 스크롤은 Safari 가 툴바를 다시 펼치는 계기가 되므로, 위치가
  // 이미 맞으면 건드리지 않는다.
  if (isNarrow() && prev !== view) {
    const top = viewScrollTop[view] || 0;
    if (Math.abs(window.scrollY - top) > 1) window.scrollTo(0, top);
  }
  // 숨어 있는 동안 창 크기가 바뀌면 캔버스가 옛 너비를 그대로 들고 있어
  // 카드보다 좁게 그려진다. 보이는 순간 다시 재도록 한다.
  requestAnimationFrame(resizeAllCharts);
}

function resizeAllCharts() {
  [chartInstance, creditChartInstance, indexChartInstance,
   rateChartInstance, dollarChartInstance, gapChartInstance]
    .forEach(c => { if (c) c.resize(); });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showView(btn.dataset.view);
    saveViewState();
  });
});

const VIEW_STATE_KEY = 'mystock-view-state';
const SCROLLERS = ['#view-domestic', '#view-overseas', '#view-mytrades', '.content', '.sidebar', '.mytrades-col.philosophy', '.mytrades-col.journal'];

function currentView() {
  const active = document.querySelector('.nav-btn.active');
  return active ? active.dataset.view : 'domestic';
}
function saveViewState() {
  const scroll = {};
  SCROLLERS.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && el.scrollTop > 0) scroll[sel] = el.scrollTop;
  });
  if (window.scrollY > 0) scroll.window = window.scrollY;
  if (isNarrow()) viewScrollTop[currentView()] = window.scrollY;
  try {
    sessionStorage.setItem(VIEW_STATE_KEY, JSON.stringify({
      view: currentView(), scenario: currentScenario(), scroll, viewScrollTop
    }));
  } catch (e) {}
}
function restoreViewState() {
  let state;
  try {
    state = JSON.parse(sessionStorage.getItem(VIEW_STATE_KEY) || 'null');
  } catch (e) {}
  if (!state) return;
  Object.assign(viewScrollTop, state.viewScrollTop || {});
  if (state.view && views[state.view]) showView(state.view);
  if (state.scenario) selectScenario(state.scenario);
  requestAnimationFrame(() => {
    Object.entries(state.scroll || {}).forEach(([sel, top]) => {
      if (sel === 'window') {
        // 로드 직후의 프로그램적 스크롤은 Safari 가 하단 툴바를 펼치는 계기가
        // 된다. 되돌릴 위치가 없으면(맨 위) 아예 건드리지 않는다.
        if (top > 0 && Math.abs(window.scrollY - top) > 1) window.scrollTo(0, top);
      } else {
        const el = document.querySelector(sel);
        if (el && el.scrollTop !== top) el.scrollTop = top;
      }
    });
  });
}

let saveTimer = null;
function queueSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveViewState, 150);
}
SCROLLERS.forEach(sel => {
  const el = document.querySelector(sel);
  if (el) el.addEventListener('scroll', queueSave, { passive: true });
});
window.addEventListener('scroll', queueSave, { passive: true });
window.addEventListener('pagehide', saveViewState);

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
restoreViewState();

/* ===== 다크 / 라이트 테마 ===== */
function redrawChartsForTheme() {
  // Chart.js는 색을 생성 시점에 굳히므로 테마가 바뀌면 다시 그린다
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
    renderChart(activeYearLabel, activeDisplayLabel);
  }
  buildCreditChart();
  if (indexChartInstance) {
    indexChartInstance.destroy();
    indexChartInstance = null;
    indexChartsBuilt = false;
    ensureIndexCharts();
  }
  if (gapChartInstance) buildGapChart();
  if (rateChartInstance) buildRateChart();
  if (dollarChartInstance) buildDollarChart();
}

function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  try { localStorage.setItem('theme', mode); } catch (e) {}
  // 브라우저 크롬 색도 테마를 따라가게 (툴바 접힘 동작과는 무관하다)
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg-page').trim());
  redrawChartsForTheme();
}

const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}
