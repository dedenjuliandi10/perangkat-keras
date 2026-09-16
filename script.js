/**
 * SCRIPT.JS - MEDIA PEMBELAJARAN INTERAKTIF: PERANGKAT KERAS KOMPUTER
 * Informatika SMP/MTs (Kelas VII - VIII)
 * Fitur: Single Page Application, 17+ Hardware Catalog, 4 Aktivitas Game, Kuis 10 Soal, Progres Belajar
 */

// ==========================================================================
// 1. DATA MASTER HARDWARE (17+ PERANGKAT LENGKAP & METADATA EDUKATIF)
// ==========================================================================
const HARDWARE_DATA = [
  {
    id: "keyboard",
    name: "Keyboard (Papan Ketik)",
    category: "input",
    categoryLabel: "Perangkat Input",
    icon: "⌨️",
    summary: "Memasukkan teks, angka, simbol, dan perintah pintasan ke komputer.",
    function: "Mengubah tekanan tombol mekanis menjadi sinyal biner karakter huruf, angka, dan instruksi kontrol (seperti Enter, Ctrl, Space) yang diproses sistem.",
    example: "Mengetik tugas makalah, mengerjakan ulangan online, atau mengetik perintah kode program di lab komputer.",
    funFact: "Susunan huruf QWERTY yang kita pakai hari ini awalnya dirancang pada tahun 1873 untuk mesin tik agar tuas huruf tidak mudah macet!",
    tips: "Gunakan 10 jari saat mengetik agar lebih cepat dan jaga kebersihan keyboard dari remah makanan atau debu."
  },
  {
    id: "mouse",
    name: "Mouse (Tetikus)",
    category: "input",
    categoryLabel: "Perangkat Input",
    icon: "🖱️",
    summary: "Menggerakkan kursor (pointer) dan memilih menu atau objek di layar.",
    function: "Mendeteksi pergerakan sensor optik pada permukaan meja untuk mengontrol posisi kursor pada layar, serta menyediakan tombol klik kiri, klik kanan, dan roda scroll.",
    example: "Membuka aplikasi dengan double-click, memilih teks, dan menggambar diagram di komputer.",
    funFact: "Mouse pertama kali diciptakan oleh Douglas Engelbart pada tahun 1964 dan terbuat dari balok kayu kecil dengan roda logam di dalamnya!",
    tips: "Gunakan mouse pad agar pergerakan kursor lancar dan posisikan pergelangan tangan senyaman mungkin."
  },
  {
    id: "microphone",
    name: "Microphone (Mikrofon)",
    category: "input",
    categoryLabel: "Perangkat Input",
    icon: "🎤",
    summary: "Menangkap gelombang suara pengguna dan mengubahnya menjadi audio digital.",
    function: "Mengubah getaran gelombang suara udara menjadi sinyal listrik audio yang kemudian diolah komputer menjadi berkas rekaman atau siaran komunikasi suara.",
    example: "Berbicara saat rapat zoom kelas online, merekam tugas presentasi suara, atau memberi perintah suara ke AI.",
    funFact: "Mikrofon modern di laptop sangat kecil (seukuran biji beras) dan sering dilengkapi teknologi peredam bising (noise cancelling)!",
    tips: "Bicaralah dengan jarak sekitar 10-15 cm dari mikrofon agar suaramu terdengar jernih dan tidak berdengung."
  },
  {
    id: "webcam",
    name: "Webcam (Kamera Web)",
    category: "input",
    categoryLabel: "Perangkat Input",
    icon: "📷",
    summary: "Menangkap rekaman gambar dan video pengguna secara langsung (real-time).",
    function: "Menggunakan sensor optik kamera digital untuk mengambil bingkai gambar bergerak dan mengirimkannya langsung ke memori komputer untuk transmisi video.",
    example: "Mengikuti tatap muka virtual di kelas daring, membuat video pembelajaran, atau pengenalan wajah saat login.",
    funFact: "Webcam pertama di dunia diciptakan di Universitas Cambridge pada tahun 1991 hanya untuk memantau apakah teko kopi di ruangan lab sudah terisi atau kosong!",
    tips: "Pastikan ruangan memiliki pencahayaan yang cukup di depan wajah agar gambar video terlihat terang dan jelas."
  },
  {
    id: "scanner",
    name: "Scanner (Pemindai)",
    category: "input",
    categoryLabel: "Perangkat Input",
    icon: "🖊️",
    summary: "Memindai lembaran dokumen fisik kertas menjadi format file gambar digital.",
    function: "Menyinari dokumen fisik dan merekam pantulan cahayanya menggunakan sensor CCD/CIS untuk dikonversi menjadi berkas PDF atau gambar JPEG di komputer.",
    example: "Memindai piagam penghargaan siswa, fotokopi kartu identitas, atau gambar lukisan tangan untuk diunggah.",
    funFact: "Scanner dapat mengenali teks tulisan pada kertas fisik dan mengubahnya menjadi teks yang bisa diedit menggunakan teknologi OCR (Optical Character Recognition)!",
    tips: "Pastikan kaca pemindai selalu bersih dari noda sidik jari agar hasil pindaian tajam dan bebas bercak."
  },
  {
    id: "cpu",
    name: "CPU (Processor)",
    category: "process",
    categoryLabel: "Perangkat Proses",
    icon: "🧠",
    summary: "Otak utama komputer yang mengolah seluruh perhitungan dan perintah program.",
    function: "Menjalankan siklus Fetch-Decode-Execute: mengambil instruksi dari memori, menerjemahkannya, dan mengeksekusi perhitungan matematika serta logika (ALU).",
    example: "Membuka aplikasi, menjalankan sistem operasi Windows, dan mengkoordinasi kerja seluruh komponen perangkat keras.",
    funFact: "Satu keping CPU modern berukuran sebesar koin logam dapat memuat miliaran transistor mikroskopis yang bekerja miliaran kali dalam satu detik!",
    tips: "CPU menghasilkan panas saat bekerja cepat, sehingga membutuhkan pendingin (heatsink dan kipas) serta thermal paste yang baik."
  },
  {
    id: "ram",
    name: "RAM (Random Access Memory)",
    category: "process",
    categoryLabel: "Perangkat Proses",
    icon: "⚡",
    summary: "Tempat penyimpanan data sementara saat aplikasi sedang dijalankan.",
    function: "Menyediakan ruang memori berkecepatan ultra tinggi bagi CPU untuk membaca dan menulis data instruksi aplikasi yang aktif. Bersifat volatile (data hilang saat listrik mati).",
    example: "Memungkinkan komputer membuka browser dengan banyak tab sekaligus sambil memutar musik tanpa macet (multitasking).",
    funFact: "Kecepatan transfer data RAM mencapai puluhan gigabyte per detik, jauh lebih cepat daripada hard disk konvensional!",
    tips: "Kapasitas RAM minimal yang direkomendasikan untuk komputer belajar siswa saat ini adalah 8 GB agar multitasking tetap lancar."
  },
  {
    id: "gpu",
    name: "GPU / Kartu Grafis (VGA)",
    category: "process",
    categoryLabel: "Perangkat Proses",
    icon: "🎮",
    summary: "Pengolah visual khusus untuk render grafis, video resolusi tinggi, dan 3D.",
    function: "Memiliki ribuan inti pemrosesan paralel (cores) yang dirancang khusus untuk memproses jutaan piksel warna, matriks geometri, dan animasi gambar sekaligus.",
    example: "Menjalankan game edukasi 3D, editing video animasi tugas sekolah, dan memutar video resolusi 4K dengan lancar.",
    funFact: "Selain untuk grafis dan game, chip GPU saat ini sangat banyak digunakan oleh ilmuwan untuk melatih kecerdasan buatan (Artificial Intelligence)!",
    tips: "Selalu perbarui driver kartu grafis agar performa tampilan visual dan kestabilan aplikasi selalu maksimal."
  },
  {
    id: "motherboard",
    name: "Motherboard (Papan Induk)",
    category: "process",
    categoryLabel: "Perangkat Proses",
    icon: "🖲️",
    summary: "Papan sirkuit utama tempat semua komponen komputer terhubung satu sama lain.",
    function: "Menyediakan soket CPU, slot RAM, slot PCIe untuk VGA, port penyimpanan SATA/NVMe, serta jalur sirkuit bus penghantar arus listrik dan komunikasi data antar-perangkat.",
    example: "Menghubungkan CPU dengan RAM, kartu grafis, hard disk, port USB, dan tombol power casing komputer.",
    funFact: "Jalur tembaga tipis yang tampak seperti labirin di atas motherboard disebut 'Traces', berfungsi layaknya kabel listrik mikroskopis!",
    tips: "Hindari menyentuh sirkuit motherboard saat komputer menyala dan pastikan tidak terkena cairan atau debu tebal."
  },
  {
    id: "monitor",
    name: "Monitor (Layar Tampilan)",
    category: "output",
    categoryLabel: "Perangkat Output",
    icon: "🖥️",
    summary: "Menampilkan antarmuka visual, teks hasil ketikan, gambar, dan video.",
    function: "Menerima sinyal video digital (lewat kabel HDMI atau DisplayPort) dari GPU dan mengubahnya menjadi visualisasi jutaan piksel cahaya warna RGB.",
    example: "Membaca teks materi pelajaran, melihat hasil ketikan tugas di Word, dan menyaksikan video animasi edukasi.",
    funFact: "Monitor tabung zaman dulu (CRT) sangat tebal dan berat, sedangkan monitor sekarang (LED/IPS) sangat tipis dan hemat energi!",
    tips: "Atur jarak mata dengan layar monitor sekitar 50-60 cm dan gunakan mode Eye Care (pengurang cahaya biru) agar mata tidak cepat lelah."
  },
  {
    id: "printer",
    name: "Printer (Pencetak Dokumen)",
    category: "output",
    categoryLabel: "Perangkat Output",
    icon: "🖨️",
    summary: "Mencetak dokumen digital, tabel, dan gambar ke media kertas fisik (hardcopy).",
    function: "Menerjemahkan data halaman cetak dan menyemprotkan titik-titik tinta mikroskopis (inkjet) atau serbuk toner bermuatan listrik (laser) ke atas lembaran kertas.",
    example: "Mencetak lembar tugas rangkuman Informatika, mencetak foto kegiatan sekolah, atau mencetak sertifikat lomba.",
    funFact: "Ada printer modern berjenis 3D Printer yang tidak mencetak di atas kertas, melainkan mencetak benda padat tiga dimensi lapis demi lapis!",
    tips: "Gunakan printer secara berkala agar lubang pipa tinta (print head) tidak mengering dan macet."
  },
  {
    id: "speaker",
    name: "Speaker (Pengeras Suara)",
    category: "output",
    categoryLabel: "Perangkat Output",
    icon: "🔊",
    summary: "Mengeluarkan gelombang suara audio hasil pengolahan komputer ke udara terbuka.",
    function: "Mengubah sinyal audio digital dari kartu suara (sound card) menjadi sinyal arus listrik yang menggetarkan membran kerucut speaker hingga menghasilkan gelombang suara.",
    example: "Mendengarkan rekaman suara guru di kelas, mendengarkan efek suara game edukasi, dan menonton video bersama.",
    funFact: "Semakin besar magnet dan membran speaker, semakin dalam gelombang suara frekuensi rendah (bass) yang dapat dihasilkannya!",
    tips: "Atur volume pada tingkat yang sedang (di bawah 70%) agar suara tetap jernih dan pendengaran tetap terlindungi."
  },
  {
    id: "projector",
    name: "Projector (Proyektor InFocus)",
    category: "output",
    categoryLabel: "Perangkat Output",
    icon: "📽️",
    summary: "Memproyeksikan visual layar monitor ke layar kain atau tembok ruangan besar.",
    function: "Menggunakan lampu berintensitas tinggi dan lensa pembesar untuk memancarkan gambar komputer dalam skala ukuran besar agar dapat disaksikan puluhan siswa sekaligus.",
    example: "Guru memaparkan presentasi slide materi di depan kelas atau menonton film dokumenter sains bersama di aula.",
    funFact: "Lampu proyektor dapat mencapai suhu hingga ratusan derajat Celsius saat menyala, sehingga memerlukan kipas pendingin internal yang kuat!",
    tips: "Jangan langsung mencabut kabel daya proyektor setelah selesai digunakan; biarkan kipas pendingin mendinginkan lampu terlebih dahulu."
  },
  {
    id: "hdd",
    name: "Hard Disk Drive (HDD)",
    category: "storage",
    categoryLabel: "Perangkat Penyimpanan",
    icon: "🖴",
    summary: "Menyimpan data berkas dalam kapasitas besar menggunakan piringan magnetik.",
    function: "Menyimpan data digital pada piringan logam magnetik (platter) yang berputar ribuan putaran per menit (RPM) dengan jarum pembaca/penulis (read/write head).",
    example: "Menyimpan koleksi arsip berkas tugas sekolah, kumpulan video materi, dan cadangan sistem operasi.",
    funFact: "Jarum pembaca hard disk melayang di atas piringan hanya dengan jarak sepermiliar meter (lebih tipis dari sehelai rambut manusia)!",
    tips: "Hindari mengguncang atau menjatuhkan laptop/komputer saat menyala karena dapat merusak permukaan piringan magnetik hard disk."
  },
  {
    id: "ssd",
    name: "Solid State Drive (SSD)",
    category: "storage",
    categoryLabel: "Perangkat Penyimpanan",
    icon: "⚡",
    summary: "Penyimpanan modern berkecepatan sangat tinggi tanpa komponen mekanis yang bergerak.",
    function: "Menyimpan data digital pada chip memori flash semikonduktor (NAND Flash) secara elektrik permanen. Menawarkan kecepatan baca-tulis hingga 10-30 kali lipat dibanding HDD.",
    example: "Menjadi media instalasi Windows agar booting laptop selesai hanya dalam 5-10 detik dan aplikasi terbuka seketika.",
    funFact: "Karena tidak memiliki komponen mekanis berputar, SSD tidak mengeluarkan suara sama sekali, jauh lebih dingin, dan tahan guncangan!",
    tips: "Jangan pernah melakukan 'defragment' pada SSD karena dapat mengurangi usia pakai chip memori flash di dalamnya."
  },
  {
    id: "flashdisk",
    name: "Flashdisk (USB Flash Drive)",
    category: "storage",
    categoryLabel: "Perangkat Penyimpanan",
    icon: "🔌",
    summary: "Media penyimpanan portabel yang praktis dibawa bepergian dan dicolok ke port USB.",
    function: "Menggunakan chip memori flash dalam wadah kecil berantarmuka port USB universal untuk mempermudah transfer dan perpindahan file antar komputer.",
    example: "Membawa file presentasi dari rumah untuk ditampilkan di komputer laboratorium sekolah.",
    funFact: "Dulu, orang menggunakan disket floppy yang hanya berkapasitas 1,44 MB (hanya muat 1 foto), sedangkan flashdisk saat ini bisa mencapai ratusan Gigabyte!",
    tips: "Selalu lakukan 'Eject' atau 'Safely Remove' sebelum mencabut flashdisk dari komputer agar berkas tugas tidak rusak (corrupt)."
  },
  {
    id: "router",
    name: "Router (Perute Jaringan)",
    category: "network",
    categoryLabel: "Perangkat Komunikasi & Jaringan",
    icon: "📡",
    summary: "Mengatur rute data dan menghubungkan beberapa perangkat komputer ke jaringan internet.",
    function: "Menganalisis alamat IP tujuan dari setiap paket data dan menentukan jalur tercepat untuk meneruskan data tersebut antar jaringan yang berbeda (misalnya dari LAN ke WAN).",
    example: "Menyediakan koneksi Wi-Fi di rumah atau sekolah sehingga laptop siswa dan smartphone guru bisa browsing internet bersamaan.",
    funFact: "Sebuah router modern memiliki CPU dan memori RAM sendiri khusus untuk memproses lalu lintas jutaan paket data per menit!",
    tips: "Letakkan router di tempat yang tinggi dan terbuka di tengah ruangan agar jangkauan sinyal Wi-Fi merata ke seluruh kelas."
  },
  {
    id: "modem",
    name: "Modem (Modulator Demodulator)",
    category: "network",
    categoryLabel: "Perangkat Komunikasi & Jaringan",
    icon: "📶",
    summary: "Mengubah sinyal analog dari penyedia internet (ISP) menjadi sinyal digital komputer.",
    function: "Melakukan proses modulasi (menumpangkan data digital ke gelombang analog) dan demodulasi (memisahkan data digital dari sinyal analog fiber optik atau kabel telepon).",
    example: "Menjadi gerbang utama masuknya kabel fiber optik internet IndiHome/Biznet ke dalam gedung sekolah.",
    funFact: "Nama 'Modem' merupakan singkatan dari dua fungsi utamanya: **Mo**dulator dan **Dem**odulator!",
    tips: "Jika koneksi internet tiba-tiba terputus, mematikan modem selama 30 detik lalu menyalakannya kembali sering kali menyelesaikan masalah."
  },
  {
    id: "switch",
    name: "Switch Hub (Sakelar Jaringan)",
    category: "network",
    categoryLabel: "Perangkat Komunikasi & Jaringan",
    icon: "🔀",
    summary: "Menghubungkan puluhan komputer dalam satu jaringan kabel lokal (LAN) di lab sekolah.",
    function: "Membaca alamat fisik MAC address setiap komputer dan meneruskan paket data hanya ke port perangkat tujuan secara langsung tanpa tabrakan data (collision).",
    example: "Menghubungkan 30 unit komputer PC siswa di laboratorium Informatika dengan komputer server guru menggunakan kabel UTP.",
    funFact: "Berbeda dengan Hub zaman dulu yang mengirim data ke semua komputer sekaligus, Switch sangat pintar karena hanya mengirim data ke komputer yang dituju!",
    tips: "Pastikan konektor kabel LAN (RJ-45) terpasang rapat hingga berbunyi 'klik' pada port switch."
  },
  {
    id: "headset",
    name: "Headset / Earphone",
    category: "output",
    categoryLabel: "Perangkat Output",
    icon: "🎧",
    summary: "Menghasilkan suara pribadi langsung ke telinga pengguna dengan isolasi suara.",
    function: "Mengubah data audio menjadi suara menggunakan sepasang transduser miniatur yang ditempelkan langsung di telinga.",
    example: "Mendengarkan audio saat latihan mendengarkan (listening) di lab bahasa atau saat mengikuti konferensi online.",
    funFact: "Beberapa headset dilengkapi mikrofon sekaligus, sehingga menggabungkan fungsi perangkat output (suara) dan input (mikrofon) dalam satu alat!",
    tips: "Jangan mendengarkan audio dengan volume terlalu keras dalam waktu lama untuk menjaga kesehatan indra pendengaran."
  }
];

