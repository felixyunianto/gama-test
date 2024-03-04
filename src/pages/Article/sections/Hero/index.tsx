import React, { useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./index.module.scss";
import { useUtilContext } from "../../../../context";

const Hero = () => {
  const { setLoading } = useUtilContext();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={styles.hero}
    >
      <div className={styles.description}>Article</div>
      <div className={styles.title}>PT. GAMA INDO MAHARDIKA</div>
    </motion.div>
  );
};

export default Hero;
