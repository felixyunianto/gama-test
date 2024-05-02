import React from "react";
import { motion } from "framer-motion";

import Reveal from "../../../../components/Reveal";

import amazonImage from "../../../../assets/images/clients/amazon.png";
import ayolaImage from "../../../../assets/images/clients/ayola.png";
import bigImage from "../../../../assets/images/clients/badan-informasi-geospasial.png";
import epsonImage from "../../../../assets/images/clients/epson.png";
import indosatImage from "../../../../assets/images/clients/indosat.png";
import mitratelImage from "../../../../assets/images/clients/mitratel.png";
import pertaminaImage from "../../../../assets/images/clients/pertamina-persero.png";
import pratamaImage from "../../../../assets/images/clients/pratama.png";
import salokaImage from "../../../../assets/images/clients/saloka.png";
import xlImage from "../../../../assets/images/clients/xl.png";
import kadtrImage from "../../../../assets/images/clients/kementrian-agraris-dan-tata-ruang.png";
import elleairImage from "../../../../assets/images/clients/elleair.png";
import jfeImage from "../../../../assets/images/clients/jfe.png";
import daiwaHouseImage from "../../../../assets/images/clients/daiwa-house.png";
import tokaiRikaImage from "../../../../assets/images/clients/tokai-rika.png";
import mayoraImage from "../../../../assets/images/clients/mayora.png";
import aksImage from "../../../../assets/images/clients/aks.png";
import sibelcoImage from "../../../../assets/images/clients/sibelco.png";
import chemcoImage from "../../../../assets/images/clients/chemco-harapan-nusantara.png";
import gunungRajaPaksiImage from "../../../../assets/images/clients/gunung-raja-paksi.png";
import briImage from "../../../../assets/images/clients/logo-bri.png";
import bsiImage from "../../../../assets/images/clients/logo-bsi.png";
import nestleImage from "../../../../assets/images/clients/nestle-logo.png";
import hyundaiTransysImage from "../../../../assets/images/clients/hyundai-transys-logo.png";

import styles from "./index.module.scss";

const IMAGES = [
  amazonImage,
  ayolaImage,
  bigImage,
  epsonImage,
  indosatImage,
  mitratelImage,
  pertaminaImage,
  pratamaImage,
  salokaImage,
  xlImage,
  kadtrImage,
  elleairImage,
  jfeImage,
  daiwaHouseImage,
  tokaiRikaImage,
  mayoraImage,
  aksImage,
  sibelcoImage,
  chemcoImage,
  gunungRajaPaksiImage,
  briImage,
  bsiImage,
  nestleImage,
  hyundaiTransysImage,
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
                x: -30,
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
