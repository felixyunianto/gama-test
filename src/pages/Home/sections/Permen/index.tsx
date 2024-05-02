import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";

import styles from "./index.module.scss";

const Permen = () => {
  return (
    <div className={styles.permen}>
      <motion.div
        className={styles.section}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0, x: 100 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.circle}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(styles.circle, styles.small)}
        />
        <div className={styles.title}>Landasan Peraturan Pemerintah</div>
        <div className={styles.description}>Berlandaskan dengan Peraturan Pemerintah yang tercantumkan sebagai berikut:</div>
        <ol className={styles.list_content}>
          <li>
            Peraturan Pemerintah (PP) Nomor 16 Tahun 2021 tentang Peraturan
            Pelaksanaan Undang-Undang Nomor 28 Tahun 2002 tentang Bangunan
            Gedung
          </li>
          <li>
            Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor
            19/PRT/M/2018 Tahun 2018 tentang Penyelenggaraan Izin Mendirikan
            Bangunan Gedung Dan Sertifikat Laik Fungsi Bangunan Gedung Melalui
            Pelayanan Perizinan Berusaha Terintegrasi Secara Elektronik
          </li>
          <li>
            Peraturan Pemerintah (PP) Nomor 22 Tahun 2021 tentang
            Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup
          </li>
          <li>
            Peraturan Pemerintah (PP) Nomor 30 Tahun 2021 tentang
            Penyelenggaraan Bidang Lalu Lintas dan Angkutan Jalan
          </li>
        </ol>
      </motion.div>
    </div>
  );
};

export default Permen;
