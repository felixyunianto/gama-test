import designPlanningImage from "../assets/images/desain-dan-perencanaan.png";
import environmentPrivImage from "../assets/images/jasa-pemetaan.png";
import buildingPrivImage from "../assets/images/jasa-SLF.png";
import constructionManagementImage from "../assets/images/manajemen-konstruksi-bangunan.png";

import innovateImage from "../assets/images/innovative.png";
import synergyImage from "../assets/images/sinergy.png";
import focusImage from "../assets/images/focus.png";
import persistentImage from "../assets/images/persistent.png";

import buildingImage from "../assets/images/building.png";
import slfImage from "../assets/images/contract.png";
import environmentImage from "../assets/images/documents.png";
import industryImage from "../assets/images/factory.png";
import menuImage from "../assets/images/menu.png";

import imbVector from "../assets/images/imb_vector.svg";
import slfVector from "../assets/images/slf_vector.svg";
import environmentVector from "../assets/images/environment_vector.svg";
import factoryVector from "../assets/images/factory_vector.svg";
import otherVector from "../assets/images/other_vector.svg";

import tegalImage from "../assets/images/article/tegal.jpeg";
import gedungImage from "../assets/images/article/gedung.jpeg";

export const SERVICE_IN_HOME_LIST = [
  {
    title: "Sertifikasi Profesi",
    description:
      "Meliputi berbagai sertifikasi dari SKK, Serkom DJK ESDM, SKK K3 BNSP, Ahli K3 Umum, SKK BNSP, Petugas Damkar, Petugas P3K, hingga Auditor SMK3",
    img: environmentPrivImage,
  },
  {
    title: "Sertifikasi Badan Usaha",
    description:
      "Sertifikasi untuk PBG (Perizinan Bangunan Gedung) & SLF (Sertifikasi Laik Fungsi), Asuransi Kontruksi, Pendirian dan  Perubahan PT/ CV, SBU Jasa Kontruksi, dan SBU JPTL, ISO Akreditasi/Non Akreditasi,Audit SMK3, Akuntan Publik, SMK3, Skup Migas, CSMS, dan LKPM",
    img: designPlanningImage,
  },
  {
    title: "Produk Penerbitan Bank Garansi & Surety Bond",
    description:
      "Melayani berbagai jaminan seperti Jaminan Penawaran / Bid Bond, Jaminan Uang Muka / Advance Payment Bond, dan Jaminan Pemeliharaan / Maintenance Bond.",
    img: buildingPrivImage,
  },
  {
    title: "Sertifikasi Alat",
    description:
      "Tidak hanya perizinan bangunan, kami juga melayani sertifikasi alat seperti Riksa Uji Alat (JADETABEK)",
    img: constructionManagementImage,
  },
];

export const PILLAR_IN_HOME_LIST = [
  {
    title: "Inovasi",
    img: innovateImage,
  },
  {
    title: "Sinergitas",
    img: synergyImage,
  },
  {
    title: "Fokus Tujuan",
    img: focusImage,
  },
  {
    title: "Persisten",
    img: persistentImage,
  },
];

export const BRANCH_OF_COMPANY = [
  {
    latLong: [-6.8614342, 109.115618],
    title: "Tegal",
    link: "https://maps.app.goo.gl/GeDyqRuPipGt57Zv8",
  },
  {
    latLong: [-6.7539358, 111.0267049],
    title: "Pati",
    link: "https://maps.app.goo.gl/PQNkWgPfBy7W1jQL6",
  },
  {
    latLong: [-7.066984, 110.8842492],
    title: "Grobogan",
    link: "https://maps.app.goo.gl/ShdusxU3rCv1zbrg6",
  },
  {
    latLong: [-6.237794, 106.8300219],
    title: "Jakarta Selatan",
    link: "https://maps.app.goo.gl/duub2KZNfCoNZVpJ7",
  },
  {
    latLong: [-7.823083, 110.3653639],
    title: "Yogyakarta",
    link: "https://maps.app.goo.gl/ygdZTvdCAuTBYw9m6",
  },
];

