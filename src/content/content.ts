export type Tone = "forest" | "peach" | "sand" | "navy";
export type ModuleSlot = "tl" | "tr" | "bl" | "br";

export const heroStages = [
  {
    number: "01",
    tag: "Pahami",
    title: "Pahami Cara Kerja",
    copy: "Kami mulai dari pekerjaan dan tantangan yang benar-benar dihadapi tim Anda.",
  },
  {
    number: "02",
    tag: "Design",
    title: "Rancang Solusi",
    copy: "Software dan otomasi dirancang sesuai kebutuhan, bukan sekadar mengikuti tren.",
  },
  {
    number: "03",
    tag: "Connect",
    title: "Hubungkan Proses",
    copy: "Sistem dan data diintegrasikan agar pekerjaan terasa lebih sederhana.",
  },
  {
    number: "04",
    tag: "Grow",
    title: "Dampingi Pertumbuhan",
    copy: "Solusi terus dikembangkan agar tetap berguna dan dapat diandalkan.",
  },
] as const;

export const beforeItems = [
  "Pekerjaan tersebar",
  "Proses berulang",
  "Data belum terhubung",
] as const;

export const afterItems = [
  "Software yang tepat",
  "Proses lebih ringkas",
  "Sistem saling terhubung",
  "Siap melangkah maju",
] as const;

export type Pillar = {
  id: string;
  tone: Tone;
  slot: ModuleSlot;
  name: string;
  short: string;
  title: string;
  audience: string;
  bullets: readonly string[];
  result: string;
  cta: string;
  message: string;
};

export const pillars: readonly Pillar[] = [
  {
    id: "website",
    tone: "forest",
    slot: "tl",
    name: "Website",
    short:
      "Website profil usaha yang cepat, rapi di ponsel, dan mudah ditemukan pelanggan.",
    title: "Website yang membuat usaha Anda meyakinkan.",
    audience:
      "Cocok untuk usaha yang belum punya website, atau website lama yang sulit dipakai dan tampil kurang meyakinkan.",
    bullets: [
      "Desain mengikuti identitas usaha",
      "Nyaman di ponsel dan komputer",
      "Halaman layanan, profil, kontak, dan tombol WhatsApp",
      "Dasar optimasi pencarian",
    ],
    result: "Usaha Anda tampil profesional dan mudah dihubungi pelanggan baru.",
    cta: "Tanyakan paket Website",
    message:
      "Halo Sentraka Digital, saya tertarik dengan layanan Website. Bisa dibantu penjelasannya?",
  },
  {
    id: "personal-store",
    tone: "peach",
    slot: "tr",
    name: "Personal Store",
    short:
      "Toko online dengan nama usaha sendiri, katalog produk, dan pemesanan lewat WhatsApp.",
    title: "Toko online dengan nama usaha sendiri.",
    audience:
      "Cocok untuk penjual yang bergantung pada marketplace atau chat manual dan ingin punya etalase sendiri.",
    bullets: [
      "Katalog dengan foto dan harga",
      "Alur pemesanan sederhana",
      "Pesanan diteruskan ke WhatsApp",
      "Domain dan tampilan sesuai usaha",
    ],
    result:
      "Pelanggan bisa memesan dengan mudah, dan Anda punya etalase yang sepenuhnya milik sendiri.",
    cta: "Tanyakan paket Store",
    message:
      "Halo Sentraka Digital, saya tertarik dengan layanan Personal Store. Bisa dibantu penjelasannya?",
  },
  {
    id: "it-solution",
    tone: "sand",
    slot: "bl",
    name: "IT Solution",
    short:
      "Aplikasi, otomasi proses, dan integrasi sistem sesuai cara kerja usaha Anda.",
    title: "Proses berulang dibuat lebih ringan.",
    audience:
      "Cocok untuk usaha yang masih mencatat manual, memakai banyak aplikasi terpisah, atau punya proses yang menyita waktu.",
    bullets: [
      "Pemetaan proses kerja",
      "Aplikasi kasir, catatan, dashboard",
      "Otomasi laporan dan pengingat",
      "Integrasi antar-aplikasi",
    ],
    result:
      "Pekerjaan berulang berkurang, data lebih rapi, dan keputusan lebih mudah diambil.",
    cta: "Tanyakan solusi IT",
    message:
      "Halo Sentraka Digital, saya tertarik dengan layanan IT Solution. Bisa dibantu penjelasannya?",
  },
  {
    id: "server-management",
    tone: "navy",
    slot: "br",
    name: "Server Management",
    short:
      "Server dikelola rutin: pemantauan, pembaruan, cadangan data, dan keamanan.",
    title: "Layanan Anda tetap menyala dan aman.",
    audience:
      "Cocok untuk usaha yang sudah punya website atau aplikasi dan butuh pihak yang menjaganya stabil.",
    bullets: [
      "Pemantauan ketersediaan",
      "Pembaruan dan keamanan berkala",
      "Cadangan dan pemulihan data",
      "Domain, sertifikat, dan email",
    ],
    result:
      "Layanan digital Anda tetap menyala, aman, dan tidak perlu Anda urus sendiri.",
    cta: "Tanyakan layanan server",
    message:
      "Halo Sentraka Digital, saya tertarik dengan layanan Server Management. Bisa dibantu penjelasannya?",
  },
];

