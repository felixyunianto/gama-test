import React, { useEffect } from "react";
import videoBackground from "../../.././../assets/videos/hero-background_1.mp4";

import styles from "./index.module.scss";
import { useUtilContext } from "../../../../context";
import { Link } from "react-router-dom";

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
        <div className={styles.title}>
          Tumbuh Bersama Dalam Waktu Lebih Singkat
        </div>
        <div className={styles.description}>
          Kami terdiri dari talenta talenta pilihan yang berpengalaman, Kami akan sangat senang dengan pendapat Anda!
        </div>
        <Link to="/contact-us" className={styles.button_contact}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
