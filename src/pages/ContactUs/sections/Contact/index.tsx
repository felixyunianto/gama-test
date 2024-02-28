import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import phoneIcon from "../../../../assets/icon/fi-sr-phone-call.svg";
import emailIcon from "../../../../assets/icon/fi-sr-envelope.svg";
import markerIcon from "../../../../assets/icon/fi-sr-marker.svg";
import buildingIcon from "../../../../assets/icon/fi-sr-building.svg";

import styles from "./index.module.scss";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [16, 24],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.section}>
        <div className={styles.map}>
          <MapContainer
            center={[-6.7539358, 111.0267049]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ width: "100%", height: 500, zIndex: 0 }}
            zoomControl={false}
            doubleClickZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-6.7539358, 111.0267049]}></Marker>
          </MapContainer>
        </div>
        <div className={styles.text_container}>
          <div className={styles.title}>Hubungi Kami</div>
          <div className={styles.description}>
            Kami merupakan perusahaan konsultan yang telah merintis sejak tahun
            2019, Berbagai proyek terkait perencanaan, pemetaan, gambar rencana
            bangunan (Detail Engineering Design), gambar re-drawing (As Built
            Drawing), Konsultan Persetujuan Bangunan Gedung dan Sertifikat Laik
            Fungsi Bangunan, Dokumen Lingkungan telah kami selesaikan dengan
            baik.Pada tahun 2019 kami meresmikan nama Perusahaan Kami adalah PT
            Geospasial Insan Mulia sebagai merk Perusahaan Konsultansi kami dan
            di bawah legalitas resmi. Berbagai klien mulai dari perorangan,
            perusahaan kecil hingga perusahaan besar, bangunan pemerintah /
            dinas, Pemilik Modal Dalam Negeri (PMDM) dan Pemilik Modal Asing
            (PMA) telah kami tangani, dan berhasil menyelesaikan kebutuhan
            perijinan dengan baik. Setelah menangani ratusan klien dan dengan
            berkembangnya perusahaan, pada tahun 2023 kami beralih nama menjadi
            <b>&nbsp;PT GAMA INDO MAHARDIKA</b>.
          </div>
          <div className={styles.contact_list}>
            <div className={styles.contact_item}>
              <div className={styles.icon}>
                <img src={phoneIcon} alt="" />
              </div>
              <div className={styles.text}> (0283) 4536870</div>
            </div>
            <div className={styles.contact_item}>
              <div className={styles.icon}>
                <img src={emailIcon} alt="" />
              </div>
              <div className={styles.text}> gamaindomahardika@gmail.com</div>
            </div>
            <div className={styles.contact_item}>
              <div className={styles.icon}>
                <img src={markerIcon} alt="" />
              </div>
              <div className={styles.text}>
                Jl. Mataram No. 9 – Pesurungan Lor, Margadana Kota Tegal, Jawa
                Tengah 52147
              </div>
            </div>
            <div className={styles.contact_item}>
              <div className={styles.icon}>
                <img src={buildingIcon} alt="" />
              </div>
              <div className={styles.text}>PT. GAMA INDO MAHARDIKA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
