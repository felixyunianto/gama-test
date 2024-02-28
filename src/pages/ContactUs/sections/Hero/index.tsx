import React from "react";

import heroImage from "../../../../assets/images/contact_us.png";

import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.section}>
        <div className={styles.image}>
          <img src={heroImage} alt="" />
        </div>

        <div className={styles.text_container}>
          <div className={styles.title}>Kontak Kami</div>
          <div className={styles.description}>
            KONSULTAN PERENCANA - KONSULTAN PBG - KONSULTAN SLF PENGKAJI TEKNIS
            - PERIJINAN - PENGUKURAN - PEMETAAN - GIS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