export const steps = [
  {
    title: "Ngobrol dan audit singkat",
    copy: "Kami mendengarkan kebutuhan Anda dan memeriksa kondisi digital usaha saat ini, seperti website, akun, dan alur kerja. Tahap ini tanpa biaya.",
    receive: "gambaran masalah dan peluang",
  },
  {
    title: "Rencana dan penawaran",
    copy: "Hasil audit diubah menjadi rencana: apa yang dikerjakan, urutannya, jadwal, dan biaya. Semua tertulis dan boleh Anda tanyakan sebelum setuju.",
    receive: "dokumen penawaran tertulis",
  },
  {
    title: "Pembangunan bertahap",
    copy: "Pekerjaan dilakukan per tahap dan diperlihatkan secara berkala, jadi Anda bisa memberi masukan sebelum terlalu jauh.",
    receive: "pratinjau hasil di setiap tahap",
  },
  {
    title: "Uji dan serah terima",
    copy: "Solusi diuji bersama Anda, diperbaiki bila ada yang kurang, lalu diserahkan lengkap dengan akses dan panduan pemakaian.",
    receive: "solusi siap pakai dan panduan",
  },
  {
    title: "Pendampingan",
    copy: "Setelah berjalan, kami tetap tersedia untuk pertanyaan, perbaikan, dan pengembangan lanjutan sesuai kesepakatan.",
    receive: "dukungan sesuai paket",
  },
] as const;

