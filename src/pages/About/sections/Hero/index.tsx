import React from "react";
import { motion } from "framer-motion";

import styles from "./index.module.scss";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={styles.hero}
    >
      <div className={styles.backdrop}></div>
      <div className={styles.title}>Profile Perusahaan</div>
      <div className={styles.description}>PT. GAMA INDO MAHARDIKA</div>
    </motion.div>
  );
};

export default Hero;