// ==========================================================================
// 2. DATA AKTIVITAS 1: JODOHKAN PERANGKAT (10 PASANGAN LENGKAP)
// ==========================================================================
const MATCHING_PAIRS = [
  { id: "m1", device: "Keyboard", desc: "Memasukkan teks, angka, dan perintah" },
  { id: "m2", device: "Mouse", desc: "Menggerakkan pointer dan memilih menu di layar" },
  { id: "m3", device: "Monitor", desc: "Menampilkan informasi visual, teks, dan gambar" },
  { id: "m4", device: "Printer", desc: "Mencetak dokumen digital ke media lembaran kertas" },
  { id: "m5", device: "CPU", desc: "Mengolah perhitungan dan perintah utama komputer" },
  { id: "m6", device: "RAM", desc: "Menyimpan data dan program sementara saat aktif" },
  { id: "m7", device: "SSD", desc: "Menyimpan data secara permanen dengan akses sangat cepat" },
  { id: "m8", device: "Speaker", desc: "Mengeluarkan gelombang suara audio hasil proses" },
  { id: "m9", device: "Router", desc: "Menghubungkan perangkat ke jaringan lokal dan internet" },
  { id: "m10", device: "Webcam", desc: "Mengambil rekaman gambar dan video langsung pengguna" }
];

