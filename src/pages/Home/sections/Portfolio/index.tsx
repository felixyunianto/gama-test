import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import Reveal from "../../../../components/Reveal";
import { portfolio } from "../../../../constant/common";

const Portfolio = () => {
  return (
    <div className={styles.portfolio_home}>
      <div className={styles.section}>
        <Reveal slider>
          <span>PT. GAMA INDO MAHARDIKA</span>
        </Reveal>
        <Reveal slider>
          <h1 className={styles.title}>Portofolio</h1>
        </Reveal>

        <div className={styles.container}>
          {portfolio?.map((item: string) => (
            <motion.div
              initial={{
                x: -20,
                opacity: 0
              }}
              whileInView={{
                x: 0,
                opacity: 1
              }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className={styles.item_list}
              key={item}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
