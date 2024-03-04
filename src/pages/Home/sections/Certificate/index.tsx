import React from "react";
import { motion } from "framer-motion";

import certificateImage from "../../../../assets/images/side-1.jpeg";

import styles from "./index.module.scss";
import Reveal from "../../../../components/Reveal";

const Certificate = () => {

  return (
    <div className={styles.certificate}>
      <div className={styles.section}>
        <div style={{ position: "relative", overflow: "visible" }}>
          <motion.svg
            initial="hidden"
            whileInView={"visible"}
            animate={"onscreen"}
            fill={"none"}
          >
            <motion.rect
              width="100"
              height="100"
              x="30"
              y="30"
              rx="20"
              stroke="#932387"
              strokeWidth={8}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: {
                    delay: 0.2,
                    type: "",
                    duration: 1,
                    bounce: 0,
                  },
                  opacity: { delay: 0.2, duration: 0.01 },
                },
              }}
            />
            <motion.rect
              width="100"
              height="100"
              x="370"
              y="370"
              rx="20"
              stroke="#932387"
              strokeWidth={8}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: {
                    delay: 0.2,
                    type: "spring",
                    duration: 1,
                    bounce: 0,
                  },
                  opacity: { delay: 0.2, duration: 0.01 },
                },
              }}
            />
          </motion.svg>
          <div className={styles.image}>
            <motion.img
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: false }}
              src={certificateImage}
              alt="certificate-prove"
            />
          </div>
        </div>

        <div className={styles.text_container}>
          <Reveal slider>
            <span>KONSULTAN SLF</span>
          </Reveal>
          <Reveal slider>
            <h1 className={styles.title}>
              Tersertifikasi Sistem Manajemen Mutu
            </h1>
          </Reveal>
          <Reveal yPosition={-75} slider delay={0.3} sliderFrom="right">
            <p className={styles.description}>
              Sebagai perusahaan yang tersertifikasi ISO 9001: 2015 (Sistem
              Manajemen Mutu), kami melayani pengurusan SLF atau sertifikat laik
              fungsi. Kami berkomitmen untuk melayani klien kamu dengan baik dan
              menghasilkan tingkat kepuasan yang tinggi.
            </p>
          </Reveal>
          <Reveal yPosition={-75} slider delay={0.3} sliderFrom="right">
            <p className={styles.description}>PT Gama Indo Mahardika</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