// ==========================================================================
// 3. DATA AKTIVITAS 2: KELOMPOKKAN HARDWARE (10 PERANGKAT KE 5 KATEGORI)
// ==========================================================================
const DRAG_ITEMS_DATA = [
  { id: "d1", name: "Keyboard", category: "input", icon: "⌨️" },
  { id: "d2", name: "Mouse", category: "input", icon: "🖱️" },
  { id: "d3", name: "Monitor", category: "output", icon: "🖥️" },
  { id: "d4", name: "CPU", category: "process", icon: "🧠" },
  { id: "d5", name: "RAM", category: "process", icon: "⚡" },
  { id: "d6", name: "Printer", category: "output", icon: "🖨️" },
  { id: "d7", name: "Speaker", category: "output", icon: "🔊" },
  { id: "d8", name: "SSD", category: "storage", icon: "💾" },
  { id: "d9", name: "Flashdisk", category: "storage", icon: "🔌" },
  { id: "d10", name: "Router", category: "network", icon: "📡" }
];

// ==========================================================================
// 4. DATA AKTIVITAS 3: TEBAK PERANGKAT (10 CLUE QUESTIONS DENGAN PEMBAHASAN)
// ==========================================================================
const TEBAK_QUESTIONS = [
  {
    clue: "Aku digunakan untuk mengetik huruf, angka, dan simbol ke dalam komputer. Siapakah aku?",
    options: ["Mouse", "Keyboard", "Monitor", "Printer"],
    answer: 1,
    exp: "Keyboard adalah perangkat input utama dengan tombol huruf dan angka untuk memasukkan teks ke komputer."
  },
  {
    clue: "Aku sering disebut sebagai 'otak komputer' yang bertugas mengolah seluruh instruksi dan perhitungan matematika. Siapakah aku?",
    options: ["CPU / Processor", "Monitor", "Hard Disk", "Power Supply"],
    answer: 0,
    exp: "CPU (Central Processing Unit) berperan sebagai otak komputer yang memproses semua perintah logika dan matematika."
  },
  {
    clue: "Aku menampilkan gambar, teks, dan video tugasmu di layar agar kamu dapat melihatnya dengan jelas. Siapakah aku?",
    options: ["Scanner", "Monitor", "RAM", "Router"],
    answer: 1,
    exp: "Monitor adalah perangkat output visual yang menyajikan seluruh informasi hasil pemrosesan ke layar mata pengguna."
  },
  {
    clue: "Aku mencetak dokumen tugas sekolahmu dari dalam komputer ke atas lembaran kertas fisik. Siapakah aku?",
    options: ["Printer", "Webcam", "Speaker", "Touchscreen"],
    answer: 0,
    exp: "Printer adalah perangkat output yang menghasilkan wujud cetakan fisik (hardcopy) di atas kertas."
  },
  {
    clue: "Aku adalah media penyimpanan modern tanpa bagian yang berputar, bekerja sangat cepat sehingga laptopmu bisa booting dalam hitungan detik. Siapakah aku?",
    options: ["HDD", "Disket", "SSD", "CD-ROM"],
    answer: 2,
    exp: "SSD (Solid State Drive) menggunakan chip flash memori berkecepatan tinggi tanpa komponen mekanis yang bergerak."
  },
  {
    clue: "Aku menangkap suara kamu ketika sedang berbicara pada kelas daring atau merekam suara presentasi. Siapakah aku?",
    options: ["Speaker", "Microphone", "Headset Output", "Proyektor"],
    answer: 1,
    exp: "Microphone adalah perangkat input suara yang mengubah getaran suara udara menjadi sinyal audio digital."
  },
  {
    clue: "Aku memancarkan sinyal Wi-Fi dan mengatur lalu lintas data sehingga laptop dan HP di rumahmu dapat terhubung ke internet. Siapakah aku?",
    options: ["Switch Hub", "Router", "LAN Card", "Flashdisk"],
    answer: 1,
    exp: "Router berfungsi mengarahkan paket data jaringan dan mendistribusikan koneksi internet ke berbagai perangkat."
  },
  {
    clue: "Aku menyimpan data aplikasi secara sementara saat komputer sedang berjalan, dan seluruh dataku akan hilang saat komputer dimatikan. Siapakah aku?",
    options: ["RAM", "Flashdisk", "SSD", "ROM"],
    answer: 0,
    exp: "RAM (Random Access Memory) bersifat 'volatile', berfungsi menyimpan data kerja aktif selama ada pasokan daya listrik."
  },
  {
    clue: "Aku mengendalikan penunjuk panah (kursor) di layar, memiliki tombol klik kiri, klik kanan, dan roda gulir. Siapakah aku?",
    options: ["Keyboard", "Mouse", "Microphone", "Printer"],
    answer: 1,
    exp: "Mouse adalah perangkat penunjuk (pointing device) untuk menggerakkan kursor dan berinteraksi dengan antarmuka grafis."
  },
  {
    clue: "Aku bertugas khusus mengolah tampilan grafis resolusi tinggi, video animasi, dan permainan game 3D agar terlihat mulus. Siapakah aku?",
    options: ["GPU / Kartu Grafis", "Sound Card", "Motherboard", "Power Supply"],
    answer: 0,
    exp: "GPU (Graphics Processing Unit) memiliki ribuan inti pengolah khusus untuk kalkulasi visual dan rendering grafis gambar."
  }
];

