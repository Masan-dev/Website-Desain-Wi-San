/* WI-San — products.js
   DATA PRODUK. Untuk menambah produk, salin satu baris {...} lalu ubah isinya.

   id       : kode unik (huruf kecil, tanpa spasi)
   tier     : standar | pro | promax | ultimate   (menentukan tab filter)
   name     : nama produk
   mbps     : kecepatan dalam angka (1000 = 1 Gbps)
   price    : harga per bulan (angka saja)
   img      : kunci gambar di images.js (p1 sampai p7)
   badge    : label kecil di foto ('' jika tidak ada)
   featured : true = tampil di halaman depan (disarankan 5 produk)
   desc     : deskripsi singkat
   feat     : daftar keunggulan di pop-up pesanan
*/
const TIERS = { standar: 'Standar', pro: 'Pro', promax: 'Pro Max', ultimate: 'Ultimate' };

const PRODUCTS = [
  /* ---------- STANDAR ---------- */
  { id: 'basic', tier: 'standar', name: 'WI-SAN BASIC', mbps: 10, price: 89000, img: 'p3', badge: 'Termurah', featured: false,
    desc: 'Paket paling hemat untuk chat, media sosial, dan browsing ringan.',
    feat: ['Kecepatan hingga 10 Mbps', 'Hingga 3 perangkat aktif', 'Instalasi gratis'] },
  { id: 'lite', tier: 'standar', name: 'WI-SAN LITE', mbps: 20, price: 120000, img: 'p3', badge: '', featured: true,
    desc: 'Paket hemat untuk browsing, belajar online, dan media sosial sehari-hari.',
    feat: ['Kecepatan hingga 20 Mbps', 'Hingga 5 perangkat aktif', 'Instalasi cepat'] },
  { id: 'student', tier: 'standar', name: 'WI-SAN STUDENT', mbps: 30, price: 140000, img: 'p4', badge: 'Pelajar', featured: false,
    desc: 'Dibuat untuk pelajar dan mahasiswa: kuliah online, tugas, dan video belajar.',
    feat: ['Kecepatan hingga 30 Mbps', 'Hingga 6 perangkat aktif', 'Stabil di jam belajar malam'] },
  { id: 'home', tier: 'standar', name: 'WI-SAN HOME', mbps: 50, price: 180000, img: 'p4', badge: '', featured: true,
    desc: 'Untuk keluarga dengan beberapa perangkat: streaming, sekolah, dan bekerja dari rumah.',
    feat: ['Kecepatan hingga 50 Mbps', 'Hingga 12 perangkat aktif', 'Filter keamanan dasar'] },

  /* ---------- PRO ---------- */
  { id: 'pro', tier: 'pro', name: 'WI-SAN PRO', mbps: 100, price: 250000, img: 'p1', badge: 'Terlaris', featured: true,
    desc: 'WI-San Pro menyediakan internet super kencang dengan teknologi WI-San 7.0.',
    feat: ['Kecepatan hingga 100 Mbps', 'Hingga 20 perangkat aktif', 'Pemantauan stabilitas 24 jam'] },
  { id: 'progamer', tier: 'pro', name: 'WI-SAN PRO GAMER', mbps: 100, price: 275000, img: 'p1', badge: 'Ping Rendah', featured: false,
    desc: 'Jalur khusus game online dengan ping rendah dan jitter minimal.',
    feat: ['Kecepatan hingga 100 Mbps', 'Ping rata-rata di bawah 12 ms', 'Prioritas trafik game'] },
  { id: 'prowork', tier: 'pro', name: 'WI-SAN PRO WORK', mbps: 150, price: 310000, img: 'p2', badge: 'WFH', featured: false,
    desc: 'Untuk kerja dari rumah: video meeting, upload file besar, dan VPN kantor.',
    feat: ['Kecepatan hingga 150 Mbps', 'Upload simetris', 'Dukungan teknis prioritas'] },

  /* ---------- PRO MAX ---------- */
  { id: 'promax', tier: 'promax', name: 'WI-SAN PRO MAX', mbps: 200, price: 350000, img: 'p2', badge: '', featured: true,
    desc: 'WI-San Pro Max hadir dengan dual-band dan antena ganda untuk rumah dan kerja berat.',
    feat: ['Kecepatan hingga 200 Mbps', 'Hingga 40 perangkat aktif', 'Router dual-band antena ganda'] },
  { id: 'promaxcreator', tier: 'promax', name: 'WI-SAN PRO MAX CREATOR', mbps: 250, price: 420000, img: 'p5', badge: 'Kreator', featured: false,
    desc: 'Untuk content creator: live streaming 4K dan upload video tanpa antre.',
    feat: ['Kecepatan hingga 250 Mbps', 'Upload hingga 100 Mbps', 'Stabil untuk live streaming 4K'] },
  { id: 'biz', tier: 'promax', name: 'WI-SAN BUSINESS', mbps: 300, price: 550000, img: 'p5', badge: 'Usaha', featured: true,
    desc: 'Koneksi stabil untuk kantor kecil, toko, dan operasional bisnis.',
    feat: ['Kecepatan hingga 300 Mbps', 'IP prioritas & dukungan bisnis', 'Laporan jaringan bulanan'] },

  /* ---------- ULTIMATE ---------- */
  { id: 'ultimate', tier: 'ultimate', name: 'WI-SAN ULTIMATE', mbps: 500, price: 750000, img: 'p6', badge: 'Baru', featured: false,
    desc: 'Kecepatan tertinggi dengan Wi-Fi 7 untuk rumah pintar dan banyak pengguna.',
    feat: ['Kecepatan hingga 500 Mbps', 'Router Wi-Fi 7', 'Hingga 80 perangkat aktif'] },
  { id: 'ultimatestream', tier: 'ultimate', name: 'WI-SAN ULTIMATE STREAM', mbps: 750, price: 950000, img: 'p6', badge: 'Premium', featured: false,
    desc: 'Streaming 8K, game cloud, dan banyak layar sekaligus tanpa buffering.',
    feat: ['Kecepatan hingga 750 Mbps', 'Mesh Wi-Fi 7 dua titik', 'Teknisi prioritas 24 jam'] },
  { id: 'ultimategiga', tier: 'ultimate', name: 'WI-SAN ULTIMATE GIGA', mbps: 1000, price: 1500000, img: 'p7', badge: '1 Gbps', featured: false,
    desc: 'Kelas Gigabit penuh untuk perusahaan, studio, dan pengguna yang tidak mau kompromi.',
    feat: ['Kecepatan hingga 1 Gbps', 'IP statis & SLA 99,9%', 'Pemantauan khusus 24/7'] }
];
