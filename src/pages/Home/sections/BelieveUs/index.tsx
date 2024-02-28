import React from "react";
import { motion } from "framer-motion";

import Reveal from "../../../../components/Reveal";

import amazonImage from "../../../../assets/images/clients/amazon.png";
import ayolaImage from "../../../../assets/images/clients/ayola.png";
import bigImage from "../../../../assets/images/clients/badan-informasi-geospasial.png";
import epsonImage from "../../../../assets/images/clients/epson.png";
import indosatImage from "../../../../assets/images/clients/indosat.png";
import komitelImage from "../../../../assets/images/clients/komitel.png";
import pertaminaImage from "../../../../assets/images/clients/pertamina-persero.png";
import pratamaImage from "../../../../assets/images/clients/pratama.png";
import salokaImage from "../../../../assets/images/clients/saloka.png";
import xlImage from "../../../../assets/images/clients/xl.png";

import styles from "./index.module.scss";

const IMAGES = [
  amazonImage,
  ayolaImage,
  bigImage,
  epsonImage,
  indosatImage,
  komitelImage,
  pertaminaImage,
  pratamaImage,
  salokaImage,
  xlImage,
];

const BelieveUs = () => {
  return (
    <div className={styles.believe}>
      <div className={styles.section}>
        <Reveal slider>
          <span>PT. GAMA INDO MAHARDIKA</span>
        </Reveal>
        <Reveal slider>
          <h1 className={styles.title}>They Believe In Us</h1>
        </Reveal>
        <div className={styles.client}>
          {IMAGES.map((item, index) => (
            <motion.div
              transition={{
                duration: 0.4,
                delay: parseFloat(`0.${index}`),
              }}
              className={styles.client_item}
              key={`client-${index}`}
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
              <img src={item} alt={`client-${index}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelieveUs;
