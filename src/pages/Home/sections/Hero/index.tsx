import React from "react";
import { motion } from "framer-motion";
import videoBackground from "../../.././../assets/videos/hero-background.mp4";

import styles from "./index.module.scss";

const Hero = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <video loop muted autoPlay preload="auto">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.backdrop}>
        <div className={styles.company_name}>PT. GAMA INDO MAHARDIKA</div>
        <div className={styles.title}>Growing More In Less Time</div>
        <div className={styles.description}>
          Our team consists of great talents with experience in Architecture,
          Civil, MEP, and Geosciences, we would love to hear from you!
        </div>
        <button className={styles.button_contact}>Contact Us</button>
      </div>
    </motion.div>
  );
};

export default Hero;
