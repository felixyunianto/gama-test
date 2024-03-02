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

export const SERVICE_IN_HOME_LIST = [
  {
    title: "Desain & Perencanaan",
    description:
      "Desain konstruksi, perhitungan, pemetaan, desain lanskap, pengawasan",
    img: designPlanningImage,
  },
  {
    title: "Izin Lingkungan",
    description:
      "Pengurusan AMDAL, Andalalin, UKL-UPL, monitoring lingkungan, Pertimbangan Teknis",
    img: environmentPrivImage,
  },
  {
    title: "Izin Bangunan",
    description:
      "Pengurusan SLF, IMB atau PBG, audit bangunan, lisensi K3, dsb",
    img: buildingPrivImage,
  },
  {
    title: "Manajemen Konstruksi",
    description:
      "Analisis dan bantuan proyek pembangunan yang menempatkan aspek keberlanjutan",
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
      "PKKPR/SKRK/KRK/SKIR/TTR/FPR/Izin tata Ruang Lainnya.",
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
