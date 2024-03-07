import React from "react";
import { motion } from "framer-motion";

import { SERVICE_IN_HOME_LIST } from "../../../../constant/common";
import Reveal from "../../../../components/Reveal";
import styles from "./index.module.scss";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.section}>
        <Reveal slider>
          <span>LAYANAN</span>
        </Reveal>
        <Reveal slider>
          <h1 className={styles.title}>Apa Yang Kami Tawarkan?</h1>
        </Reveal>
        <div className={styles.services_list}>
          {SERVICE_IN_HOME_LIST.map((service, index) => (
            <motion.div
              transition={{
                duration: 0.4,
                delay: parseFloat(`0.${index}`),
              }}
              className={styles.service_item}
              key={service.title}
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
              <img src={service.img} alt={service.title} />
              <div className={styles.text_container}>
                <div className={styles.service_item_title}>{service.title}</div>
                <p className={styles.service_item_description}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