export const SERVICES_LIST = [
  {
    image: buildingImage,
    title: "IMB/PBG",
    subchild: [
      "PKKPR / SKRK / KRK / SKIR / TTR / FPR / Izin tata Ruang Lainnya.",
      "Gambar detail Arsitektur + SKA",
      "Gambar & Perhitungan Struktur + SKA",
      "Gambar MEP + SKA",
      "Administrasi PBG Lainnya",
    ],
    bigImage: imbVector,
    description: "Kami melayani perizinan untuk mendirikan berbagai bangunan",
  },
  {
    image: slfImage,
    title: "Sertifikat Laik Fungsi",
    subchild: [
      "Gambar As Build Drawing Arsitektur",
      "Gambar As Build Drawing Struktur",
      "Gambbar As Build MEP",
      "Perhitungan dan Pengujian Struktur, Arsitektur, dan MEP",
      "Kajian / Laporan Pemeriksaan Bangunan sesuai daftar SIMAK",
      "Laporan Kelaikan Fungsi Bangunan",
      "Sertifikat Kelaikan Fungsi Bangunan dari Instansi / Dinas terkait",
      "Administrasi SLF Lainnya",
    ],
    bigImage: slfVector,
    description: "Kami membantu dalam pembuatan sertifikat laik fungsi.",
  },
  {
    image: environmentImage,
    title: "Dokumen Lingkungan",
    subchild: [
      "SPPL dengan arahan DLH / KLHK",
      "UKL/UPL/RKLRPL/DPLH",
      "RINTEK Penyimpanan TPS Limbah B3",
      "Persetujuan Teknis Pemanfaatan Pengelola Limbah B3",
      "PERTEK BME",
      "PERTEK BMAL",
      "Persetujuan Lingkungan PKPLH / SKKLH",
      "SLO IPAL",
      "SLO Cerobong",
    ],
    bigImage: environmentVector,
    description:
      "Kami membantu dalam pengelolaan izin mengenai aspek lingkungan.",
  },
  {
    image: industryImage,
    title: "Izin Industri",
    subchild: [
      "Legalitas Usaha (Perorangan atau Badan Usaha)",
      "Izin terkait Operasional Industri (NIB, Sertifikat Standar, Sertifikat Standar Terverifikasi, dan Izin Industri)",
      "Pengurusan Izin (TDP, SIUP, SITU, SIUJK)",
      "Dan Izin lain-lainnya",
    ],
    bigImage: factoryVector,
    description: "Kami melayani berbagai izin untuk mendirikan sebuah usaha.",
  },
  {
    image: menuImage,
    title: "Layanan Lainnya",
    subchild: [
      "Perijinan Analisis Dampak Lalu Lintas (ANDALALIN)",
      "Drainase / Peil Banjir",
      "Pengurusan Rekom Tim Ahli Bangunan Gedung",
      "Rekomtek Proteksi kebakaran (DAMKAR)",
      "Pengurusan Pemenuhan Sertifikat Standart (Veriikasi Sertifikat Standart)",
      "Izin Operasional Klinik, Apotek, Rumah Sakit, Laboratorium, dll",
      "Pengurusan Izin TDG, PIRT, BPOM, Sertifikat Halal, HAKI, dll",
      "Sertifikat Laik Operasi Listrik dan Genset (SLO)",
      "Dan Kepengurusan Izin lainnya.",
    ],
    bigImage: otherVector,
    description: "Masih banyak lagi tentang pelayanan perizinan.",
  },
];

