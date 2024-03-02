import React from "react";
import cn from "classnames";
import logo from "../../assets/images/logo.png";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <img src={logo} alt="logo-footer" />
          </div>
          <div className={styles.company_name}>PT. GAMA INDO MAHARDIKA</div>
          <div className={styles.company_desc}>
            Kami berkomitmen untuk melayani klien kami dengan baik dan
            menghasilkan tingkat kepuasan yang tinggi
          </div>
        </div>
        <div className={cn(styles.col, styles.center)}>
          <div className="">
            <div className={styles.title}>Navigasi</div>
            <div className={styles.nav_list}>
              <NavLink to="/" className={styles.link}>
                Beranda
              </NavLink>
              <NavLink to="/about" className={styles.link}>
                Tentang
              </NavLink>
              <NavLink to="/service" className={styles.link}>
                Layanan
              </NavLink>
              <NavLink to="/client" className={styles.link}>
                Klien
              </NavLink>
              <NavLink to="/article" className={styles.link}>
                Artikel
              </NavLink>
              <NavLink to="/contact-us" className={styles.link}>
                Kontak Kami
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Jam Kerja</div>
          <div>08.00 - 17.00, Senin - Jumat</div>
          <div className={styles.description}>
            Kami melayani pengurusan SLF atau sertifikat laik fungsi.
          </div>
          <button>Kontak Kami</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
