import React from "react";

import { motion } from "framer-motion";

import styles from "./index.module.scss";
import { BRANCH_LIST } from "../../../../constant/common";

const Branch = () => {
  const onClickPhoneNumber = (phone_number: any) => {
    let number = phone_number.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    let url = `https://wa.me/${number}`;


    window.open(url);
  };

  return (
    <div className={styles.branch}>
      <div className={styles.section}>
        <div className={styles.title}>Daftar Kontak Cabang</div>
        <div className={styles.branch_list}>
          {BRANCH_LIST.map((branch, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className={styles.branch_item}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#932387"
                  fillOpacity="1"
                  d="M0,32L48,48C96,64,192,96,288,138.7C384,181,480,235,576,261.3C672,288,768,288,864,250.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className={styles.text_container}>
                <div className={styles.name}>{branch.title}</div>
                <div className={styles.address}>{branch.address}</div>
                <div className={styles.phone_number} onClick={() => {
                  onClickPhoneNumber(branch.phone_number)
                }}>{branch.phone_number}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branch;