export const faqGroups = [
  {
    name: "Umum",
    items: [
      {
        q: "Apa itu Sentraka Digital?",
        a: "Mitra teknologi untuk UMKM dan bisnis yang sedang tumbuh. Kami membantu membangun website, toko online pribadi, solusi IT, dan pengelolaan server.",
      },
      {
        q: "Siapa yang cocok memakai layanan Sentraka?",
        a: "Pemilik usaha kecil dan menengah yang ingin lebih siap secara digital tetapi belum punya tim teknis. Jika usaha Anda berjalan dan pekerjaan digitalnya belum rapi, Anda sudah cocok.",
      },
      {
        q: "Apakah saya harus paham teknologi?",
        a: "Tidak. Kami menjelaskan dengan bahasa sehari-hari dan hanya meminta keputusan yang memang perlu dari Anda.",
      },
      {
        q: "Apakah hanya melayani satu jenis usaha?",
        a: "Tidak dibatasi pada satu jenis usaha. Yang kami lihat adalah kebutuhan dan proses kerjanya. Jika kebutuhan Anda di luar yang bisa kami kerjakan dengan baik, kami sampaikan terus terang.",
      },
    ],
  },
  {
    name: "Layanan dan lingkup",
    items: [
      {
        q: "Apa saja layanan yang tersedia?",
        a: "Empat pilar: Website, Personal Store, IT Solution, dan Server Management. Anda boleh memulai dari satu layanan lalu menambah sesuai kebutuhan.",
      },
      {
        q: "Apa bedanya Website dan Personal Store?",
        a: "Website menampilkan profil dan layanan usaha agar pelanggan mengenal dan menghubungi Anda. Personal Store menambahkan katalog produk dan alur pemesanan sehingga pelanggan bisa memesan langsung.",
      },
      {
        q: "Apakah bisa dibuatkan aplikasi sesuai kebutuhan khusus?",
        a: "Bisa melalui IT Solution. Kami mulai dengan memetakan proses Anda, lalu menentukan apakah aplikasi baru, otomasi, atau integrasi yang paling masuk akal.",
      },
      {
        q: "Bisakah saya memakai website atau server yang sudah ada?",
        a: "Bisa. Kami memeriksa kondisinya lebih dulu, lalu menyarankan apakah cukup dibenahi, dikelola, atau perlu dibangun ulang.",
      },
      {
        q: "Apakah desain mengikuti identitas usaha saya?",
        a: "Ya. Jika Anda sudah punya logo dan warna, kami pakai. Jika belum, kami bantu menyesuaikan tampilan yang rapi dan konsisten dengan karakter usaha Anda.",
      },
    ],
  },
  {
    name: "Biaya dan pembayaran",
    items: [
      {
        q: "Berapa biayanya?",
        a: "Biaya bergantung pada layanan dan lingkup pekerjaan. Setelah audit singkat, Anda menerima penawaran tertulis yang merinci biaya sebelum ada yang dikerjakan.",
      },
      {
        q: "Apakah audit awal benar-benar gratis?",
        a: "Ya. Percakapan awal dan audit singkat tidak dikenakan biaya dan tidak mengikat Anda untuk memakai layanan kami.",
      },
      {
        q: "Bagaimana skema pembayarannya?",
        a: "Skema pembayaran, misalnya bertahap sesuai progres, dituliskan dalam penawaran dan disepakati bersama.",
      },
      {
        q: "Apakah ada biaya berulang?",
        a: "Beberapa kebutuhan memang berulang, seperti domain, hosting, atau pengelolaan server. Kami mencantumkannya terpisah dan jelas di penawaran agar tidak ada biaya mengejutkan.",
      },
    ],
  },
  {
    name: "Proses dan waktu",
    items: [
      {
        q: "Berapa lama pengerjaannya?",
        a: "Tergantung jenis dan besar pekerjaan. Estimasi waktu kami tuliskan di penawaran dan diperbarui bila ada perubahan kebutuhan.",
      },
      {
        q: "Apa yang perlu saya siapkan?",
        a: "Cukup cerita tentang usaha Anda, serta bahan yang sudah ada seperti logo, foto produk, daftar layanan atau harga, dan akses ke akun atau domain yang relevan. Kekurangan bahan bisa kita lengkapi bersama.",
      },
      {
        q: "Bagaimana jika saya ingin mengubah sesuatu di tengah jalan?",
        a: "Masukan di setiap tahap sangat diharapkan. Perubahan kecil dalam lingkup kami akomodasi; perubahan besar kami diskusikan dulu dampaknya pada jadwal dan biaya.",
      },
      {
        q: "Bagaimana cara berkomunikasi selama proyek?",
        a: "Melalui WhatsApp atau saluran yang Anda pilih, dengan pembaruan berkala dan pratinjau hasil di setiap tahap.",
      },
    ],
  },
  {
    name: "Keamanan dan data",
    items: [
      {
        q: "Siapa pemilik website, domain, dan data usaha saya?",
        a: "Anda. Domain, akun, dan data usaha sebaiknya terdaftar atas nama Anda. Kami bekerja sebagai pengelola dan menyerahkan akses sesuai kesepakatan.",
      },
      {
        q: "Bagaimana keamanan data pelanggan saya dijaga?",
        a: "Kami menerapkan praktik keamanan dasar seperti sertifikat keamanan, pembaruan berkala, kontrol akses, dan cadangan data. Detail untuk kebutuhan Anda dijelaskan di penawaran.",
      },
      {
        q: "Apa yang terjadi jika terjadi gangguan?",
        a: "Untuk layanan yang kami kelola, kami memantau dan memulihkan dari cadangan sesuai tingkat layanan yang disepakati.",
      },
    ],
  },
  {
    name: "Setelah proyek selesai",
    items: [
      {
        q: "Apakah ada dukungan setelah serah terima?",
        a: "Ada. Lingkup dukungan, seperti perbaikan, pembaruan, dan pengelolaan rutin, disepakati sejak penawaran.",
      },
      {
        q: "Bisakah saya mengelola sendiri setelah selesai?",
        a: "Bisa. Kami menyerahkan akses dan panduan singkat supaya Anda atau tim Anda dapat mengurus hal-hal rutin sendiri.",
      },
      {
        q: "Bagaimana jika saya ingin menambah layanan nanti?",
        a: "Silakan. Banyak klien mulai dari satu layanan, misalnya Website, lalu menambah Personal Store atau IT Solution saat usahanya berkembang.",
      },
      {
        q: "Bagaimana cara memulai?",
        a: "Hubungi kami lewat WhatsApp atau email. Kita mulai dengan percakapan dan audit singkat tanpa biaya.",
      },
    ],
  },
] as const;
