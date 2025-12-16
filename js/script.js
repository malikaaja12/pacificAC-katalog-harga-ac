// --- DATA ---
const acData = [
  {
    brand: "Daikin",
    imageUrl: "img/daikin/logo.png",
    types: [
      {
        name: "Beta Inverter Series",
        products: [
          {
            name: "Daikin AC Split 1/2 PK Beta Inverter",
            desc: "AC split Daikin hemat energi 1/2 PK, cocok untuk kamar tidur atau ruang keluarga Sedang.",
            price: "Rp 5.200.000",
            oldPrice: "Rp 5.300.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-Beta-Inverter-1920w.png", // Image for list view
            imgDetail: "img/daikin/Beta.png", // Image for detail view
            features: [
              "Mode Inverter Bertenaga",
              "Filter Gin-ION",
              "Super PCB",
              "Mode Econo",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 (2,400 - 6,500) Btu/h",
              "Daya Listrik": "380 (165 - 510) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "280 x 730 x 219 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 3/4 PK Beta Inverter ",
            desc: "AC split Daikin inverter 3/4 PK bertenaga besar, pendinginan optimal untuk ruangan luas.",
            price: "Rp 5.395.000",
            oldPrice: "Rp 5.450.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-Beta-Inverter-1920w.png", // Image for list view
            imgDetail: "img/daikin/Beta.png", // Image for detail view
            features: [
              "Mode Inverter Bertenaga",
              "Filter Gin Ion",
              "Super PCB",
              "Mode Econo",
              "Intelligent Eye",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 (3,400 - 8,200) Btu/h",
              "Daya Listrik": "615 (245 - 750) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "280 x 730 x 219 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1 PK Beta Inverter",
            desc: "AC split Daikin inverter 1 PK bertenaga besar, pendinginan optimal untuk ruangan Sedang.",
            price: "Rp 5.680.000",
            oldPrice: "Rp 5.750.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-Beta-Inverter-1920w.png", // Image for list view
            imgDetail: "img/daikin/Beta.png", // Image for detail view
            features: [
              "Mode Inverter Bertenaga",
              "Filter Gin Ion",
              "Super PCB",
              "Mode Econo",
              "Intelligent Eye",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 (3,400 - 9,200) Btu/h",
              "Daya Listrik": "900 (245 - 930) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "280 x 730 x 219 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1.5 Beta PK Inverter",
            desc: "AC split Daikin inverter 1.5 PK bertenaga besar, pendinginan optimal untuk ruangan Sedang.",
            price: "Rp 6.850.000",
            oldPrice: "Rp 7.000.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-Beta-Inverter-1920w.png", // Image for list view
            imgDetail: "img/daikin/Beta.png", // Image for detail view
            features: [
              "Mode Inverter Bertenaga",
              "Filter Gin Ion",
              "Super PCB",
              "Mode Econo",
              "Intelligent Eye",
            ],
            specs: {
              "Kapasitas Pendingin": "12,300 (4,100 - 13,000) Btu/h",
              "Daya Listrik": "1,190 (320 - 1,215) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "550 x 650 x 284 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 2 Beta PK Inverter",
            desc: "AC split Daikin inverter 2 PK bertenaga besar, pendinginan optimal untuk ruangan Sedang.",
            price: "Rp 9.100.000",
            oldPrice: "Rp 9.300.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-Beta-Inverter-1920w.png", // Image for list view
            imgDetail: "img/daikin/Beta.png", // Image for detail view
            features: [
              "Mode Inverter Bertenaga",
              "Filter Gin Ion",
              "Super PCB",
              "Mode Econo",
              "Intelligent Eye",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 (5,600 - 18,500) Btu/h",
              "Daya Listrik": "1,520 (410 - 1,560) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "595 x 845 x 300 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
        ],
      },

      {
        name: "SMS Series",
        products: [
          {
            name: "Daikin AC Split 1/2 PK Standar",
            desc: "AC split standar dari Daikin 1/2 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 4.450.000",
            oldPrice: "Rp 4.500.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-SMS-1920w.png", // Image for list view
            imgDetail: "img/daikin/ind.png", // Image for detail view
            features: [
              "Blue Fin Coating",
              "Filter Gin-ION",
              "Low Voltage Protection",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "390 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "280 x 730 x 219 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1 PK Standar",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 5.200.000",
            oldPrice: "Rp 5.300.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-SMS-1920w.png", // Image for list view
            imgDetail: "img/daikin/ind.png", // Image for detail view
            features: [
              "Blue Fin Coating",
              "Filter Gin ION",
              "Low Voltage Protection",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "280 x 730 x 219 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1.5 PK Standar",
            desc: "AC split standar dari Daikin 1.5 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 6.300.000",
            oldPrice: "Rp 6.500.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-SMS-1920w.png", // Image for list view
            imgDetail: "img/daikin/ind.png", // Image for detail view
            features: [
              "Blue Fin Coating",
              "Filter Gin ION",
              "Low Voltage Protection",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1,040 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "550 x 675 x 284 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 2 PK Standar",
            desc: "AC split standar dari Daikin 2 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 8.250.000",
            oldPrice: "Rp 8.500.000",
            imgList:
              "https://lirp.cdn-website.com/a94dfc3e/dms3rep/multi/opt/New-Product-NP-SMS-1920w.png", // Image for list view
            imgDetail: "img/daikin/ind.png", // Image for detail view
            features: [
              "Blue Fin Coating",
              "Filter Gin ION",
              "Low Voltage Protection",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1,525 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "595 x 845 x 300 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
        ],
      },

      {
        name: "Alpha Inverter Series",
        products: [
          {
            name: "Daikin AC Split 1/2 PK Alpha Inverter",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 6.450.000",
            oldPrice: "Rp 6.550.000",
            imgList:
              "https://irp.cdn-website.com/a94dfc3e/dms3rep/multi/New-Product-NP-Alpha-Inverter.png", // Image for list view
            imgDetail: "img/daikin/Alpha.png", // Image for detail view
            features: [
              "3D AirFlow",
              "Theknologi STREAMER",
              "Mulai Ulang Otomatis",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "5,100 (2,400 - 6,500) Btu/h",
              "Daya Listrik": "310  Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "460 x 650 x 240 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 3/4 PK Alpha Inverter",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 6.650.000",
            oldPrice: "Rp 6.750.000",
            imgList:
              "https://irp.cdn-website.com/a94dfc3e/dms3rep/multi/New-Product-NP-Alpha-Inverter.png", // Image for list view
            imgDetail: "img/daikin/Alpha.png", // Image for detail view
            features: [
              "3D AirFlow",
              "Theknologi STREAMER",
              "Mulai Ulang Otomatis",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "6,800 (3,400 - 9,000) Btu/h",
              "Daya Listrik": "199 (190 - 1,080) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "550 x 675 x 284 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1 PK Alpha Inverter",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 6.950.000",
            oldPrice: "Rp 7.100.000",
            imgList:
              "https://irp.cdn-website.com/a94dfc3e/dms3rep/multi/New-Product-NP-Alpha-Inverter.png", // Image for list view
            imgDetail: "img/daikin/Alpha.png", // Image for detail view
            features: [
              "3D AirFlow",
              "Theknologi STREAMER",
              "Mulai Ulang Otomatis",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "9,700 (3,400 - 11,600) Btu/h",
              "Daya Listrik": "760 (190 - 1,130) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "550 x 675 x 284 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 1.5 PK Alpha Inverter",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan sedang.",
            price: "Rp 8.450.000",
            oldPrice: "Rp 8.500.000",
            imgList:
              "https://irp.cdn-website.com/a94dfc3e/dms3rep/multi/New-Product-NP-Alpha-Inverter.png", // Image for list view
            imgDetail: "img/daikin/Alpha.png", // Image for detail view
            features: [
              "3D AirFlow",
              "Theknologi STREAMER",
              "Mulai Ulang Otomatis",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "12,100 (4,000 - 13,000) Btu/h",
              "Daya Listrik": "1,020 (250 - 1,100) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 770 x 246 mm",
              "Dimensi Outdoor": "550 x 675 x 284 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
          {
            name: "Daikin AC Split 2 PK Alpha Inverter",
            desc: "AC split standar dari Daikin 1 PK, pendinginan handal untuk ruangan Besar.",
            price: "Rp 11.125.000",
            oldPrice: "Rp 11.200.000",
            imgList:
              "https://irp.cdn-website.com/a94dfc3e/dms3rep/multi/New-Product-NP-Alpha-Inverter.png", // Image for list view
            imgDetail: "img/daikin/Alpha.png", // Image for detail view
            features: [
              "3D AirFlow",
              "Theknologi STREAMER",
              "Mulai Ulang Otomatis",
              "Pengoperasian Hening",
            ],
            specs: {
              "Kapasitas Pendingin": "19,000 (6,000 - 21,200) Btu/h",
              "Daya Listrik": "1,700 (420 - 2,200) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "288 x 730 x 219 mm",
              "Dimensi Outdoor": "595 x 895 x 300 mm",
              Garansi: "3 Tahun Sparepart, 5 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },
  {
    brand: "Panasonic",
    imageUrl: "img/panasonic/logo.png",
    types: [
      {
        name: "Standar Series",
        products: [
          {
            name: "Panasonic AC Split 1/2 PK Standar",
            desc: "AC split standar Panasonic 1/2 PK, pilihan ekonomis dan handal.",
            price: "Rp 4.050.000",
            oldPrice: "Rp 4.150.000",
            imgList:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590092.png.pub.png?resize=272%3A204", // Image for list view
            imgDetail:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590091.png.pub.crop.pc.thumb.640.1200.png", // Image for detail view
            features: [
              "Powerful Mode",
              "iAUTO",
              "Evaporator Blue Fin",
              "Rangka Outdoor Ecotough",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "390 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "290 x 799 x 209 mm",
              "Dimensi Outdoor": "490 x 650 x 230 mm",
              Garansi: "1 Tahun Sparepart, 3 Tahun Kompresor",
            },
          },
          {
            name: "Panasonic AC Split 3/4 PK Standar",
            desc: "AC split standar Panasonic 3/4 PK, pilihan ekonomis dan handal.",
            price: "Rp 4.200.000",
            oldPrice: "Rp 4.300.000",
            imgList:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590092.png.pub.png?resize=272%3A204", // Image for list view
            imgDetail:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590091.png.pub.crop.pc.thumb.640.1200.png", // Image for detail view
            features: [
              "Powerful Mode",
              "iAUTO",
              "Evaporator Blue Fin",
              "Rangka Outdoor Ecotough",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 Btu/h",
              "Daya Listrik": "550 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "290 x 799 x 209 mm",
              "Dimensi Outdoor": "490 x 650 x 230 mm",
              Garansi: "1 Tahun Sparepart, 3 Tahun Kompresor",
            },
          },
          {
            name: "Panasonic AC Split 1 PK Standar",
            desc: "AC split standar Panasonic 1 PK, pilihan ekonomis dan handal.",
            price: "Rp 4.450.000",
            oldPrice: "Rp 4.600.000",
            imgList:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590092.png.pub.png?resize=272%3A204", // Image for list view
            imgDetail:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590091.png.pub.crop.pc.thumb.640.1200.png", // Image for detail view
            features: [
              "Powerful Mode",
              "iAUTO",
              "Evaporator Blue Fin",
              "Rangka Outdoor Ecotough",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "760 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "290 x 799 x 209 mm",
              "Dimensi Outdoor": "490 x 650 x 230 mm",
              Garansi: "1 Tahun Sparepart, 3 Tahun Kompresor",
            },
          },
          {
            name: "Panasonic AC Split 1.5 PK Standar",
            desc: "AC split standar Panasonic 1.5 PK, pilihan ekonomis dan handal.",
            price: "Rp 5.950.000",
            oldPrice: "Rp 6.000.000",
            imgList:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590092.png.pub.png?resize=272%3A204", // Image for list view
            imgDetail:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590091.png.pub.crop.pc.thumb.640.1200.png", // Image for detail view
            features: [
              "Powerful Mode",
              "iAUTO",
              "Evaporator Blue Fin",
              "Rangka Outdoor Ecotough",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1030 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "290 x 799 x 209 mm",
              "Dimensi Outdoor": "490 x 650 x 230 mm",
              Garansi: "1 Tahun Sparepart, 3 Tahun Kompresor",
            },
          },
          {
            name: "Panasonic AC Split 2 PK Standar",
            desc: "AC split standar Panasonic 1.5 PK, pilihan ekonomis dan handal.",
            price: "Rp 7.500.000",
            oldPrice: "Rp 7.700.000",
            imgList:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590092.png.pub.png?resize=272%3A204", // Image for list view
            imgDetail:
              "https://www.panasonic.com/content/dam/pim/id/id/RA/RAC-CS/RAC-CS-YN-AKJ-SPP/ast-2590091.png.pub.crop.pc.thumb.640.1200.png", // Image for detail view
            features: [
              "Powerful Mode",
              "iAUTO",
              "Evaporator Blue Fin",
              "Rangka Outdoor Ecotough",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1600 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "290 x 799 x 209 mm",
              "Dimensi Outdoor": "490 x 650 x 230 mm",
              Garansi: "1 Tahun Sparepart, 3 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },
  {
    brand: "Flife",
    imageUrl: "img/flife/logo.png",
    types: [
      {
        name: "Low Watt Series",
        products: [
          {
            name: "Flife AC Split 1/2 PK Low Watt",
            desc: "AC split Flife 1/2 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 3.550.000",
            oldPrice: "Rp 3.600.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_802/zXqFQaOD0O05122024101652.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/wzwYokRoOb11072024101614.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "325 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "292 x 877 x 222 mm",
              "Dimensi Outdoor": "598 x 495 x 265 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 1 PK Low Watt",
            desc: "AC split Flife 1 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 4.000.000",
            oldPrice: "Rp 4.200.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_802/zXqFQaOD0O05122024101652.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/J1nXeI8wY511072024101657.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "720 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "292 x 877 x 222 mm",
              "Dimensi Outdoor": "598 x 495 x 265 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 1.5 PK Low Watt",
            desc: "AC split Flife 1.5 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 4.850.000",
            oldPrice: "Rp 4.950.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_802/zXqFQaOD0O05122024101652.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/zMm74uuAYX11072024101643.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "950 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "292 x 877 x 222 mm",
              "Dimensi Outdoor": "761 x 334 x 470 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
      {
        name: "Standar Series",
        products: [
          {
            name: "Flife AC Split 1/2 PK Standar",
            desc: "AC split standar Fife 1/2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.400.000",
            oldPrice: "Rp 3.500.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_803/SzBnrAnJqc05122024174654.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/XQLlYNXxG811072024101651.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "360 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "704 x 185 x 260 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 3/4 PK Standar",
            desc: "AC split standar Fife 3/4 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.700.000",
            oldPrice: "Rp 3.800.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_803/SzBnrAnJqc05122024174654.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/J1nXeI8wY511072024101657.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 Btu/h",
              "Daya Listrik": "580 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "704 x 185 x 260mm",
              "Dimensi Outdoor": "761 x 334 x 470 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 1 PK Standar",
            desc: "AC split standar Fife 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.900.000",
            oldPrice: "Rp 3.950.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_803/SzBnrAnJqc05122024174654.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/XQLlYNXxG811072024101651.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "725 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "704 x 185 x 260 mm",
              "Dimensi Outdoor": "866 x 352 x 581 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 1.5 PK Standar",
            desc: "AC split standar Fife 1.5 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 5.050.000",
            oldPrice: "Rp 5.100.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_803/SzBnrAnJqc05122024174654.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/J1nXeI8wY511072024101657.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1000 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "845 x 209 x 289 mm",
              "Dimensi Outdoor": "866 x 352 x 581 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Flife AC Split 2 PK Standar",
            desc: "AC split standar Fife 2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 6.700.000",
            oldPrice: "Rp 6.800.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241205/website_flife/website_flife_803/SzBnrAnJqc05122024174654.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20240711/website_flife/website_flife_57/J1nXeI8wY511072024101657.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1500 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "982 x 221 x 311 mm",
              "Dimensi Outdoor": "930 x 400 x 643 mm",
              Garansi: "3 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },
  {
    brand: "Gree",
    imageUrl: "img/gree/gree.png.png",
    types: [
      {
        name: "Inverter Series",
        products: [
          {
            name: "Gree AC Split 1/2 PK Inverter",
            desc: "AC split inverter Gree 1/2 PK dengan teknologi hemat energi.",
            price: "Rp 4.800.000",
            oldPrice: "Rp 4.900.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9180/6sH4xwDn2812122024091455.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10482/WCQRLq1s0U03022025152830.JPEG", // Image for detail view
            features: [
              "Fast Cooling 'Turbo'",
              "Hemat Energi",
              "Pengingat Pintar",
              "Filter DIY",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 (1,760 - 8,018) Btu/h",
              "Daya Listrik": "350 (190 - 630) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "704 x 250 x 196 mm",
              "Dimensi Outdoor": "450 x 710 x 293 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 1 PK Inverter",
            desc: "AC split inverter Gree 1 PK, performa tinggi dan sangat efisien.",
            price: "Rp 5.0500.000",
            oldPrice: "Rp 5.150.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9180/6sH4xwDn2812122024091455.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10482/WCQRLq1s0U03022025152830.JPEG", // Image for detail view
            features: [
              "Fast Cooling 'Turbo'",
              "Hemat Energi",
              "Pengingat Pintar",
              "Filter DIY",
              "I-Feel Technology",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 (1,706 - 10,918) Btu/h",
              "Daya Listrik": "655 (330 - 950) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "779 x 260 x 185 mm",
              "Dimensi Outdoor": "732 x 550 x 330 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 1.5 PK Inverter",
            desc: "AC split inverter Gree 1.5 PK dengan teknologi hemat energi.",
            price: "Rp 6.100.000",
            oldPrice: "Rp 6.200.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9180/6sH4xwDn2812122024091455.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10482/WCQRLq1s0U03022025152830.JPEG", // Image for detail view
            features: [
              "Fast Cooling 'Turbo'",
              "Hemat Energi",
              "Pengingat Pintar",
              "Filter DIY",
            ],
            specs: {
              "Kapasitas Pendingin": "12,100 (1,200 - 14,330) Btu/h",
              "Daya Listrik": "1170 (320 - 1,600) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "293 x 825 x 196 mm",
              "Dimensi Outdoor": "545 x 776 x 320 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 2 PK Inverter",
            desc: "AC split inverter Gree 2 PK dengan teknologi hemat energi.",
            price: "Rp 8.500.000",
            oldPrice: "Rp 8.750.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9180/6sH4xwDn2812122024091455.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10482/WCQRLq1s0U03022025152830.JPEG", // Image for detail view
            features: [
              "Fast Cooling 'Turbo'",
              "Hemat Energi",
              "Pengingat Pintar",
              "Filter DIY",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 (1,500 - 19,963) Btu/h",
              "Daya Listrik": "1500 (300 - 1,750) Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "982 x 311 x 221 mm",
              "Dimensi Outdoor": "732 x 550 x 330 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
      {
        name: "Low Watt Series",
        products: [
          {
            name: "Gree AC Split 1/2 PK Low Watt",
            desc: "AC split Gree 1/2 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 4.100.000",
            oldPrice: "Rp 4.200.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9172/i3ZbtfFYS112122024090856.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10485/GgS3r9uIYi03022025160735.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "325 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 3/4 PK Low Watt",
            desc: "AC split Gree 3/4 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 4.350.000",
            oldPrice: "Rp 5.400.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9172/i3ZbtfFYS112122024090856.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10485/GgS3r9uIYi03022025160735.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 Btu/h",
              "Daya Listrik": "505 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 1 PK Low Watt",
            desc: "AC split Gree 1 PK hemat daya, cocok untuk penghematan listrik.",
            price: "Rp 4.650.000",
            oldPrice: "Rp 4.750.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20241212/website_gree/website_gree_9172/i3ZbtfFYS112122024090856.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10485/GgS3r9uIYi03022025160735.JPEG", // Image for detail view
            features: [
              "Mode Hemat Energi",
              "Pengingat Jadwal",
              "Self-Diagnosis",
              "Filter Kesehatan",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "690 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
      // {
      //   name: "Standar Series",
      //   products: [
      //     {
      //       name: "Gree AC Split 1/2 PK Standar",
      //       desc: "AC split Gree 1/2 PK hemat daya, cocok untuk penghematan listrik.",
      //       price: "Rp 3.750.000",
      //       oldPrice: "Rp 3.900.000",
      //       imgList:
      //         "https://img.greeindonesia.com/website_images/20241129/website_gree/website_gree_9177/5MLdd5n6bC29112024153904.png", // Image for list view
      //       imgDetail:
      //         "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10484/mzDcmEkLOX03022025154946.JPEG", // Image for detail view
      //       features: [
      //         "Mode Hemat Energi",
      //         "Pengingat Jadwal",
      //         "Self-Diagnosis",
      //         "Filter Kesehatan",
      //       ],
      //       specs: {
      //         "Kapasitas Pendingin": "5,000 Btu/h",
      //         "Daya Listrik": "370 Watt",
      //         "Tipe Freon": "R32",
      //         "Dimensi Indoor": "260 x 704 x 185 mm",
      //         "Dimensi Outdoor": "450 x 705 x 270 mm",
      //         Garansi:
      //           "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
      //       },
      //     },
      //     {
      //       name: "Gree AC Split 3/4 PK Standar",
      //       desc: "AC split Gree 3/4 PK hemat daya, cocok untuk penghematan listrik.",
      //       price: "Rp 4.000.000",
      //       oldPrice: "Rp 4.150.000",
      //       imgList:
      //         "https://img.greeindonesia.com/website_images/20241129/website_gree/website_gree_9177/5MLdd5n6bC29112024153904.png", // Image for list view
      //       imgDetail:
      //         "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10484/mzDcmEkLOX03022025154946.JPEG", // Image for detail view
      //       features: [
      //         "Mode Hemat Energi",
      //         "Pengingat Jadwal",
      //         "Self-Diagnosis",
      //         "Filter Kesehatan",
      //       ],
      //       specs: {
      //         "Kapasitas Pendingin": "7,000 Btu/h",
      //         "Daya Listrik": "550 Watt",
      //         "Tipe Freon": "R32",
      //         "Dimensi Indoor": "260 x 704 x 185 mm",
      //         "Dimensi Outdoor": "450 x 705 x 270 mm",
      //         Garansi:
      //           "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
      //       },
      //     },
      //     {
      //       name: "Gree AC Split 1 PK Standar",
      //       desc: "AC split Gree 1 PK hemat daya, cocok untuk penghematan listrik.",
      //       price: "Rp 4.250.000",
      //       oldPrice: "Rp 4.400.000",
      //       imgList:
      //         "https://img.greeindonesia.com/website_images/20241129/website_gree/website_gree_9177/5MLdd5n6bC29112024153904.png", // Image for list view
      //       imgDetail:
      //         "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10484/mzDcmEkLOX03022025154946.JPEG", // Image for detail view
      //       features: [
      //         "Mode Hemat Energi",
      //         "Pengingat Jadwal",
      //         "Self-Diagnosis",
      //         "Filter Kesehatan",
      //       ],
      //       specs: {
      //         "Kapasitas Pendingin": "9,000 Btu/h",
      //         "Daya Listrik": "725 Watt",
      //         "Tipe Freon": "R32",
      //         "Dimensi Indoor": "260 x 704 x 185 mm",
      //         "Dimensi Outdoor": "450 x 705 x 270 mm",
      //         Garansi:
      //           "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
      //       },
      //     },
      //     {
      //       name: "Gree AC Split 1.5 PK Standar",
      //       desc: "AC split Gree 1.5 PK hemat daya, cocok untuk penghematan listrik.",
      //       price: "Rp 5.500.000",
      //       oldPrice: "Rp 5.600.000",
      //       imgList:
      //         "https://img.greeindonesia.com/website_images/20241129/website_gree/website_gree_9177/5MLdd5n6bC29112024153904.png", // Image for list view
      //       imgDetail:
      //         "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10484/mzDcmEkLOX03022025154946.JPEG", // Image for detail view
      //       features: [
      //         "Mode Hemat Energi",
      //         "Pengingat Jadwal",
      //         "Self-Diagnosis",
      //         "Filter Kesehatan",
      //       ],
      //       specs: {
      //         "Kapasitas Pendingin": "12,000 Btu/h",
      //         "Daya Listrik": "1050 Watt",
      //         "Tipe Freon": "R32",
      //         "Dimensi Indoor": "260 x 704 x 185 mm",
      //         "Dimensi Outdoor": "450 x 705 x 270 mm",
      //         Garansi:
      //           "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
      //       },
      //     },
      //     {
      //       name: "Gree AC Split 2 PK Standar",
      //       desc: "AC split Gree 2 PK hemat daya, cocok untuk penghematan listrik.",
      //       price: "Rp 7.300.000",
      //       oldPrice: "Rp 7.500.000",
      //       imgList:
      //         "https://img.greeindonesia.com/website_images/20241129/website_gree/website_gree_9177/5MLdd5n6bC29112024153904.png", // Image for list view
      //       imgDetail:
      //         "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10484/mzDcmEkLOX03022025154946.JPEG", // Image for detail view
      //       features: [
      //         "Mode Hemat Energi",
      //         "Pengingat Jadwal",
      //         "Self-Diagnosis",
      //         "Filter Kesehatan",
      //       ],
      //       specs: {
      //         "Kapasitas Pendingin": "18,000 Btu/h",
      //         "Daya Listrik": "1550 Watt",
      //         "Tipe Freon": "R32",
      //         "Dimensi Indoor": "260 x 704 x 185 mm",
      //         "Dimensi Outdoor": "450 x 705 x 270 mm",
      //         Garansi:
      //           "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
      //       },
      //     },
      //   ],
      // },

      {
        name: " Standar Series",
        products: [
          {
            name: "Gree AC Split 1/2 PK Standar",
            desc: "AC split standar Gree 1/2 PK, pendinginan stabil dan kuat.",
            price: "Rp 3.800.000",
            oldPrice: "Rp 3.900.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20250221/website_gree/website_gree_10578/6d3MsIo49d21022025094036.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10483/pwVnbeQ6c603022025154308.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "380 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 3/4 PK Standar",
            desc: "AC split standar Gree 3/4 PK, pendinginan stabil dan kuat.",
            price: "Rp 4.100.000",
            oldPrice: "Rp 4.300.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20250221/website_gree/website_gree_10578/6d3MsIo49d21022025094036.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10483/pwVnbeQ6c603022025154308.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 Btu/h",
              "Daya Listrik": "590 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 1 PK Standar",
            desc: "AC split standar Gree 1 PK, pendinginan stabil dan kuat.",
            price: "Rp 4.300.000",
            oldPrice: "Rp 4.400.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20250221/website_gree/website_gree_10578/6d3MsIo49d21022025094036.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10483/pwVnbeQ6c603022025154308.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "780 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 1.5 PK Standar",
            desc: "AC split standar Gree 1.5 PK, pendinginan stabil dan kuat.",
            price: "Rp 5.650.000",
            oldPrice: "Rp 5.800.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20250221/website_gree/website_gree_10578/6d3MsIo49d21022025094036.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10483/pwVnbeQ6c603022025154308.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1000 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Gree AC Split 2 PK Standar",
            desc: "AC split standar Gree 2 PK, pendinginan stabil dan kuat.",
            price: "Rp 7.350.000",
            oldPrice: "Rp 7.500.000",
            imgList:
              "https://img.greeindonesia.com/website_images/20250221/website_gree/website_gree_10578/6d3MsIo49d21022025094036.png", // Image for list view
            imgDetail:
              "https://img.greeindonesia.com/website_images/20250203/website_gree/website_gree_10483/pwVnbeQ6c603022025154308.JPEG", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1450 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "260 x 704 x 185 mm",
              "Dimensi Outdoor": "450 x 705 x 270 mm",
              Garansi:
                "1 Tahun Ganti Baru, 5 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },

  {
    brand: "Sansui",
    imageUrl: "img/sansui/logo.png",
    types: [
      {
        name: "Standar Series",
        products: [
          {
            name: "Sansui AC Split 1/2 PK Standar",
            desc: "AC split standar 1/2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.200.000",
            oldPrice: "Rp 3.300.000",
            imgList:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/3-4-2.jpg", // Image for list view
            imgDetail:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/SELLINGPOINT-MIN-2.jpg", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "450 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "698 x 225 x 190 mm",
              "Dimensi Outdoor": "712 x 276 x 459 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Sansui AC Split 1 PK Standar",
            desc: "AC split standar 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.650.000",
            oldPrice: "Rp 3.700.000",
            imgList:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/3-4-2.jpg", // Image for list view
            imgDetail:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/SELLINGPOINT-MIN-2.jpg", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "777 x 250 x 201 mm",
              "Dimensi Outdoor": "712 x 276 x 459 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Sansui AC Split 1.5 PK Standar",
            desc: "AC split standar 1.5 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 4.300.000",
            oldPrice: "Rp 4.400.000",
            imgList:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/3-4-2.jpg", // Image for list view
            imgDetail:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/SELLINGPOINT-MIN-2.jpg", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1030 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "777 x 250 x 201 mm",
              "Dimensi Outdoor": "777 x 294 x 498 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Sansui AC Split 2 PK Standar",
            desc: "AC split standar 2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 6.150.000",
            oldPrice: "Rp 6.250.000",
            imgList:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/3-4-2.jpg", // Image for list view
            imgDetail:
              "https://sansui-indonesia.com/wp-content/uploads/2020/01/SELLINGPOINT-MIN-2.jpg", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1528 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "910 x 294 x 206 mm",
              "Dimensi Outdoor": "853 x 349 x 602 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },
  {
    brand: "Midea",
    imageUrl: "img/Midea/Logo.WEBP",
    types: [
      {
        name: "Standar Series",
        products: [
          {
            name: "Midea AC Split 1 PK Standar",
            desc: "AC split standar  1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.600.000",
            oldPrice: "Rp 3.750.000",
            imgList: "img/Midea/ST.WEBP", // Image for list view
            imgDetail: "img/Midea/Dt.ST.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 1/2 PK Standar",
            desc: "AC split standar 1/2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.200.000",
            oldPrice: "Rp 3.300.000",
            imgList: "img/Midea/ST.WEBP", // Image for list view
            imgDetail: "img/Midea/Dt.ST.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "5,000 Btu/h",
              "Daya Listrik": "330 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 3/4 PK Standar",
            desc: "AC split standar 3/4 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 3.400.000",
            oldPrice: "Rp 3.500.000",
            imgList: "img/Midea/ST.WEBP", // Image for list view
            imgDetail: "img/Midea/Dt.ST.webp", // Image for detail view
            features: [
              "Hyper Grid",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "7,000 Btu/h",
              "Daya Listrik": "530 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 1.5 PK Standar",
            desc: "AC split standar 1.5 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 4.775.000",
            oldPrice: "Rp 4.850.000",
            imgList: "img/Midea/ST.WEBP", // Image for list view
            imgDetail: "img/Midea/Dt.ST.webp", // Image for detail view
            features: [
              "Hyper Grid",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "12,000 Btu/h",
              "Daya Listrik": "1.000 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 2 PK Standar",
            desc: "AC split standar 2 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 6.300.000",
            oldPrice: "Rp 6.450.000",
            imgList: "img/Midea/ST.WEBP", // Image for list view
            imgDetail: "img/Midea/Dt.ST.webp", // Image for detail view
            features: [
              "Hyper Grid",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "18,000 Btu/h",
              "Daya Listrik": "1.500 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
      {
        name: "Inverter Series",
        products: [
          {
            name: "Midea AC Split 1 PK Inverter",
            desc: "AC split standar Fife 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 0",
            oldPrice: "Rp 0",
            imgList: "img/Midea/INV.webp", // Image for list view
            imgDetail:
              "https://web-res.midea.com/content/dam/midea-aem/id/id-new/pdp/air-conditioner/residential/msiaf-05crdn2x/Super-Nyaman-1920x1080.jpg/jcr:content/renditions/Super-Nyaman-1920x1080.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 1 PK Inverter",
            desc: "AC split standar Fife 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 0",
            oldPrice: "Rp 0",
            imgList: "img/Midea/INV.WEBP", // Image for list view
            imgDetail:
              "https://web-res.midea.com/content/dam/midea-aem/id/id-new/pdp/air-conditioner/residential/msiaf-05crdn2x/Super-Nyaman-1920x1080.jpg/jcr:content/renditions/Super-Nyaman-1920x1080.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 1 PK Inverter",
            desc: "AC split standar Fife 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 0",
            oldPrice: "Rp 0",
            imgList: "img/Midea/INV.WEBP", // Image for list view
            imgDetail:
              "https://web-res.midea.com/content/dam/midea-aem/id/id-new/pdp/air-conditioner/residential/msiaf-05crdn2x/Super-Nyaman-1920x1080.jpg/jcr:content/renditions/Super-Nyaman-1920x1080.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
          {
            name: "Midea AC Split 1 PK Inverter",
            desc: "AC split standar Fife 1 PK, pendinginan efektif dan tahan lama.",
            price: "Rp 0",
            oldPrice: "Rp 0",
            imgList: "img/Midea/INV.WEBP", // Image for list view
            imgDetail:
              "https://web-res.midea.com/content/dam/midea-aem/id/id-new/pdp/air-conditioner/residential/msiaf-05crdn2x/Super-Nyaman-1920x1080.jpg/jcr:content/renditions/Super-Nyaman-1920x1080.webp", // Image for detail view
            features: [
              "Frozen Power",
              "Gold Fin & Blue Fin",
              "Smart Cleaner",
              "Mode Turbo",
            ],
            specs: {
              "Kapasitas Pendingin": "9,000 Btu/h",
              "Daya Listrik": "750 Watt",
              "Tipe Freon": "R32",
              "Dimensi Indoor": "250 x 730 x 190 mm",
              "Dimensi Outdoor": "500 x 720 x 240 mm",
              Garansi: "1 Tahun Sparepart, 10 Tahun Kompresor",
            },
          },
        ],
      },
    ],
  },
];

// --- DOM ELEMENTS ---
const mainContent = document.getElementById("main-content");
const contactSection = document.getElementById("contact-section");
const contactLink = document.getElementById("contact-link");
const homeLink = document.getElementById("home-link");
const homeNavLink = document.getElementById("home-nav-link");
const productModal = document.getElementById("product-modal");
const detailModal = document.getElementById("product-detail-modal");

// --- NAVIGATION ---
function showContactPage() {
  mainContent.classList.add("hidden");
  contactSection.classList.remove("hidden");
  closeProductModal();
}

function showHomePage() {
  contactSection.classList.add("hidden");
  mainContent.classList.remove("hidden");
}

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  showContactPage();
});
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  showHomePage();
});
homeNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  showHomePage();
});

// --- BRAND & PRODUCT DISPLAY ---
function populateBrandGrid() {
  const brandGrid = document.getElementById("brand-grid");
  brandGrid.innerHTML = "";
  acData.forEach((brand) => {
    const brandCard = document.createElement("div");
    brandCard.className =
      "brand-card bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center";
    brandCard.onclick = () => showProductModal(brand.brand);
    brandCard.innerHTML = `
                    <img src="${brand.imageUrl}" alt="Logo ${brand.brand}" class="w-full h-48 object-contain rounded-lg mb-4" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Image+Error';">
                    <h3 class="text-2xl font-semibold text-gray-900">${brand.brand}</h3>
                `;
    brandGrid.appendChild(brandCard);
  });
}

function showProductModal(brandName) {
  const brand = acData.find((b) => b.brand === brandName);
  if (!brand) return;

  document.getElementById(
    "modal-brand-title"
  ).textContent = `Produk AC Split ${brand.brand}`;
  const productList = document.getElementById("modal-product-list");
  productList.innerHTML = "";

  const sortedTypes = [...brand.types].sort((a, b) => {
    const order = ["Inverter Series", "Low Watt Series", "Standar Series"];
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  sortedTypes.forEach((type) => {
    const typeSection = document.createElement("div");
    typeSection.className = "mb-8";
    typeSection.innerHTML = `<h4 class="text-2xl font-semibold text-gray-700 mb-4 ml-2 border-b border-gray-300 pb-1">Tipe: ${type.name}</h4>
                                             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"></div>`;
    const productGrid = typeSection.querySelector(".grid");

    const sortedProducts = [...type.products].sort((a, b) => {
      // Check if the match is successful before accessing the elements
      const matchA = a.name.match(/(\d+\.?\d*)\s*PK/);
      const matchB = b.name.match(/(\d+\.?\d*)\s*PK/);

      // Handle cases where there is no match
      const pkA = matchA ? parseFloat(matchA[1]) : 0; // Assign a default value or handle as needed
      const pkB = matchB ? parseFloat(matchB[1]) : 0; // Assign a default value or handle as needed

      return pkA - pkB;
    });

    sortedProducts.forEach((product) => {
      const productCard = document.createElement("div");
      // Make the entire product card clickable
      productCard.className =
        "product-card bg-white rounded-xl shadow-sm overflow-hidden p-4 flex flex-col items-center text-center border border-gray-200";
      productCard.onclick = () =>
        showProductDetailModal(brand.brand, type.name, product.name); // Add click handler to the card
      productCard.innerHTML = `
                        <img src="${product.imgList}" alt="${
        product.name
      }" class="w-full h-32 object-cover rounded-lg mb-3" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Image+Error';">
                        <h5 class="text-lg font-semibold text-gray-900 mb-1">${
                          product.name
                        }</h5>
                        <p class="text-gray-600 text-xs mb-3 line-clamp-2">${
                          product.desc
                        }</p>
                        <div class="flex items-baseline mb-3">
                            <span class="text-2xl font-bold text-blue-700">${
                              product.price
                            }</span>
                            <span class="text-sm text-gray-500 ml-1 line-through">${
                              product.oldPrice || ""
                            }</span>
                        </div>
                        <!-- Removed the separate "Lihat Detail" button as the whole card is clickable -->
                    `;
      productGrid.appendChild(productCard);
    });
    productList.appendChild(typeSection);
  });

  productModal.classList.add("show");
  productModal.classList.remove("hidden");
}

function showProductDetailModal(brandName, typeName, productName) {
  const brand = acData.find((b) => b.brand === brandName);
  const type = brand?.types.find((t) => t.name === typeName);
  const product = type?.products.find((p) => p.name === productName);
  if (!product) return;

  const detailContent = document.getElementById("product-detail-content");
  // Modified structure to ensure image is always at the top and fills its column
  detailContent.innerHTML = `
                <button class="close-button" onclick="closeDetailModal()">&times;</button>
                <div class="flex flex-col md:flex-col items-center"> <!-- Changed to flex-col for consistent stacking -->
                    <div class="w-full mb-6"> <!-- Image always takes full width and has bottom margin -->
                        <img src="${product.imgDetail}" alt="${
    product.name
  }" class="w-full h-auto object-cover rounded-lg shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Error';">
                    </div>
                    <div class="w-full"> <!-- Details section also takes full width -->
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">${
                          product.name
                        }</h3>
                        <p class="text-gray-700 text-lg mb-4">${
                          product.desc
                        }</p>
                        <div class="flex items-baseline mb-4">
                            <span class="text-4xl font-extrabold text-blue-700">${
                              product.price
                            }</span>
                            ${
                              product.oldPrice
                                ? `<span class="text-lg text-gray-500 ml-3 line-through">${product.oldPrice}</span>`
                                : ""
                            }
                        </div>

                        ${
                          product.features && product.features.length > 0
                            ? `
                            <h4 class="text-xl font-semibold text-gray-800 mb-3">Fitur Unggulan:</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-5 pl-4">
                                ${product.features
                                  .map((feature) => `<li>${feature}</li>`)
                                  .join("")}
                            </ul>
                        `
                            : ""
                        }

                        ${
                          product.specs
                            ? `
                            <h4 class="text-xl font-semibold text-gray-800 mb-3">Spesifikasi:</h4>
                            <table class="spec-table text-gray-700 rounded-lg overflow-hidden">
                                <tbody>
                                    ${Object.entries(product.specs)
                                      .map(
                                        ([key, value]) => `
                                        <tr>
                                            <td>${key}</td>
                                            <td>${value}</td>
                                        </tr>
                                    `
                                      )
                                      .join("")}
                                </tbody>
                            </table>
                        `
                            : ""
                        }
                    </div>
                </div>
            `;

  detailModal.classList.add("show");
  detailModal.classList.remove("hidden");
}

function closeProductModal() {
  productModal.classList.remove("show");
  productModal.classList.add("hidden");
}

function closeDetailModal() {
  detailModal.classList.remove("show");
  detailModal.classList.add("hidden");
}

// Event listeners to close modals when clicking outside
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    closeProductModal();
  }
});

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) {
    closeDetailModal();
  }
});

// Initial population of the brand grid when the page loads
document.addEventListener("DOMContentLoaded", populateBrandGrid);
