import React from "react";

import { motion } from "framer-motion";
import cn from "classnames";
import Slider from "react-slick";

import styles from "./index.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gallery1 from "../../../../assets/images/gallery/1.jpg";
import gallery2 from "../../../../assets/images/gallery/2.jpg";
import gallery3 from "../../../../assets/images/gallery/3.jpg";
import gallery4 from "../../../../assets/images/gallery/4.jpg";
import gallery5 from "../../../../assets/images/gallery/5.jpg";
import gallery6 from "../../../../assets/images/gallery/6.jpg";
import gallery7 from "../../../../assets/images/gallery/7.jpg";

import carousel1 from "../../../../assets/images/gallery/survey/1.jpg";
import carousel2 from "../../../../assets/images/gallery/survey/2.jpg";
import carousel3 from "../../../../assets/images/gallery/survey/3.jpg";
import carousel4 from "../../../../assets/images/gallery/survey/4.jpg";
import carousel5 from "../../../../assets/images/gallery/survey/5.jpg";
import carousel6 from "../../../../assets/images/gallery/survey/6.jpg";
import carousel7 from "../../../../assets/images/gallery/survey/7.jpg";
import carousel8 from "../../../../assets/images/gallery/survey/8.jpg";
import carousel9 from "../../../../assets/images/gallery/survey/9.jpg";
import carousel10 from "../../../../assets/images/gallery/survey/10.jpg";
import carousel11 from "../../../../assets/images/gallery/survey/11.jpg";
import carousel12 from "../../../../assets/images/gallery/survey/12.jpg";
import carousel13 from "../../../../assets/images/gallery/survey/13.jpg";
import carousel14 from "../../../../assets/images/gallery/survey/14.jpg";
import carousel15 from "../../../../assets/images/gallery/survey/15.jpeg";
import carousel16 from "../../../../assets/images/gallery/survey/16.jpeg";
import carousel17 from "../../../../assets/images/gallery/survey/17.jpeg";

import gallery8 from "../../../../assets/images/gallery/8.jpg";
import gallery9 from "../../../../assets/images/gallery/9.jpg";
import gallery10 from "../../../../assets/images/gallery/10.jpg";
import gallery11 from "../../../../assets/images/gallery/11.jpg";
import gallery12 from "../../../../assets/images/gallery/12.jpg";
import gallery13 from "../../../../assets/images/gallery/13.jpg";

import gallery14 from "../../../../assets/images/gallery/add_new/1.jpeg";
import gallery15 from "../../../../assets/images/gallery/add_new/2.jpeg";
import gallery16 from "../../../../assets/images/gallery/add_new/3.jpeg";
import gallery17 from "../../../../assets/images/gallery/add_new/4.jpeg";
import gallery18 from "../../../../assets/images/gallery/add_new/5.jpeg";
import gallery19 from "../../../../assets/images/gallery/add_new/6.jpeg";
import gallery20 from "../../../../assets/images/gallery/add_new/7.jpeg";
import gallery21 from "../../../../assets/images/gallery/add_new/8.jpeg";
import gallery22 from "../../../../assets/images/gallery/add_new/9.jpeg";
import gallery23 from "../../../../assets/images/gallery/add_new/10.jpeg";
import gallery24 from "../../../../assets/images/gallery/add_new/11.jpeg";
import gallery25 from "../../../../assets/images/gallery/add_new/12.jpeg";
import gallery26 from "../../../../assets/images/gallery/add_new/13.jpeg";

const Gallery = () => {
  const settings = {
    dots: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.section}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_1)}
          >
            <img src={gallery1} alt="gallery-1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_2)}
          >
            <img src={gallery2} alt="gallery-2" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_3)}
          >
            <img src={gallery3} alt="gallery-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_4)}
          >
            <img src={gallery4} alt="gallery-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_5)}
          >
            <img src={gallery5} alt="gallery-5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_6)}
          >
            <img src={gallery6} alt="gallery-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_7)}
          >
            <img src={gallery7} alt="gallery-7" />
          </motion.div>
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={cn(styles.section, styles.carousel_section)}>
          <Slider {...settings}>
            <div className={styles.carousel_item}>
              <img src={carousel1} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel2} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel3} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel4} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel5} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel6} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel7} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel8} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel9} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel10} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel11} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel12} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel13} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel14} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel15} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel16} alt="" />
            </div>
            <div className={styles.carousel_item}>
              <img src={carousel17} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.section}>
        <div className={cn(styles.grid, styles.second_grid)}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_8)}
          >
            <img src={gallery8} alt="gallery-8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_9)}
          >
            <img src={gallery9} alt="gallery-9" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_10)}
          >
            <img src={gallery10} alt="gallery-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_11)}
          >
            <img src={gallery11} alt="gallery-11" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_12)}
          >
            <img src={gallery12} alt="gallery-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_13)}
          >
            <img src={gallery13} alt="gallery-13" />
          </motion.div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={cn(styles.grid, styles.third_grid)}>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_18)}
          >
            <img src={gallery18} alt="gallery-18" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_14)}
          >
            <img src={gallery14} alt="gallery-14" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_15)}
          >
            <img src={gallery15} alt="gallery-15" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_16)}
          >
            <img src={gallery16} alt="gallery-16" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_17)}
          >
            <img src={gallery17} alt="gallery-17" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_18)}
          >
            <img src={gallery18} alt="gallery-18" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_19)}
          >
            <img src={gallery19} alt="gallery-19" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_20)}
          >
            <img src={gallery20} alt="gallery-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_21)}
          >
            <img src={gallery21} alt="gallery-21" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_22)}
          >
            <img src={gallery22} alt="gallery-22" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_23)}
          >
            <img src={gallery23} alt="gallery-23" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_24)}
          >
            <img src={gallery24} alt="gallery-24" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_25)}
          >
            <img src={gallery25} alt="gallery-25" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item, styles.gallery_item_26)}
          >
            <img src={gallery26} alt="gallery-26" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