// ==========================================================================
// 5. DATA KUIS EVALUASI (10 SOAL PILIHAN GANDA DENGAN PEMBAHASAN MENDALAM)
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    num: 1,
    category: "Konsep Dasar Hardware",
    question: "Perangkat keras komputer (hardware) secara sederhana dapat didefinisikan sebagai...",
    options: [
      "Bagian komputer yang hanya berupa program perintah dan tidak nyata",
      "Bagian fisik komputer yang dapat dilihat dan disentuh secara langsung",
      "Kumpulan virus dan kode biner yang berjalan di dalam internet",
      "Aliran arus listrik PLN yang mengalir ke stopkontak komputer"
    ],
    answer: 1,
    explanation: "Perangkat keras (hardware) adalah seluruh komponen fisik komputer yang berwujud nyata, dapat dilihat dengan mata, dan disentuh langsung dengan tangan."
  },
  {
    num: 2,
    category: "Hardware vs Software",
    question: "Manakah di bawah ini yang merupakan pasangan perbandingan yang TEPAT antara Hardware dan Software?",
    options: [
      "Hardware tidak berwujud nyata, sedangkan Software memiliki bentuk fisik padat",
      "Hardware adalah program aplikasi, sedangkan Software adalah papan ketik dan layar",
      "Hardware dapat disentuh dan dipegang, sedangkan Software adalah program digital di layar",
      "Hardware hanya bekerja saat tidak ada listrik, sedangkan Software membutuhkan baterai"
    ],
    answer: 2,
    explanation: "Hardware memiliki wujud fisik padat yang dapat dipegang (seperti mouse, CPU), sedangkan software adalah data, perintah, dan program digital yang dijalankan sistem."
  },
  {
    num: 3,
    category: "Perangkat Input",
    question: "Perangkat keras yang digunakan siswa untuk memasukkan karakter teks, angka, dan perintah pintasan ke komputer adalah...",
    options: [
      "Monitor",
      "Keyboard",
      "Speaker",
      "Printer"
    ],
    answer: 1,
    explanation: "Keyboard adalah perangkat input pokok yang menyediakan deretan tombol huruf, angka, dan simbol untuk memasukkan teks ke komputer."
  },
  {
    num: 4,
    category: "Perangkat Proses",
    question: "Komponen komputer yang bertindak sebagai 'otak' yang menjalankan instruksi dan perhitungan matematika logika adalah...",
    options: [
      "Hard Disk",
      "RAM",
      "CPU (Processor)",
      "Monitor"
    ],
    answer: 2,
    explanation: "CPU (Central Processing Unit) sering dianalogikan sebagai otak komputer karena mengeksekusi seluruh instruksi dan pemrosesan komputasi data."
  },
  {
    num: 5,
    category: "Penyimpanan (Storage)",
    question: "Mengapa komputer zaman sekarang lebih disarankan menggunakan SSD daripada HDD sebagai tempat sistem operasi?",
    options: [
      "Karena SSD menggunakan chip memori flash sehingga kecepatan baca-tulis jauh lebih cepat",
      "Karena SSD memiliki piringan magnetik yang berputar dengan suara sangat kencang",
      "Karena SSD harganya jauh lebih murah dan kapasitasnya selalu di atas 10 Terabyte",
      "Karena SSD hanya bisa digunakan saat komputer tidak terhubung ke jaringan internet"
    ],
    answer: 0,
    explanation: "SSD bekerja tanpa bagian mekanik berputar, melainkan memanfaatkan chip memori flash NAND, sehingga proses booting dan membuka aplikasi berlangsung seketika."
  },
  {
    num: 6,
    category: "Perangkat Output",
    question: "Jika guru ingin menampilkan hasil slide materi agar dapat dilihat oleh seluruh siswa di ruangan kelas besar, perangkat output yang tepat digunakan adalah...",
    options: [
      "Scanner",
      "Webcam",
      "Projector (InFocus)",
      "Microphone"
    ],
    answer: 2,
    explanation: "Projector memproyeksikan visual layar monitor ke layar kain atau dinding dalam ukuran besar sehingga nyaman disaksikan seluruh siswa di dalam kelas."
  },
  {
    num: 7,
    category: "Penerapan Nyata (HOTS)",
    question: "Rani ingin mengikuti pembelajaran jarak jauh (PJJ) menggunakan komputernya. Ia ingin agar guru dan teman sekelas dapat MELIHAT wajahnya dan MENDENGAR suaranya secara jelas. Dua perangkat input yang paling dibutuhkan Rani adalah...",
    options: [
      "Printer dan Speaker",
      "Webcam dan Microphone",
      "Keyboard dan Mouse",
      "HDD dan SSD"
    ],
    answer: 1,
    explanation: "Untuk mentransmisikan rekaman visual wajah dibutuhkan Webcam, dan untuk menangkap suara pengguna dibutuhkan Microphone. Keduanya adalah perangkat input."
  },
  {
    num: 8,
    category: "Jaringan Komputer",
    question: "Perangkat jaringan yang digunakan untuk menghubungkan puluhan kabel LAN dari komputer siswa di laboratorium sekolah dalam satu jaringan lokal adalah...",
    options: [
      "Switch Hub",
      "Flashdisk",
      "VGA Card",
      "Sound Card"
    ],
    answer: 0,
    explanation: "Switch berfungsi menghubungkan banyak kabel jaringan komputer dalam satu area lokal (Local Area Network / LAN) secara terorganisir."
  },
  {
    num: 9,
    category: "Karakteristik Memori",
    question: "Mengapa data yang tersimpan di dalam RAM akan hilang ketika komputer dimatikan atau listrik terputus?",
    options: [
      "Karena RAM memiliki kapasitas yang tidak terbatas",
      "Karena RAM bersifat sementara (volatile) dan membutuhkan pasokan arus listrik untuk menahan data",
      "Karena RAM terbuat dari piringan kaca yang mudah retak",
      "Karena RAM langsung membuang data ke tempat sampah recycle bin"
    ],
    answer: 1,
    explanation: "RAM bersifat volatile (sementara), yang artinya data hanya bertahan di sel memori selama terdapat aliran listrik. Data permanen disimpan di SSD atau HDD."
  },
  {
    num: 10,
    category: "Alur Kerja Komputer",
    question: "Urutan siklus kerja perangkat keras komputer yang benar ketika seorang siswa mengetik tugas hingga menyimpannya adalah...",
    options: [
      "Storage ➔ Output ➔ Process ➔ Input",
      "Output ➔ Storage ➔ Input ➔ Process",
      "Input ➔ Process ➔ Output ➔ Storage",
      "Process ➔ Input ➔ Storage ➔ Output"
    ],
    answer: 2,
    explanation: "Alur standar komputer adalah: INPUT (mengetik di keyboard) ➔ PROCESS (CPU & RAM mengolah kode) ➔ OUTPUT (layar menampilkan huruf) ➔ STORAGE (disimpan ke SSD/Flashdisk)."
  }
];

// ==========================================================================
// 6. STATE MANAJEMEN APLIKASI
// ==========================================================================
const AppState = {
  activeSection: "beranda",
  exploredSections: new Set(["beranda"]),
  exploredHardware: new Set(),
  activitiesDone: {
    act1: false,
    act2: false,
    act3: false,
    act4: false
  },
  quizDone: false,
  quizScore: 0,
  
  // State Aktivitas 1 (Matching)
  act1: {
    selectedLeft: null,
    selectedRight: null,
    matches: {}, // leftId -> rightId
    score: 0
  },

  // State Aktivitas 2 (Drag & Drop)
  act2: {
    assignments: {}, // deviceId -> category
    selectedBankItem: null
  },

  // State Aktivitas 3 (Tebak Perangkat)
  act3: {
    currentIndex: 0,
    score: 0,
    answered: false
  },

  // State Kuis
  quiz: {
    currentIndex: 0,
    answers: [], // { questionIndex, selectedOption, isCorrect }
    score: 0,
    answered: false
  }
};

// ==========================================================================
// 7. INISIALISASI & PERSISTENSI LOCALSTORAGE
// ==========================================================================
const STORAGE_KEY = "perangkat_keras_smp_progress_v1";

function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data.sections)) {
        data.sections.forEach(s => AppState.exploredSections.add(s));
      }
      if (Array.isArray(data.hardware)) {
        data.hardware.forEach(h => AppState.exploredHardware.add(h));
      }
      if (data.activitiesDone) {
        AppState.activitiesDone = Object.assign(AppState.activitiesDone, data.activitiesDone);
      }
      if (typeof data.quizDone === "boolean") {
        AppState.quizDone = data.quizDone;
      }
      if (typeof data.quizScore === "number") {
        AppState.quizScore = data.quizScore;
      }
    }
  } catch (e) {
    console.warn("Gagal memuat progres dari localStorage:", e);
  }
  updateGlobalProgressUI();
}

