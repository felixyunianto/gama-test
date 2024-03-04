import React from "react";
import { motion } from "framer-motion";

import Reveal from "../../../../components/Reveal";
import { PILLAR_IN_HOME_LIST } from "../../../../constant/common";
import styles from "./index.module.scss";

const Pillar = () => {
  return (
    <div className={styles.pillar}>
      <div className={styles.backdrop}></div>
      <div className={styles.section}>
        <Reveal slider>
          <span>PILAR PERUSAHAAN</span>
        </Reveal>
        <Reveal slider>
          <h1 className={styles.title}>Prioritas Kualitas Dan Kepuasan</h1>
        </Reveal>
        <div className={styles.pillar_list}>
          {PILLAR_IN_HOME_LIST.map((pillar, index) => (
            <motion.div
              transition={{
                duration: 0.4,
                delay: parseFloat(`0.${index}`),
              }}
              className={styles.pillar_item}
              key={pillar.title}
              initial={{
                opacity: 0,
                x: -100,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
            >
              <img src={pillar.img} alt={pillar.title} />
              <div className={styles.pillar_item_title}>{pillar.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillar;
