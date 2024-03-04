import React, { useEffect } from "react";
import videoBackground from "../../.././../assets/videos/hero-background.mp4";

import styles from "./index.module.scss";
import { useUtilContext } from "../../../../context";

const Hero = () => {
  const { setLoading } = useUtilContext();

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={styles.hero}>
      <video
        loop
        muted
        autoPlay
        preload="auto"
        onCanPlayThrough={() => {
          setLoading(false);
        }}
      >
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
    </div>
  );
};

export default Hero;
