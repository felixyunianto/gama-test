import React from "react";
import { motion } from "framer-motion";

import { SERVICES_LIST } from "../../../../constant/common";

import styles from "./index.module.scss";
import Reveal from "../../../../components/Reveal";
const ServiceList = () => {
  return (
    <div className={styles.services}>
      <div className={styles.section}>
        <Reveal slider>
          <div className={styles.title}>Produk dan Layanan</div>
        </Reveal>
        <Reveal slider>
          <div className={styles.description}>
            Kami berkomitmen untuk melayani klien kami dengan baik dan
            menghasilkan tingkat kepuasan yang tinggi.
          </div>
        </Reveal>
        
        <div className={styles.service_list}>
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              className={styles.service_item}
              key={index}
              data-count={index + 1}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: parseFloat(`0.` + index + 1),
              }}
            >
              <div className={styles.image}>
                <img src={service.image} alt="" />
              </div>
              <div className={styles.title}>{service.title}</div>
              <div className={styles.description}>{service.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
