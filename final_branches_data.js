// =============================================================
// Tadfuq Al-Khayr — branches & coverage map (Rasafa)
// Official authorized distribution: 4 centers, 32 mahallas.
// =============================================================

(function () {
  // المراكز والمناطق التابعة لها (التوزيع المعتمد الرسمي)
  window.BRANCHES = [
    {
      id: 'RS-011', name: 'المركز الرئيسي', district:'الرصافة',
      manager: 'م. أحمد كاظم الموسوي', phone: '07901-234001',
      hours: 'السبت – الخميس · 08:00 – 16:00',
      address: 'شارع الرشيد — قرب وزارة المالية القديمة',
      gps: '33.3373, 44.4106',
      mahallas: ['101','102','106','107','109','111'],
      subscribers: 18420, capacity:'متوسط', loadStatus:'مستقر',
      services:['CS','CT','CB','CA'],
    },
    {
      id: 'RS-014', name: 'مركز النضال', district:'الرصافة', primary:true,
      manager: 'م. كرار جواد الكناني', phone: '07902-014555',
      hours: 'السبت – الخميس · 08:00 – 16:00',
      address: 'شارع النضال — قرب ساحة الفردوس',
      gps: '33.3091, 44.4185',
      mahallas: ['103','101','121','133','123','135','143'],
      subscribers: 26310, capacity:'مرتفع', loadStatus:'تحت الضغط',
      services:['CS','CT','CB','CA'],
    },
    {
      id: 'RS-024', name: 'مركز الفضل', district:'الرصافة',
      manager: 'م. مصطفى علي الحسيني', phone: '07905-024777',
      hours: 'السبت – الخميس · 08:00 – 16:00',
      address: 'الفضل — قرب جامع الفضل',
      gps: '33.3334, 44.4030',
      mahallas: ['129','125','139','137','115','127','113','110'],
      subscribers: 16880, capacity:'متوسط', loadStatus:'مستقر',
      services:['CS','CT','CB','CA'],
    },
    {
      id: 'RS-118', name: 'مركز باب المعظم', district:'الرصافة',
      manager: 'م. ياسر شاكر الطائي', phone: '07912-118450',
      hours: 'السبت – الخميس · 08:00 – 16:00',
      address: 'باب المعظم — قرب وزارة الدفاع القديمة',
      gps: '33.3539, 44.3877',
      mahallas: ['108','141','117','147','114','149','112','120','131','116','119','118'],
      subscribers: 11420, capacity:'منخفض', loadStatus:'مستقر',
      services:['CS','CT','CB'],
    },
  ];

  // Reverse index: mahalla code -> branch id
  // (mahalla 101 appears under both المركز الرئيسي و مركز النضال in the
  //  official chart; last-write-wins assigns it to مركز النضال.)
  window.MAHALLA_INDEX = {};
  window.BRANCHES.forEach(b => {
    b.mahallas.forEach(m => { window.MAHALLA_INDEX[m] = b.id; });
  });

  window.BRANCH_MAP = Object.fromEntries(window.BRANCHES.map(b => [b.id, b]));

  // Totals
  window.BRANCH_STATS = {
    total: window.BRANCHES.length,
    mahallas: Object.keys(window.MAHALLA_INDEX).length,
    subscribers: window.BRANCHES.reduce((a, b) => a + b.subscribers, 0),
    districts: new Set(window.BRANCHES.map(b => b.district)).size,
  };

  // Helper to find a branch by mahalla number
  window.findBranchByMahalla = function (m) {
    const id = window.MAHALLA_INDEX[(m || '').trim()];
    return id ? window.BRANCH_MAP[id] : null;
  };
})();