export const ARTICLES = [
  {
    title: "Persyaratan SLF di Kabupaten/Kota Tegal",
    username: "admin",
    created_at: "2024-03-04",
    thumbnail: tegalImage,
    description:
      "Tegal merupakan salah satu kabupaten yang terletak di posisi strategis pengembangan pembangunan poros Jakarta - Semarang dan poros ke selatan Purwokerto/Cilacap",
    content: `<p>Tegal merupakan salah satu kabupaten yang terletak di posisi strategis pengembangan pembangunan poros Jakarta &ndash; Semarang dan poros ke selatan Purwokerto/Cilacap. Jika ditilik dari sisi geografis dan topografinya, Kabupaten Tegal bagian utara merupakan dataran rendah. Sementara di bagian selatannya adalah pegunungan dengan puncaknya Gunung Slamet.</p><p>Salah satu industri Kabupaten/Kota Tegal yang cukup potensial untuk dikembangkan lebih lanjut adalah industri tekstil. Selain itu, terdapat pula industri menengah, seperti pembuatan&nbsp;<em>shuttle cock</em>, sarung (mesin dan ATBM), logam, jamu tradisional, batik Tegalan, serta&nbsp;<em>docking</em>&nbsp;kapal.</p><p>Dilansir dari laman AntaraNews (11/2019), pada 2019, pemerintah telah merencanakan&nbsp;<a href="https://www.antaranews.com/berita/1173947/42-hektare-kawasan-industri-tekstil-disiapkan-di-tegal" rel="noreferrer noopener" target="_blank">pengembangan industri tekstil di Tegal</a>. Ketua Asosiasi Pertekstilan Indonesia (KAPI) mengungkapkan bahwa pemerintah daerah telah menyiapkan lahan seluas 42 hektare untuk menyambut kabar baik ini. Kawasan industri tekstil tersebut nantinya akan saling terintegrasi antara industri hulu dan hilir.</p><p>Sementara itu, sesuai PERDA Nomor 10 Tahun 2002 tentang Rencana Tata Ruang Wilayah Kabupaten Tegal Tahun 2012&ndash;2032, kawasan industri Kabupaten Tegal dipusatkan pada bagian utara dan selatan wilayah kabupaten. Lebih rinci lagi, adapun lokasi pengembangan kawasan industri besar dan menengah di Kabupaten Tegal terbagi menjadi dua titik, yang meliputi:</p><ol><li>Kawasan Industri Margasari, yang terletak di Kecamatan Margasari</li><li>Kawasan Industri Pantura, yang meliputi tiga kecamatan, yaitu Kecamatan Kramat, Suradadi, dan Warureja</li></ol><p>Sementara itu, adapun kawasan industri besar dan menengah Kota Tegal sesuai PERDA Kota Tegal Nomor 4 Tahun 2012 berada di Kawasan Industri Terpadu Kecamatan Margadana dan Kecamatan Tegal Barat. Di samping itu, Kawasan Industri Terpadu Kota Tegal ini nantinya akan diarahkan untuk kegiatan yang mendukung produktivitas pelabuhan, seperti:</p><ol><li>Pengembangan transportasi laut</li><li>Pengembangan kawasan peruntukan industri terpadu di Kelurahan Muarareja</li></ol><p>Adanya peraturan daerah yang mengatur tentang penempatan kawasan industri, termasuk juga rencana tata kawasan kota tentu bukan hanya untuk pelengkap administrasi daerah saja. Melainkan juga untuk menciptakan keserasian pembangunan daerah dengan wilayah sekitarnya, menciptakan keterpaduan pembangunan sektoral dan daerah, serta mengendalikan pembangunan fisik di&nbsp;<a href="https://id.wikipedia.org/wiki/Kabupaten_Tegal" rel="noreferrer noopener" target="_blank">Kabupaten/Kota Tegal.</a></p><p>Sesuai dengan amanat Undang-Undang RI Nomor 28 Tahun 2002 tentang Bangunan Gedung, setiap perencanaan bangunan gedung juga diharuskan untuk mengikuti persyaratan arsitektur. Adapun persyaratan arsitektur sesuai dengan peraturan perundang-undangan meliputi penampilan, tata ruang dalam, keseimbangan, keserasian, dan keselarasan bangunan gedung dengan lingkungannya.</p><p>Di samping itu, secara geologis, Indonesia berada di Kawasan Cincin Api Pasifik (<em>Pacifik Ring of Fire</em>), yaitu rangkaian dari gunung api paling aktif di dunia yang membentang di sepanjang lempeng pasifik. Hal inilah yang menjadi dasar bahwa setiap pembangunan fisik harus direncanakan dengan matang, termasuk mempertimbangkan faktor kebencanaan.</p><p>Lantas, bagaimana cara menilai sebuah bangunan gedung di Kabupaten/Kota Tegal telah sesuai dengan fungsi peruntukannya?</p><p>Salah satu tolok ukur penilaian keandalan bangunan gedung adalah dengan melakukan pengkajian terhadap aspek keselamatan, kesehatan, kenyamanan, dan kemudahan bangunan gedung. Selanjutnya, terdapat pula kewajiban untuk mengurus SLF atau sertifikat laik fungsi yang diatur dalam Permen PUPR Nomor 27/PRT/M/2018 Tahun 2018.</p><p>&nbsp;</p><h2>Pengertian SLF</h2><p>Pada tahun 2018, pemerintah telah menerbitkan regulasi yang mengatur mengenai kewajiban mengurus SLF bagi setiap bangunan gedung, termasuk pabrik. Apa itu SLF?</p><p>Adapun yang dimaksud&nbsp;<a href="https://gamaindomahardika/pengertian-manfaat-dan-persyaratan-slf/" rel="noreferrer noopener" target="_blank">SLF atau sertifikat laik fungsi</a>&nbsp;adalah sertifikat yang diterbitkan oleh pemerintah daerah untuk bangunan gedung yang telah diperiksa keandalannya dan memenuhi persyaratan, baik persyaratan administrasi maupun teknis.</p><p>Adapun yang berhak dan diperbolehkan memeriksa atau menilai keandalan bangunan gedung untuk penerbitan SLF pun telah dibatasi oleh pemerintah. Dengan begitu, pengurusan SLF harus melibatkan pihak yang memiliki wewenang dalam hal inspeksi/penilaian bangunan gedung, di antaranya adalah tim ahli bangunan gedung,&nbsp;<a href="https://gamaindomahardika/pengkaji-teknis-bangunan-gedung/" rel="noreferrer noopener" target="_blank">pengkaji teknis</a>, atau konsultan SLF terpercaya.</p><p>Adapun masa berlaku SLF adalah 5 (lima) tahun untuk bangunan peruntukan umum, seperti pabrik, rumah sakit, gudang, hotel, dan lainnya. Sementara untuk bangunan peruntukan rumah tinggal, SLF memiliki masa berlaku 20 (dua puluh) tahun.</p><h3>Sanksi belum memiliki SLF</h3><p>Dalam&nbsp;Permen PUPR Nomor 27/PRT/M/2018 Tahun 2018 tertulis, &rdquo;Pemilik dan/atau pengguna bangunan gedung yang tidak memenuhi persyaratan yang tercantum dalam IMB dan/atau SLF dapat dikenai sanksi administrasi dan/atau sanksi pidana.&rdquo;</p><p>Adapun sanksi administrasi yang dimaksud adalah sebagai berikut:</p><ol><li>Peringatan tertulis</li><li>Pembatasan kegiatan pembangunan</li><li>Penghentian sementara atau tetap pada pekerjaan pelaksanaan pembangunan</li><li>Penghentian sementara atau tetap pada pemanfaatan bangunan gedung</li><li>Pembekuan IMB gedung</li><li>Pencabutan IMB gedung</li><li>Pembekuan SLF bangunan gedung</li><li>Pencabutan SLF bangunan gedung; atau</li><li>Perintah pembongkaran bangunan gedung.</li></ol><h3>Dasar hukum pelaksanaan SLF di Kabupaten/Kota Tegal</h3><p>Adapun dasar hukum pelaksanaan SLF di Kabupaten/Kota Tegal adalah sebagai berikut:</p><ol><li>Undang-Undang Republik Indonesia Nomor 28 Tahun 2002 tentang Bangunan Gedung&nbsp;</li><li>Peraturan Pemerintah (PP) Nomor 36 Tahun 2005 tentang Peraturan Pelaksanaan Undang-Undang Nomor 28 Tahun 2002 tentang Bangunan Gedung</li><li>Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor 27/PRT/M/2018 tentang Sertifikat Laik Fungsi Bangunan Gedung</li><li>Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat RI Nomor 3 Tahun 2020 tentang Perubahan Atas Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor 27/PRT/M/2018 tentang Sertifikat Laik Fungsi Bangunan Gedung</li><li>Peraturan Daerah Kabupaten Tegal Nomor 1 Tahun 2014 tentang Bangunan Gedung</li><li>Peraturan Daerah Kota Tegal Nomor 2 Tahun 2015 tentang Bangunan Gedung</li></ol><h3>Prosedur mengurus SLF di Kabupaten/Kota Tegal</h3><p>Sesuai dengan Permen PUPR Nomor 3 Tahun 2020, adapun tata cara pengurusan dan penerbitan SLF bangunan gedung terbagi menjadi tiga tahapan, yaitu prapermohonan, permohonan, dan penerbitan SLF.&nbsp;</p><p>Secara umum sesuai peraturan perundang-undangan, untuk tahap prapermohonan SLF, Anda diminta untuk menyiapkan beberapa dokumen, meliputi:</p><ol style="list-style-type:decimal"><li>KTP pemilik bangunan gedung</li><li>Bukti kepemilikan tanah/sertifikat tanah</li><li>IMB (izin mendirikan bangunan) atau PBG (persetujuan bangunan gedung)</li><li>Gambar terbangun atau&nbsp;<em><a href="https://gamaindomahardika/as-built-drawing-syarat-slf/" rel="noreferrer noopener" target="_blank">as built drawing</a></em>. Adapun yang dimaksud&nbsp;<em>as built drawing</em>&nbsp;adalah gambar yang dibuat sesuai dengan kondisi terbangun di lapangan yang telah mengadopsi semua perubahan yang terjadi selama proses konstruksi.</li><li>Manual pengoperasian, pemeliharaan dan perawatan bangunan gedung, serta peralatan dan perlengkapan yang digunakan selama aktivitas operasional.</li><li>Dokumen pendukung lain, seperti&nbsp;<a href="https://gamaindomahardika/pengertian-fungsi-dan-alur-pengurusan-slo/" rel="noreferrer noopener" target="_blank">SLO (Sertifikat Laik Operasi)</a>, Izin Pengelolaan Lingkungan (rekomendasi UKL/UPL/AMDAL/dokumen lingkungan lainnya), dokumen Andalalin (Analisis Dampak Lalu Lintas, sertifikat keselamatan kebakaran,&nbsp;keselamatan dan kesehatan kerja (K3), dan lainnya.</li></ol><p>Jika salah satu persyaratan di atas tidak dapat dilengkapi oleh pemohon atau pemilik bangunan gedung, Anda dapat meminta bantuan jasa konsultan SLF. Sebagai contoh, perusahaan Anda belum memiliki dokumen&nbsp;<em>as built drawing</em>&nbsp;atau SLO. Dengan begitu, tim konsultan SLF akan memasukkan pekerjaan pembuatan&nbsp;<em>as built drawing</em>&nbsp;dan SLO di dalam penawarannya.</p><p>&nbsp;</p><p>Jika sudah dinyatakan lengkap, tim pengkaji teknis atau konsultan SLF akan melakukan pemeriksaan kelaikan bangunan gedung. Pemeriksaan ini terdiri dari dua tahap, meliputi:</p><ol><li>Pemeriksaan visual kondisi faktual, dan</li><li>Pemeriksaan kesesuaian kondisi faktual dengan dokumen rencana teknis dalam IMB dan/atau&nbsp;<em>as built drawing</em></li></ol><p>Sementara itu, adapun pemeriksaan visual kondisi faktual bangunan gedung terbagi menjadi beberapa aspek, meliputi:</p><ol><li>Persyaratan tata bangunan, yang meliputi persyaratan peruntukan bangunan gedung, persyaratan intensitas bangunan gedung, persyaratan arsitektur bangunan gedung, dan persyaratan pengendalian dampak lingkungan.</li><li>Persyaratan keandalan, yang meliputi persyaratan keselamatan, persyaratan kesehatan, persyaratan kenyamanan, dan persyaratan kemudahan.</li></ol><p>Jika hasil pemeriksaan kelaikan bangunan gedung dinyatakan&nbsp;<strong>laik</strong>, konsultan SLF dapat menerbitkan surat pernyataan kelaikan fungsi bangunan gedung. Namun, jika&nbsp;<strong>belum laik</strong>,&nbsp;<a href="https://gamaindomahardika/" rel="noreferrer noopener" target="_blank">konsultan SLF</a>&nbsp;akan memberikan rekomendasi perbaikan, pemeliharaan, atau perawatan sesuai kondisinya.&nbsp;</p><p>Setelah itu, pemerintah daerah yang memiliki wewenang dalam&nbsp;<a href="https://gamaindomahardika/cara-mengurus-slf-hingga-terbit/" rel="noreferrer noopener" target="_blank">penerbitan SLF</a>&nbsp;akan memeriksa kelengkapan dokumen yang menjadi syarat pengajuan SLF. Jika dinyatakan lengkap, proses permohonan SLF akan memasuki tahapan verifikasi hasil pemeriksaan.</p><p>Setelah melewati proses verifikasi, pemerintah daerah dapat segera menerbitkan SLF bangunan gedung. Biasanya, proses penerbitan ini memakan waktu paling cepat 3 (tiga) hari kerja sejak dokumen permohonan SLF diterima.</p><p>&nbsp;</p><p>Nah, itu dia penjelasan mengenai pentingnya SLF atau sertifikat laik fungsi untuk bangunan pabrik yang masih aktif beroperasi. Jika Anda kesulitan mencari penyedia jasa SLF di Kabupaten/Kota Tegal, menggunakan jasa dari PT Gama Indo Mahardika adalah pilihan yang tepat.</p><p>Dalam dua tahun terakhir ini (2020&ndash;2021), PT Gama Indo Mahardika telah bermitra dengan banyak perusahaan dan industri yang tersebar di Jawa Tengah untuk pekerjaan pengurusan SLF. Sebagai contoh, Wonogiri, Kendal, Cilacap, Semarang, Grobogan, Temanggung, Boyolali,&nbsp;<a href="https://gamaindomahardika/persyaratan-slf-jepara/" rel="noreferrer noopener" target="_blank">Jepara</a>,&nbsp;<a href="https://gamaindomahardika/persyaratan-slf-kabupaten-kudus/" rel="noreferrer noopener" target="_blank">Kudus</a>,&nbsp;<a href="https://gamaindomahardika/persyaratan-pengurusan-slf-di-kabupaten-pati/" rel="noreferrer noopener" target="_blank">Pati</a>, Rembang, dan Brebes.</p>`,
    backlink: false,
  },
  {
    title: "Bagaimana Cara Mengurus SLF Melalui SIMBG?",
    username: "admin",
    created_at: "2024-01-03",
    thumbnail: gedungImage,
    description:
      "Sejak diungdangkannya Peraturan Pemerintah Nomor 16 Tahun 2021 tentang Peraturan Pelaksanaan UU Nomor 28 Tahun 2002 tentang Bangunan Gedung, pengurusan SLF atau Sertifikat Laik Fungsi yang semula dilakukan secara manual kini beralih ke",
    content:
      '<p>Sejak diungdangkannya Peraturan Pemerintah Nomor 16 Tahun 2021 tentang Peraturan Pelaksanaan UU Nomor 28 Tahun 2002 tentang Bangunan Gedung, pengurusan SLF atau Sertifikat Laik Fungsi yang semula dilakukan secara manual kini beralih ke sistem elektronik. Adapun sistem elektronik tersebut dikenal dengan nama&nbsp;<a href="https://pu.go.id/berita/dukung-kemudahan-perizinan-usaha-kementerian-pupr-luncurkan-layanan-simbg" rel="noreferrer noopener" target="_blank">SIMBG atau Sistem Informasi Manajemen Bangunan Gedung.</a></p><p>SIMBG merupakan sistem elektronik berbasis&nbsp;<em>website</em>&nbsp;yang digunakan untuk melaksanakan proses penyelenggaraan PBG (pengganti IMB), SLF, RTB, atau pendataan lain mengenai bangunan gedung. Lantas, bagaimana cara mengurus SLF bangunan gedung melalui SIMBG? Untuk mendapatkan jawabannya, terlebih dulu kami akan menjelaskan pengertian SLF.</p><h2>Apa itu SLF?</h2><p>Sesuai dengan PERMEN PUPR Nomor 27/PRT/M/2018, yang dimaksud dengan SLF atau sertifikat laik fungsi adalah sertifikat yang diterbitkan oleh pemerintah daerah terhadap bangunan gedung yang sudah telah laik fungsi, baik saat dinilai secara administratif maupun teknis.</p><p>Sementara yang dimaksud bangunan gedung adalah wujud fisik hasil pekerjaan konstruksi yang menyatu dengan tempat kedudukannya, sebagian atau seluruhnya berada di atas dan/atau di dalam tanah dan/atau air, yang&nbsp;<strong>berfungsi sebagai tempat manusia melakukan kegiatannya</strong>, baik untuk hunian atau tempat tinggal, kegiatan keagamaan, kegiatan usaha, kegiatan sosial, budaya, maupun kegiatan khusus lainnya.</p><p>Adapun fungsi dan tujuan dari pengurusan/penerbitan SLF bangunan gedung adalah sebagai berikut:</p><ol><li>SLF menjadi persyaratan untuk dapat dilakukannya pemanfaatan bangunan gedung.</li><li>SLF diberikan kepada bangunan gedung yang sudah selesai dibangun dan memenuhi persyaratan keandalan bangunan gedung sesuai dengan peraturan perundangan yang berlaku.</li></ol><p>&nbsp;</p><h3>Persyaratan SLF bangunan gedung</h3><p>Sebelum Anda membuat dan mengupload berkas pengajuan SLF, terdapat beberapa persyaratan administrasi dan teknis yang harus disiapkan. Di samping itu, persyaratan SLF di tiap daerah pun berbeda. Jadi, ada baiknya Anda mengecek regulasi pengurusan SLF di daerah masing-masing supaya segala persiapan dan persyaratan dapat dipenuhi secara lengkap.</p><p>Adapun persyaratan teknis dan administrasi dalam mengurus SLF bangunan gedung adalah sebagai berikut:</p><h4>a. Persyaratan administrasi</h4><ol><li>Bukti status hak atas tanah.</li><li>Status kepemilikan bangunan gedung.</li><li>Salinan KTP, paspor, atau ITAS (izin tinggal terbatas).</li><li>Dokumen IMB (izin mendirikan bangunan) beserta lampiran&nbsp;<em>siteplan</em>.</li><li>Gambar&nbsp;<em>as built drawing</em>. Adapun yang dimaksud&nbsp;<em>As built drawing&nbsp;</em>adalah gambar kerja yang memuat komponen-komponen proyek konstruksi yang dibuat sesuai dengan kondisi terbangun di lapangan.</li><li>Rekomendasi teknis dari perangkat daerah terkait sistem proteksi kebakaran,&nbsp;keselamatan dan kesehatan kerja (K3), instalasi listrik, dan pengendalian dampak lingkungan (bisa berupa UKL-UPL, RKL-RPL Rinci, AMDAL, atau dokumen lingkungan lainnya).</li><li><a href="https://gamaindomahardika.com/pengertian-fungsi-dan-alur-pengurusan-slo/" rel="noreferrer noopener" target="_blank">Sertifikat laik operasi atau SLO</a>&nbsp;dan Izin Operasi untuk penggunaan genset.</li><li>Izin penggunaan pesawat angkat dan angkut jika menggunakan.</li><li><a href="https://gamaindomahardika.com/prosedur-dan-biaya-pengurusan-andalalin/" rel="noreferrer noopener" target="_blank">Dokumen Andalalin</a>&nbsp;(Analisis dampak lalu lintas) jika bangunan gedung berada di luar kawasan industri.</li><li>Dokumen hasil pengujian material dalam bentuk daftar simak terhadap komponen arsitektur, struktur, utilitas/instalasi, dan tata ruang luar bangunan gedung.</li><li>Manual pengoperasian, pemeliharaan dan perawatan bangunan gedung, serta peralatan dan perlengkapan yang difungsikan.</li></ol><h4>b. Persyaratan teknis&nbsp;</h4><ol><li>Persyaratan peruntukan bangunan gedung yang menunjukkan tentang kesesuaian fungsi dengan peruntukan dalam rencana tata ruang wilayah kabupaten/kota, rencana detail tata ruang kabupaten/kota, rencana tata bangunan dan lingkungan.</li><li>Persyaratan intensitas bangunan gedung, yang meliputi kepadatan, ketinggian, dan jarak bebas bangunan gedung.</li><li>Persyaratan arsitektur bangunan gedung, yang meliputi penampilan, tata ruang dalam, keseimbangan, keserasian, serta keselarasan bangunan gedung dengan lingkungannya.</li><li>Persyaratan pengendalian dampak lingkungan yang menunjukkan bahwa bangunan gedung yang saat ini beroperasi telah mendapatkan izin lingkungan dan pengelolaan limbah dari instansi terkait sesuai ketentuan peraturan perundang-undangan yang berlaku.</li></ol><p>Nah, perlu diingat juga, persyaratan teknis di atas hanya bisa disiapkan oleh Izin Pelaku Teknis Bangunan (IPTB), tim pengkaji teknis bangunan gedung, atau tenaga ahli yang bersertifikasi secara resmi dan diakui oleh peraturan-perundangan. Namun, perlu diketahui juga bahwa pengkaji teknis perseorangan hanya dapat menyelenggarakan jasa pengkajian teknis bangunan gedung yang memiliki risiko kecil dan berteknologi sederhana.</p><p>Jika bangunan gedung yang Anda gunakan memiliki fungsi sebagai industri/pabrik, ada baiknya untuk menggunakan jasa&nbsp;<a href="gamaindomahardika.com/" rel="noreferrer noopener" target="_blank">konsultan SLF</a>&nbsp;berpengalaman yang sudah berbadan hukum.</p><h2>Tata cara mengurus SLF melalui SIMBG</h2><p>Selanjutnya, kami akan menjelaskan langkah pengurusan SLF melalui SIMBG.</p><ol><li>Pertama, Anda (atas nama perusahaan) harus melakukan pembuatan akun SIMBG melalui alamat&nbsp;<a href="https://simbg.pu.go.id/" rel="noreferrer noopener" target="_blank">https://simbg.pu.go.id.</a></li><li>Gunakan alamat email aktif dan pilih sebagai&nbsp;<strong>Pemohon</strong>.</li><li>Jika sudah membuat akun, silakan lengkapi formulir data diri pemilik akun secara benar.</li><li>Untuk mengurus SLF, klik tombol&nbsp;<strong>tambah</strong>&nbsp;dan pilih Sertifikat Laik Fungsi.</li><li>Dalam sistem tersebut, Anda akan diminta memilih jenis bangunan yang dimohonkan SLF, apakah Bangunan Gedung Baru atau Bangunan Gedung Eksisting.</li><li>Selanjutnya, lengkapi data-data informasi mengenai bangunan gedung yang dimohonkan SLF-nya. Adapun informasi yang diminta, seperti alamat, bukti dan status hak atas tanah, data teknis arsitektur dan struktur, dan sebagainya.</li><li>Pastikan data yang Anda upload adalah format (.pdf).</li></ol><p>&nbsp;</p><p>Adanya SIMBG tersebut tentunya akan memudahkan pemohon dalam memantau progres penerbitan SLF secara&nbsp;<em>real time</em>&nbsp;atau kapan pun. Di samping itu, adapun manfaat dan kemudahan SIMBG bagi pemerintah dan pemilik usaha adalah sebagai berikut:</p><ol><li>Kemudahan dalam berkoordinasi antar instansi untuk memantau penyelenggaraan bangunan gedung.</li><li>Kemudahan dalam penugasan TABG atau Tim Ahli Bangunan Gedung dan tim teknis.</li><li>Kemudahan dalam penyelenggaraan layanan, baik itu waktu, perhitungan retribusi, penjadwalan sidang, maupun kegiatan lainnya.</li><li>Kemudahan masyarakat dan pemilik bangunan gedung dalam mengurus penerbitan SLF.</li></ol><p>Itu dia tata cara mengurus SLF melalui SIMBG. Jika Anda masih merasa kesulitan dalam mengurus SLF untuk bangunan gedung yang Anda gunakan, ada baiknya untuk dapat berkonsultasi dengan konsultan SLF di daerah Anda.</p><p>Dalam dua tahun terakhir (2020&ndash;2021), perusahaan kami telah membantu pengurusan SLF di beberapa daerah berkembang, seperti Mojokerto, Sidoarjo, Subang, Purwakarta, Bekasi, Karawang, Serang, Bogor, Tangerang, Majalengka,&nbsp;<a href="https://gamaindomahardika/slf-kota-cilegon-provinsi-banten/" rel="noreferrer noopener" target="_blank">Cilegon</a>, dan kabupaten/kota lainnya.</p>',
    backlink: false,
  },
];

export const BRANCH_LIST = [
  {
    title: "Kota Tegal",
    address: "Jl. Mataram, Pesurungan Lor, Margadana, Tegal, Jawa Tengah 52147",
    phone_number: "0812-3499-2966",
  },
  {
    title: "Grobogan",
    address:
      "Jl. A.Yani, Ruko Ayodya 2 No.9, Kuripan, Grobogan, Jawa Tengah 58112",
    phone_number: "0852-2851-9877",
  },
  {
    title: "Yogyakarta",
    address:
      "Monjali St, Ruko Gemawang No.01, dan No.2, Gemawang, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581",
    phone_number: "0895-3430-06920",
  },
  {
    title: "DKI Jakarta",
    address:
      "Patra Kuningan, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12950",
    phone_number: "0896-0119-7275",
  },
];
