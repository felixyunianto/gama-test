import React from "react";

import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backdrop} />
      <div className={styles.section}>
        <div className={styles.title}>Klien Kami</div>
        <div className={styles.description}>
          Kepuasan klien adalah prioritas kami.
        </div>
      </div>
    </div>
  );
};

export default Hero;
