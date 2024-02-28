import React from "react";
import { motion } from "framer-motion";

import circlePath from "../../../../assets/icon/circle_path.svg";
import linePath from "../../../../assets/icon/line_path.svg";

import styles from "./index.module.scss";
import { SERVICES_LIST } from "../../../../constant/common";

const Hero = () => {
  const delay = 0.01;
  return (
    <div className={styles.hero}>
      <div className={styles.section}>
        <img src={circlePath} alt="" className={styles.circle_path} />
        <img src={linePath} alt="" className={styles.line_path} />
        <div className={styles.title}>
          {`Kami adalah perusahaan yang bergerak dibidang perizinan.`
            .split("")
            .map((item, index) => (
              <motion.span
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: delay * (index + 5),
                }}
              >
                {item}
              </motion.span>
            ))}
        </div>
        <div className={styles.service_list}>
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.5,
                delay: parseFloat(`0.` + index + 1),
              }}
              className={styles.service_item}
              key={service.title}
            >
              <img src={service.image} alt={service.title} />
              <div className={styles.title}>{service.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