function saveProgress() {
  try {
    const payload = {
      sections: Array.from(AppState.exploredSections),
      hardware: Array.from(AppState.exploredHardware),
      activitiesDone: AppState.activitiesDone,
      quizDone: AppState.quizDone,
      quizScore: AppState.quizScore
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Gagal menyimpan progres ke localStorage:", e);
  }
  updateGlobalProgressUI();
}

function updateGlobalProgressUI() {
  // Bobot Progres:
  // 6 Section = 30 poin (5 per section)
  // Eksplorasi Hardware = 20 poin (min 5 kartu = full 20)
  // 4 Aktivitas = 30 poin (7.5 per aktivitas)
  // Kuis Selesai = 20 poin
  let totalScore = 0;

  // 1. Sections (maks 30)
  const secWeight = 30 / 6;
  totalScore += Math.min(30, AppState.exploredSections.size * secWeight);

  // 2. Hardware (maks 20)
  const hwRatio = Math.min(1, AppState.exploredHardware.size / 6);
  totalScore += hwRatio * 20;

  // 3. Aktivitas (maks 30)
  const actKeys = ["act1", "act2", "act3", "act4"];
  const actsCompleted = actKeys.filter(k => AppState.activitiesDone[k]).length;
  totalScore += (actsCompleted / 4) * 30;

  // 4. Kuis (maks 20)
  if (AppState.quizDone) {
    totalScore += 20;
  }

  const rounded = Math.min(100, Math.round(totalScore));
  const fillEl = document.getElementById("globalProgressBar");
  const textEl = document.getElementById("globalProgressText");

  if (fillEl) fillEl.style.width = rounded + "%";
  if (textEl) textEl.textContent = rounded + "%";
}

function confirmResetProgress() {
  const answer = confirm("Apakah kamu yakin ingin mengulang seluruh progres belajar dari 0%? Skor kuis dan aktivitas akan direset.");
  if (answer) {
    localStorage.removeItem(STORAGE_KEY);
    AppState.exploredSections = new Set(["beranda"]);
    AppState.exploredHardware = new Set();
    AppState.activitiesDone = { act1: false, act2: false, act3: false, act4: false };
    AppState.quizDone = false;
    AppState.quizScore = 0;
    saveProgress();
    alert("Progres belajarmu telah diatur ulang ke 0%. Selamat belajar kembali!");
    navigateTo("beranda");
  }
}

// ==========================================================================
// 8. NAVIGASI SINGLE PAGE APPLICATION (SPA)
// ==========================================================================
function navigateTo(targetSectionId) {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".nav-link");

  let found = false;
  sections.forEach(sec => {
    if (sec.id === targetSectionId) {
      sec.classList.add("active");
      found = true;
    } else {
      sec.classList.remove("active");
    }
  });

  if (!found) return;

  navLinks.forEach(link => {
    if (link.getAttribute("data-target") === targetSectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  AppState.activeSection = targetSectionId;
  AppState.exploredSections.add(targetSectionId);
  saveProgress();

  // Tutup navbar mobile jika sedang terbuka
  const navEl = document.getElementById("mainNavbar");
  if (navEl && navEl.classList.contains("nav-open")) {
    navEl.classList.remove("nav-open");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileNav() {
  const navEl = document.getElementById("mainNavbar");
  if (navEl) {
    navEl.classList.toggle("nav-open");
  }
}

function scrollToMateri(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function openSimulationActivity() {
  navigateTo("aktivitas");
  switchActivityTab("act4");
}

// ==========================================================================
// 9. MODUL MATERI: QUICK QUESTION INTERAKTIF
// ==========================================================================
function checkMateriQuickQuiz(quizId, userChoice) {
  const optionsWrap = document.getElementById("materiInputOptions");
  const feedbackEl = document.getElementById("materiInputFeedback");
  if (!optionsWrap || !feedbackEl) return;

  const buttons = optionsWrap.querySelectorAll(".iq-btn");
  buttons.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    if (btn.textContent.startsWith("B.")) {
      btn.classList.add("correct");
    } else if (btn.textContent.startsWith(userChoice + ".")) {
      btn.classList.add("wrong");
    }
  });

  feedbackEl.style.display = "block";
  if (userChoice === "B") {
    feedbackEl.className = "iq-feedback correct-fb";
    feedbackEl.innerHTML = "🎉 <strong>Hebat, Benar!</strong> Keyboard adalah perangkat input yang digunakan untuk memasukkan huruf, angka, dan perintah teks.";
  } else {
    feedbackEl.className = "iq-feedback wrong-fb";
    feedbackEl.innerHTML = "❌ <strong>Kurang tepat.</strong> Jawaban yang benar adalah <strong>B. Keyboard</strong>. Monitor & Speaker adalah perangkat output, sedangkan Printer untuk mencetak.";
  }
}

// ==========================================================================
// 10. MODUL HARDWARE (KATALOG EKSPLORASI & MODAL POPUP)
// ==========================================================================
function renderHardwareGrid(filterCategory = "all") {
  const container = document.getElementById("hardwareGridContainer");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? HARDWARE_DATA 
    : HARDWARE_DATA.filter(item => item.category === filterCategory);

  let html = "";
  filtered.forEach(hw => {
    let badgeClass = "badge-input-tag";
    if (hw.category === "process") badgeClass = "badge-process-tag";
    else if (hw.category === "output") badgeClass = "badge-output-tag";
    else if (hw.category === "storage") badgeClass = "badge-storage-tag";
    else if (hw.category === "network") badgeClass = "badge-network-tag";

    html += `
      <div class="hw-card" onclick="openHardwareModal('${hw.id}')" role="button" tabindex="0" title="Klik untuk melihat detail ${hw.name}">
        <span class="hw-badge-corner ${badgeClass}">${hw.category.toUpperCase()}</span>
        <div class="hw-icon">${hw.icon}</div>
        <h3 class="hw-name">${hw.name}</h3>
        <span class="hw-category-text">${hw.categoryLabel}</span>
        <p class="hw-desc">${hw.summary}</p>
        <div class="hw-cta">
          <span>Lihat Detail Lengkap</span>
          <span>➔</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterHardware(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderHardwareGrid(category);
}

function openHardwareModal(deviceId) {
  const hw = HARDWARE_DATA.find(item => item.id === deviceId);
  if (!hw) return;

  document.getElementById("modalDeviceIcon").textContent = hw.icon;
  document.getElementById("modalDeviceCategory").textContent = hw.categoryLabel.toUpperCase();
  document.getElementById("modalDeviceName").textContent = hw.name;
  document.getElementById("modalDeviceFunction").textContent = hw.function;
  document.getElementById("modalDeviceExample").textContent = hw.example;
  document.getElementById("modalDeviceFunFact").textContent = hw.funFact;
  document.getElementById("modalDeviceTips").textContent = hw.tips;

  const modal = document.getElementById("hardwareModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Tandai perangkat ini telah dieksplorasi
  AppState.exploredHardware.add(deviceId);
  saveProgress();
}

function closeHardwareModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById("hardwareModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 11. MODUL AKTIVITAS (TAB SWITCHER & 4 GAME EDUKATIF)
// ==========================================================================
function switchActivityTab(actId) {
  const buttons = document.querySelectorAll(".act-tab-btn");
  const panes = document.querySelectorAll(".activity-pane");

  buttons.forEach(btn => {
    if (btn.getAttribute("data-act") === actId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  panes.forEach(pane => {
    if (pane.id === `${actId}-pane`) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
}

// --------------------------------------------------------------------------
// AKTIVITAS 1: JODOHKAN PERANGKAT
// --------------------------------------------------------------------------
let shuffledMatchRight = [];

function initMatchingActivity() {
  const colLeft = document.getElementById("matchColLeft");
  const colRight = document.getElementById("matchColRight");
  if (!colLeft || !colRight) return;

  // Acak urutan deskripsi sisi kanan
  shuffledMatchRight = [...MATCHING_PAIRS].sort(() => Math.random() - 0.5);

  let leftHtml = `<div class="col-header-tag">🖥️ Nama Perangkat (Klik Satu)</div>`;
  MATCHING_PAIRS.forEach((item, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C...
    leftHtml += `
      <button class="match-item" id="btn-left-${item.id}" onclick="handleMatchLeftClick('${item.id}')">
        <span><strong>${letter}.</strong> ${item.device}</span>
        <span class="match-status-icon">⚪</span>
      </button>
    `;
  });
  colLeft.innerHTML = leftHtml;

  let rightHtml = `<div class="col-header-tag">🎯 Fungsi Perangkat (Klik Pasangannya)</div>`;
  shuffledMatchRight.forEach((item, idx) => {
    rightHtml += `
      <button class="match-item" id="btn-right-${item.id}" onclick="handleMatchRightClick('${item.id}')">
        <span>${item.desc}</span>
        <span class="match-status-icon">⚪</span>
      </button>
    `;
  });
  colRight.innerHTML = rightHtml;

  AppState.act1.selectedLeft = null;
  AppState.act1.selectedRight = null;
  AppState.act1.matches = {};
  AppState.act1.score = 0;
  updateMatchingStatusUI();
}

function handleMatchLeftClick(leftId) {
  // Jangan pilih yang sudah matched
  if (AppState.act1.matches[leftId]) return;

  AppState.act1.selectedLeft = leftId;
  
  // Update visual selection
  document.querySelectorAll("#matchColLeft .match-item").forEach(btn => {
    if (!btn.classList.contains("matched")) {
      btn.classList.remove("selected");
    }
  });
  const selectedBtn = document.getElementById(`btn-left-${leftId}`);
  if (selectedBtn) selectedBtn.classList.add("selected");

  // Jika kanan sudah pernah dipilih sebelumnya, coba pasangkan
  if (AppState.act1.selectedRight) {
    tryPairMatch(leftId, AppState.act1.selectedRight);
  }
}

function handleMatchRightClick(rightId) {
  // Cek apakah item kanan sudah dipasangkan sebelumnya
  const alreadyPaired = Object.values(AppState.act1.matches).includes(rightId);
  if (alreadyPaired) return;

  AppState.act1.selectedRight = rightId;

  document.querySelectorAll("#matchColRight .match-item").forEach(btn => {
    if (!btn.classList.contains("matched")) {
      btn.classList.remove("selected");
    }
  });
  const selectedBtn = document.getElementById(`btn-right-${rightId}`);
  if (selectedBtn) selectedBtn.classList.add("selected");

  // Jika kiri sudah terpilih, langsung periksa pasangan
  if (AppState.act1.selectedLeft) {
    tryPairMatch(AppState.act1.selectedLeft, rightId);
  }
}

function tryPairMatch(leftId, rightId) {
  const leftBtn = document.getElementById(`btn-left-${leftId}`);
  const rightBtn = document.getElementById(`btn-right-${rightId}`);
  const statusMsg = document.getElementById("act1StatusMsg");

  // Pasangan benar jika id-nya sama persis
  if (leftId === rightId) {
    AppState.act1.matches[leftId] = rightId;
    AppState.act1.score += 10;

    if (leftBtn) {
      leftBtn.classList.remove("selected");
      leftBtn.classList.add("matched");
      leftBtn.querySelector(".match-status-icon").textContent = "✅";
    }
    if (rightBtn) {
      rightBtn.classList.remove("selected");
      rightBtn.classList.add("matched");
      rightBtn.querySelector(".match-status-icon").textContent = "✅";
    }

    if (statusMsg) {
      statusMsg.innerHTML = `<span style="color: var(--accent-green);">🎉 Pasangan Tepat! Skor bertambah +10.</span>`;
    }

    AppState.act1.selectedLeft = null;
    AppState.act1.selectedRight = null;
    updateMatchingStatusUI();

    // Cek jika sudah selesai semua 10
    if (Object.keys(AppState.act1.matches).length === MATCHING_PAIRS.length) {
      AppState.activitiesDone.act1 = true;
      saveProgress();
      if (statusMsg) {
        statusMsg.innerHTML = `🏆 <strong>Luar Biasa!</strong> Kamu berhasil menjodohkan semua 10 perangkat dengan sempurna (Skor: 100/100)!`;
      }
    }
  } else {
    // Pasangan salah
    if (leftBtn) leftBtn.classList.add("error-shake");
    if (rightBtn) rightBtn.classList.add("error-shake");

    if (statusMsg) {
      statusMsg.innerHTML = `<span style="color: var(--accent-red);">❌ Pasangan belum sesuai. Coba baca fungsi perangkatnya kembali!</span>`;
    }

    setTimeout(() => {
      if (leftBtn) {
        leftBtn.classList.remove("error-shake", "selected");
      }
      if (rightBtn) {
        rightBtn.classList.remove("error-shake", "selected");
      }
      AppState.act1.selectedLeft = null;
      AppState.act1.selectedRight = null;
    }, 600);
  }
}

function updateMatchingStatusUI() {
  const scoreEl = document.getElementById("act1Score");
  if (scoreEl) {
    scoreEl.textContent = `${AppState.act1.score} / 100`;
  }
}

function checkAllMatching() {
  const totalMatched = Object.keys(AppState.act1.matches).length;
  const statusMsg = document.getElementById("act1StatusMsg");
  if (!statusMsg) return;

  if (totalMatched === MATCHING_PAIRS.length) {
    statusMsg.innerHTML = `🌟 <strong>Sempurna!</strong> Seluruh 10 pasangan perangkat telah terpasang dengan benar.`;
  } else {
    statusMsg.innerHTML = `Kamu telah menjodohkan <strong>${totalMatched} dari 10</strong> perangkat. Lanjutkan menjodohkan sisa perangkat lainnya!`;
  }
}

function resetMatchingActivity() {
  initMatchingActivity();
  const statusMsg = document.getElementById("act1StatusMsg");
  if (statusMsg) {
    statusMsg.textContent = "Aktivitas dijodohkan ulang. Pilih satu perangkat di kiri, lalu fungsinya di kanan.";
  }
}

// --------------------------------------------------------------------------
// AKTIVITAS 2: KELOMPOKKAN HARDWARE (DRAG & DROP + TAP TO PLACE)
// --------------------------------------------------------------------------
function initCategorizationActivity() {
  const bank = document.getElementById("dragItemsBank");
  if (!bank) return;

  // Bersihkan semua drop zone
  ["input", "process", "output", "storage", "network"].forEach(cat => {
    const zone = document.getElementById(`zone-${cat}`);
    if (zone) zone.innerHTML = "";
  });

  AppState.act2.assignments = {};
  AppState.act2.selectedBankItem = null;

  // Render chip di bank
  let html = "";
  // Acak urutan perangkat di bank
  const shuffledItems = [...DRAG_ITEMS_DATA].sort(() => Math.random() - 0.5);
  shuffledItems.forEach(item => {
    html += `
      <div class="drag-chip" id="chip-${item.id}" draggable="true" ondragstart="handleDragStart(event, '${item.id}')" onclick="handleChipClick('${item.id}')" title="Seret atau klik chip ini">
        <span>${item.icon}</span>
        <span>${item.name}</span>
      </div>
    `;
  });
  bank.innerHTML = html;
  updateCategorizationUI();
}

// Drag Handlers
function handleDragStart(event, itemId) {
  event.dataTransfer.setData("text/plain", itemId);
  AppState.act2.selectedBankItem = itemId;
}

function allowDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function handleDrop(event, targetCategory) {
  event.preventDefault();
  event.currentTarget.classList.remove("drag-over");
  const itemId = event.dataTransfer.getData("text/plain") || AppState.act2.selectedBankItem;
  if (itemId) {
    assignItemToCategory(itemId, targetCategory);
  }
}

// Tap to Place (Mobile / Click friendly)
function handleChipClick(itemId) {
  const currentSelected = AppState.act2.selectedBankItem;
  
  if (currentSelected === itemId) {
    // Deselect jika diklik lagi
    AppState.act2.selectedBankItem = null;
    document.getElementById(`chip-${itemId}`)?.classList.remove("chip-selected");
  } else {
    // Pilih item baru
    if (currentSelected) {
      document.getElementById(`chip-${currentSelected}`)?.classList.remove("chip-selected");
    }
    AppState.act2.selectedBankItem = itemId;
    document.getElementById(`chip-${itemId}`)?.classList.add("chip-selected");

    const feedback = document.getElementById("act2FeedbackMsg");
    const item = DRAG_ITEMS_DATA.find(d => d.id === itemId);
    if (feedback && item) {
      feedback.innerHTML = `👉 Kamu memilih <strong>${item.name}</strong>. Sekarang klik salah satu kotak kategori (Input, Process, Output, Storage, Network) untuk menempatkannya!`;
    }
  }
}

function handleZoneClick(targetCategory) {
  if (AppState.act2.selectedBankItem) {
    assignItemToCategory(AppState.act2.selectedBankItem, targetCategory);
    AppState.act2.selectedBankItem = null;
  }
}

function assignItemToCategory(itemId, category) {
  const item = DRAG_ITEMS_DATA.find(d => d.id === itemId);
  if (!item) return;

  AppState.act2.assignments[itemId] = category;

  // Hapus dari bank / zone sebelumnya
  const oldChip = document.getElementById(`chip-${itemId}`);
  if (oldChip) oldChip.remove();

  // Tambahkan chip baru ke zone
  const targetZone = document.getElementById(`zone-${category}`);
  if (targetZone) {
    const chipEl = document.createElement("div");
    chipEl.className = "drag-chip in-zone";
    chipEl.id = `chip-${itemId}`;
    chipEl.innerHTML = `
      <span>${item.icon}</span>
      <span>${item.name}</span>
      <span class="chip-remove-btn" onclick="removeItemFromZone(event, '${itemId}')" title="Kembalikan ke bank">✕</span>
    `;
    targetZone.appendChild(chipEl);
  }

  updateCategorizationUI();
}

function removeItemFromZone(event, itemId) {
  event.stopPropagation();
  delete AppState.act2.assignments[itemId];

  const chipEl = document.getElementById(`chip-${itemId}`);
  if (chipEl) chipEl.remove();

  const item = DRAG_ITEMS_DATA.find(d => d.id === itemId);
  const bank = document.getElementById("dragItemsBank");
  if (item && bank) {
    const newChip = document.createElement("div");
    newChip.className = "drag-chip";
    newChip.id = `chip-${item.id}`;
    newChip.setAttribute("draggable", "true");
    newChip.setAttribute("ondragstart", `handleDragStart(event, '${item.id}')`);
    newChip.setAttribute("onclick", `handleChipClick('${item.id}')`);
    newChip.innerHTML = `<span>${item.icon}</span> <span>${item.name}</span>`;
    bank.appendChild(newChip);
  }

  updateCategorizationUI();
}

function updateCategorizationUI() {
  const placedCount = Object.keys(AppState.act2.assignments).length;
  const countEl = document.getElementById("act2ProgressCount");
  if (countEl) {
    countEl.textContent = `${placedCount} / 10`;
  }
}

function checkCategorizationAnswers() {
  const placedCount = Object.keys(AppState.act2.assignments).length;
  const feedback = document.getElementById("act2FeedbackMsg");
  if (!feedback) return;

  if (placedCount < DRAG_ITEMS_DATA.length) {
    feedback.innerHTML = `⚠️ Kamu baru menempatkan <strong>${placedCount} dari 10</strong> perangkat. Tempatkan semua perangkat terlebih dahulu!`;
    return;
  }

  let correctCount = 0;
  DRAG_ITEMS_DATA.forEach(item => {
    if (AppState.act2.assignments[item.id] === item.category) {
      correctCount++;
    }
  });

  const wrongCount = DRAG_ITEMS_DATA.length - correctCount;
  const score = correctCount * 10;

  if (correctCount === 10) {
    AppState.activitiesDone.act2 = true;
    saveProgress();
    feedback.innerHTML = `🎉 <strong>Luar Biasa Sempurna!</strong> Skor: <strong>100/100</strong>. Semua 10 perangkat ditempatkan pada kategori yang tepat!`;
  } else {
    feedback.innerHTML = `
      📊 <strong>Hasil Evaluasi:</strong> Skor: <strong>${score}/100</strong> (Benar: <span style="color: var(--accent-green); font-weight: 800;">${correctCount}</span>, Salah: <span style="color: var(--accent-red); font-weight: 800;">${wrongCount}</span>). 
      Periksa kembali perangkat yang salah letak dengan menekan tombol ✕ pada chip!
    `;
  }
}

function resetCategorizationActivity() {
  initCategorizationActivity();
  const feedback = document.getElementById("act2FeedbackMsg");
  if (feedback) {
    feedback.textContent = "Aktivitas direset. Silakan kelompokkan kembali perangkat ke kategori yang sesuai.";
  }
}

// --------------------------------------------------------------------------
// AKTIVITAS 3: TEBAK PERANGKAT (10 CLUE QUESTIONS)
// --------------------------------------------------------------------------
function renderTebakQuestion() {
  const q = TEBAK_QUESTIONS[AppState.act3.currentIndex];
  if (!q) return;

  const clueBadge = document.getElementById("tebakClueBadge");
  const clueText = document.getElementById("tebakClueText");
  const progressText = document.getElementById("tebakProgressText");
  const optionsGrid = document.getElementById("tebakOptionsGrid");
  const expBox = document.getElementById("tebakExplanation");
  const nextBtn = document.getElementById("tebakNextBtn");

  if (clueBadge) clueBadge.textContent = `Petunjuk #${AppState.act3.currentIndex + 1} dari 10`;
  if (clueText) clueText.textContent = `“${q.clue}”`;
  if (progressText) progressText.textContent = `${AppState.act3.currentIndex + 1} / 10`;
  if (expBox) expBox.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";

  AppState.act3.answered = false;

  let optsHtml = "";
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C, D
    optsHtml += `
      <button class="tebak-opt-btn" id="tebak-btn-${idx}" onclick="handleTebakOptionClick(${idx})">
        <span><strong>${letter}.</strong> ${opt}</span>
      </button>
    `;
  });

  if (optionsGrid) optionsGrid.innerHTML = optsHtml;
}

function handleTebakOptionClick(selectedIndex) {
  if (AppState.act3.answered) return;
  AppState.act3.answered = true;

  const q = TEBAK_QUESTIONS[AppState.act3.currentIndex];
  const buttons = document.querySelectorAll(".tebak-opt-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  const expBox = document.getElementById("tebakExplanation");
  const expTitle = document.getElementById("tebakExpTitle");
  const expText = document.getElementById("tebakExpText");
  const nextBtn = document.getElementById("tebakNextBtn");

  if (selectedIndex === q.answer) {
    AppState.act3.score += 10;
    if (expTitle) expTitle.innerHTML = `<span style="color: var(--accent-green);">🎉 Tebakanmu Tepat Sekali!</span>`;
  } else {
    if (expTitle) expTitle.innerHTML = `<span style="color: var(--accent-red);">❌ Tebakan Kurang Tepat!</span>`;
  }

  if (expText) expText.textContent = q.exp;
  if (expBox) expBox.style.display = "block";
  if (nextBtn) nextBtn.style.display = "inline-flex";
}

function nextTebakQuestion() {
  if (AppState.act3.currentIndex < TEBAK_QUESTIONS.length - 1) {
    AppState.act3.currentIndex++;
    renderTebakQuestion();
  } else {
    // Selesai 10 pertanyaan
    AppState.activitiesDone.act3 = true;
    saveProgress();

    const container = document.getElementById("tebakCardContainer");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="font-size: 4rem; margin-bottom: 0.5rem;">🕵️‍♂️🏆</div>
          <h2 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Selesai Menebak!</h2>
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            Kamu berhasil menyelesaikan seluruh 10 teka-teki perangkat keras komputer!
          </p>
          <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-blue); margin-bottom: 1.5rem;">
            Skor: ${AppState.act3.score} / 100
          </div>
          <button class="btn btn-primary" onclick="resetTebakActivity()">
            <span>🔄 Ulangi Tebak Perangkat</span>
          </button>
        </div>
      `;
    }
  }
}

function resetTebakActivity() {
  AppState.act3.currentIndex = 0;
  AppState.act3.score = 0;
  AppState.act3.answered = false;

  const container = document.getElementById("tebakCardContainer");
  if (container) {
    container.innerHTML = `
      <div class="tebak-badge-num" id="tebakClueBadge">Petunjuk #1</div>
      <div class="tebak-clue-bubble">
        <span class="tc-quote">🕵️‍♂️</span>
        <h3 class="tc-text" id="tebakClueText"></h3>
      </div>
      <div class="tebak-options-grid" id="tebakOptionsGrid"></div>
      <div class="tebak-explanation" id="tebakExplanation" style="display: none;">
        <div class="te-title" id="tebakExpTitle">Penjelasan:</div>
        <p id="tebakExpText"></p>
      </div>
      <div class="tebak-nav-row">
        <button class="btn btn-primary" id="tebakNextBtn" onclick="nextTebakQuestion()" style="display: none;">
          <span>Pertanyaan Berikutnya ➔</span>
        </button>
        <button class="btn btn-outline" id="tebakRestartBtn" onclick="resetTebakActivity()">
          <span>🔄 Mulai dari Awal</span>
        </button>
      </div>
    `;
  }
  renderTebakQuestion();
}

// --------------------------------------------------------------------------
// AKTIVITAS 4: SIMULASI KOMPUTER BEKERJA
// --------------------------------------------------------------------------
let simInterval = null;

function runComputerSimulation() {
  const textInput = document.getElementById("simTextInput");
  const rawText = (textInput?.value || "INFORMATIKA").trim() || "INFORMATIKA";
  const screenEl = document.getElementById("simMonitorScreen");
  const logTerminal = document.getElementById("simLogTerminal");
  const btnRun = document.getElementById("btnRunSim");

  if (btnRun) btnRun.disabled = true;
  if (screenEl) screenEl.innerHTML = `<span class="screen-cursor">_</span>`;

  // Bersihkan status aktif sebelumnya
  resetSimHighlights();

  function addLog(msg, color = "#38bdf8") {
    if (logTerminal) {
      const p = document.createElement("p");
      p.className = "log-line";
      p.style.color = color;
      p.innerHTML = msg;
      logTerminal.appendChild(p);
      logTerminal.scrollTop = logTerminal.scrollHeight;
    }
  }

  if (logTerminal) logTerminal.innerHTML = "";
  addLog(`🚀 <strong>[MEMULAI SIMULASI]</strong> Input kata: "<strong>${rawText}</strong>"`, "#facc15");

  // Langkah 1: Input (Keyboard aktif)
  setTimeout(() => {
    document.getElementById("nodeKeyboard")?.classList.add("active-glow");
    addLog(`⌨️ <strong>[TAHAP 1 - INPUT]</strong> Siswa menekan tombol keyboard. Sinyal dikirim dalam kode ASCII / biner.`);
  }, 400);

  // Langkah 2: Bus 1 mengalirkan pulsa
  setTimeout(() => {
    const bus1 = document.getElementById("bus1");
    if (bus1) bus1.classList.add("pulse-active");
    addLog(`➡️ <strong>[BUS DATA]</strong> Jalur bus data kabel motherboard menghantarkan sinyal biner ke CPU.`);
  }, 1200);

  // Langkah 3: CPU & RAM aktif mengolah
  setTimeout(() => {
    document.getElementById("bus1")?.classList.remove("pulse-active");
    document.getElementById("nodeKeyboard")?.classList.remove("active-glow");
    
    document.getElementById("nodeCPU")?.classList.add("active-glow");
    document.getElementById("nodeRAM")?.classList.add("active-glow");
    addLog(`🧠 <strong>[TAHAP 2 - PROSES]</strong> CPU mengolah data & RAM menyimpannya di ruang memori kerja aktif.`);
  }, 2200);

  // Langkah 4: Bus 2 mengalirkan sinyal grafis
  setTimeout(() => {
    const bus2 = document.getElementById("bus2");
    if (bus2) bus2.classList.add("pulse-active");
    addLog(`➡️ <strong>[VIDEO SIGNAL]</strong> Data hasil olahan diteruskan ke pengontrol layar monitor.`);
  }, 3200);

  // Langkah 5: Output (Monitor & Speaker menampilkan hasil)
  setTimeout(() => {
    document.getElementById("bus2")?.classList.remove("pulse-active");
    document.getElementById("nodeCPU")?.classList.remove("active-glow");
    document.getElementById("nodeRAM")?.classList.remove("active-glow");

    document.getElementById("nodeMonitor")?.classList.add("active-glow");
    document.getElementById("nodeSpeaker")?.classList.add("active-glow");

    // Ketik teks perlahan di monitor
    let charIdx = 0;
    if (screenEl) screenEl.innerHTML = "";
    simInterval = setInterval(() => {
      if (charIdx < rawText.length) {
        if (screenEl) {
          screenEl.textContent = rawText.substring(0, charIdx + 1);
        }
        charIdx++;
      } else {
        clearInterval(simInterval);
        addLog(`🖥️ <strong>[TAHAP 3 - OUTPUT]</strong> Layar Monitor menampilkan teks "<strong>${rawText}</strong>" secara sempurna!`, "#4ade80");
        
        // Langkah 6: Storage (SSD Menyimpan File)
        setTimeout(() => {
          document.getElementById("nodeMonitor")?.classList.remove("active-glow");
          document.getElementById("nodeSpeaker")?.classList.remove("active-glow");
          document.getElementById("nodeSSD")?.classList.add("active-glow-storage");
          addLog(`💾 <strong>[TAHAP 4 - STORAGE]</strong> Tombol Save ditekan. File tugas tersimpan permanen di SSD!`, "#10b981");

          AppState.activitiesDone.act4 = true;
          saveProgress();

          if (btnRun) btnRun.disabled = false;
        }, 1200);
      }
    }, 90);

  }, 4000);
}

function resetSimHighlights() {
  if (simInterval) clearInterval(simInterval);
  document.querySelectorAll(".sim-node").forEach(node => {
    node.classList.remove("active-glow", "active-glow-storage");
  });
  document.querySelectorAll(".sim-bus").forEach(bus => {
    bus.classList.remove("pulse-active");
  });
}

function resetComputerSimulation() {
  resetSimHighlights();
  const screenEl = document.getElementById("simMonitorScreen");
  const logTerminal = document.getElementById("simLogTerminal");
  const btnRun = document.getElementById("btnRunSim");

  if (screenEl) screenEl.innerHTML = `<span class="screen-cursor">_</span>`;
  if (logTerminal) {
    logTerminal.innerHTML = `<p class="log-line text-muted">Simulasi direset. Masukkan kata lalu klik "Jalankan Simulasi Alur!".</p>`;
  }
  if (btnRun) btnRun.disabled = false;
}

function inspectSimDevice(devKey) {
  const devMap = {
    keyboard: { name: "Keyboard", role: "Tahap Input: Menangkap ketukan tuts siswa dan mengirim kode biner." },
    mouse: { name: "Mouse", role: "Tahap Input: Mengarahkan kursor dan koordinat klik ke sistem operasi." },
    cpu: { name: "CPU Processor", role: "Tahap Proses: Menghitung operasi logika dan mengkoordinasi data." },
    ram: { name: "RAM", role: "Tahap Proses: Menyediakan ruang memori cepat saat dokumen sedang aktif diedit." },
    monitor: { name: "Monitor", role: "Tahap Output: Menampilkan jutaan piksel teks dan grafis ke mata kita." },
    speaker: { name: "Speaker", role: "Tahap Output: Mengeluarkan sinyal audio bila ada notifikasi atau musik." },
    ssd: { name: "SSD Storage", role: "Tahap Penyimpanan: Menuliskan data file ke chip memori secara permanen." }
  };

  const info = devMap[devKey];
  const logTerminal = document.getElementById("simLogTerminal");
  if (info && logTerminal) {
    const p = document.createElement("p");
    p.className = "log-line";
    p.style.color = "#f59e0b";
    p.innerHTML = `🔍 <strong>[INSPEKSI: ${info.name}]</strong> ${info.role}`;
    logTerminal.appendChild(p);
    logTerminal.scrollTop = logTerminal.scrollHeight;
  }
}

// ==========================================================================
// 12. MODUL KUIS (EVALUASI 10 SOAL DENGAN SCORING & REVIEW)
// ==========================================================================
function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[AppState.quiz.currentIndex];
  if (!q) return;

  const badgeSoal = document.getElementById("quizQuestionNumberBadge");
  const badgeCat = document.getElementById("quizCategoryBadge");
  const scoreBadge = document.getElementById("quizCurrentScore");
  const stepperFill = document.getElementById("quizStepperFill");
  const qTitle = document.getElementById("quizQuestionTitle");
  const optsContainer = document.getElementById("quizOptionsContainer");
  const feedbackBox = document.getElementById("quizFeedbackBox");
  const nextBtn = document.getElementById("quizNextBtn");

  if (badgeSoal) badgeSoal.textContent = `SOAL ${q.num} / 10`;
  if (badgeCat) badgeCat.textContent = q.category;
  if (scoreBadge) scoreBadge.textContent = AppState.quiz.score;
  if (stepperFill) stepperFill.style.width = `${(q.num / 10) * 100}%`;
  if (qTitle) qTitle.textContent = q.question;
  if (feedbackBox) feedbackBox.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";

  AppState.quiz.answered = false;

  let optsHtml = "";
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C, D
    optsHtml += `
      <button class="quiz-opt-btn" id="quiz-btn-${idx}" onclick="handleQuizOptionClick(${idx})">
        <span class="opt-letter"><strong>${letter}.</strong></span>
        <span class="opt-label">${opt}</span>
      </button>
    `;
  });

  if (optsContainer) optsContainer.innerHTML = optsHtml;
}

function handleQuizOptionClick(selectedIdx) {
  if (AppState.quiz.answered) return;
  AppState.quiz.answered = true;

  const q = QUIZ_QUESTIONS[AppState.quiz.currentIndex];
  const isCorrect = selectedIdx === q.answer;

  if (isCorrect) {
    AppState.quiz.score += 10;
  }

  // Rekam jawaban untuk review
  AppState.quiz.answers.push({
    num: q.num,
    question: q.question,
    selectedOption: q.options[selectedIdx],
    correctOption: q.options[q.answer],
    isCorrect: isCorrect,
    explanation: q.explanation
  });

  // Update visual tombol
  const buttons = document.querySelectorAll(".quiz-opt-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  // Tampilkan feedback box
  const feedbackBox = document.getElementById("quizFeedbackBox");
  const fbBadge = document.getElementById("quizFeedbackBadge");
  const fbText = document.getElementById("quizFeedbackText");
  const nextBtn = document.getElementById("quizNextBtn");
  const scoreBadge = document.getElementById("quizCurrentScore");

  if (scoreBadge) scoreBadge.textContent = AppState.quiz.score;

  if (feedbackBox && fbBadge && fbText) {
    if (isCorrect) {
      feedbackBox.className = "quiz-feedback-box correct-fb";
      fbBadge.textContent = "Jawaban Tepat! 🎉";
    } else {
      feedbackBox.className = "quiz-feedback-box wrong-fb";
      fbBadge.textContent = "Jawaban Kurang Tepat ❌";
    }
    fbText.textContent = q.explanation;
    feedbackBox.style.display = "block";
  }

  if (nextBtn) {
    if (AppState.quiz.currentIndex === QUIZ_QUESTIONS.length - 1) {
      nextBtn.innerHTML = `<span>Lihat Hasil Akhir Kuis ➔</span>`;
    } else {
      nextBtn.innerHTML = `<span>Soal Selanjutnya ➔</span>`;
    }
    nextBtn.style.display = "inline-flex";
  }
}

function nextQuizQuestion() {
  if (AppState.quiz.currentIndex < QUIZ_QUESTIONS.length - 1) {
    AppState.quiz.currentIndex++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  const activeBox = document.getElementById("quizActiveBox");
  const resultBox = document.getElementById("quizResultBox");

  if (activeBox) activeBox.style.display = "none";
  if (resultBox) resultBox.style.display = "block";

  const finalScore = AppState.quiz.score;
  AppState.quizScore = finalScore;
  AppState.quizDone = true;
  saveProgress();

  const numEl = document.getElementById("quizFinalScoreNumber");
  const trophyEl = document.getElementById("quizTrophyIcon");
  const titleEl = document.getElementById("quizResultCategoryTitle");
  const subtitleEl = document.getElementById("quizResultSubtitle");
  const statCorrectEl = document.getElementById("quizStatCorrect");
  const statWrongEl = document.getElementById("quizStatWrong");

  if (numEl) numEl.textContent = finalScore;

  const correctCount = finalScore / 10;
  const wrongCount = 10 - correctCount;
  if (statCorrectEl) statCorrectEl.textContent = correctCount;
  if (statWrongEl) statWrongEl.textContent = wrongCount;

  // Kategori Skor Sesuai Permintaan Spesifikasi
  // 90–100 = Sangat Baik 🏆
  // 80–89 = Baik 👍
  // 70–79 = Cukup 🙂
  // <70 = Perlu Belajar Lagi 📚
  if (finalScore >= 90) {
    if (trophyEl) trophyEl.textContent = "🏆";
    if (titleEl) titleEl.textContent = "Sangat Baik! 🏆";
    if (subtitleEl) subtitleEl.textContent = "Luar biasa! Kamu adalah calon pakar perangkat keras komputer sejati. Pemahamanmu sangat mendalam!";
  } else if (finalScore >= 80) {
    if (trophyEl) trophyEl.textContent = "👍";
    if (titleEl) titleEl.textContent = "Baik! 👍";
    if (subtitleEl) subtitleEl.textContent = "Hebat! Kamu sudah memahami fungsi dan jenis perangkat keras komputer dengan sangat bagus.";
  } else if (finalScore >= 70) {
    if (trophyEl) trophyEl.textContent = "🙂";
    if (titleEl) titleEl.textContent = "Cukup 🙂";
    if (subtitleEl) subtitleEl.textContent = "Bagus! Kamu sudah mengenal sebagian besar hardware. Tingkatkan lagi dengan membaca modul materi.";
  } else {
    if (trophyEl) trophyEl.textContent = "📚";
    if (titleEl) titleEl.textContent = "Perlu Belajar Lagi 📚";
    if (subtitleEl) subtitleEl.textContent = "Jangan berkecil hati! Buka kembali modul materi dan coba lagi kuis ini untuk meningkatkan pemahamanmu.";
  }

  // Render review list
  const reviewList = document.getElementById("quizReviewList");
  if (reviewList) {
    let reviewHtml = "";
    AppState.quiz.answers.forEach(item => {
      reviewHtml += `
        <div class="qrs-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}">
          <div class="qrs-q"><strong>Soal #${item.num}:</strong> ${item.question}</div>
          <div class="qrs-ans">
            <span>Jawabanmu: <strong>${item.selectedOption}</strong> ${item.isCorrect ? '✅' : '❌'}</span><br>
            ${!item.isCorrect ? `<span>Kunci Jawaban: <strong style="color: var(--accent-green);">${item.correctOption}</strong></span><br>` : ''}
            <small style="color: var(--text-muted); font-style: italic;">💡 ${item.explanation}</small>
          </div>
        </div>
      `;
    });
    reviewList.innerHTML = reviewHtml;
  }
}

function restartQuiz() {
  AppState.quiz.currentIndex = 0;
  AppState.quiz.answers = [];
  AppState.quiz.score = 0;
  AppState.quiz.answered = false;

  const activeBox = document.getElementById("quizActiveBox");
  const resultBox = document.getElementById("quizResultBox");

  if (activeBox) activeBox.style.display = "block";
  if (resultBox) resultBox.style.display = "none";

  renderQuizQuestion();
}

// ==========================================================================
// 13. BOOTSTRAP EVENT LISTENERS & WINDOW LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Muat Progres Belajar dari localStorage
  loadSavedProgress();

  // 2. Render Katalog Hardware
  renderHardwareGrid("all");

  // 3. Inisialisasi 4 Aktivitas Game
  initMatchingActivity();
  initCategorizationActivity();
  renderTebakQuestion();

  // 4. Inisialisasi Kuis
  renderQuizQuestion();

  // 5. Tangani Keyboard Shortcut ESC untuk menutup modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeHardwareModal();
    }
  });
});
