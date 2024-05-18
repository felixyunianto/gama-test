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

import new_1 from "../../../../assets/images/gallery/new_photos/1.jpeg";
import new_2 from "../../../../assets/images/gallery/new_photos/2.jpeg";
import new_3 from "../../../../assets/images/gallery/new_photos/3.jpeg";
import new_4 from "../../../../assets/images/gallery/new_photos/4.jpeg";
import new_5 from "../../../../assets/images/gallery/new_photos/5.jpeg";
import new_6 from "../../../../assets/images/gallery/new_photos/6.jpeg";
import new_7 from "../../../../assets/images/gallery/new_photos/7.jpeg";
import new_8 from "../../../../assets/images/gallery/new_photos/8.jpeg";
import new_9 from "../../../../assets/images/gallery/new_photos/9.jpeg";
import new_10 from "../../../../assets/images/gallery/new_photos/10.jpeg";
import new_11 from "../../../../assets/images/gallery/new_photos/11.jpeg";
import new_12 from "../../../../assets/images/gallery/new_photos/12.jpeg";
import new_13 from "../../../../assets/images/gallery/new_photos/13.jpeg";
import new_14 from "../../../../assets/images/gallery/new_photos/14.jpeg";
import new_15 from "../../../../assets/images/gallery/new_photos/15.jpeg";
import new_16 from "../../../../assets/images/gallery/new_photos/16.jpeg";
import new_17 from "../../../../assets/images/gallery/new_photos/17.jpeg";
import new_18 from "../../../../assets/images/gallery/new_photos/18.jpeg";
import new_19 from "../../../../assets/images/gallery/new_photos/19.jpeg";
import new_20 from "../../../../assets/images/gallery/new_photos/20.jpeg";

import new_21 from "../../../../assets/images/gallery/new_photos/21.jpg";
import new_22 from "../../../../assets/images/gallery/new_photos/22.jpg";
import new_23 from "../../../../assets/images/gallery/new_photos/23.jpg";
import new_24 from "../../../../assets/images/gallery/new_photos/24.jpg";
import new_25 from "../../../../assets/images/gallery/new_photos/25.jpg";
import new_26 from "../../../../assets/images/gallery/new_photos/26.jpg";
import new_27 from "../../../../assets/images/gallery/new_photos/27.jpg";
import new_28 from "../../../../assets/images/gallery/new_photos/28.jpg";
import new_29 from "../../../../assets/images/gallery/new_photos/29.jpg";
import new_30 from "../../../../assets/images/gallery/new_photos/30.jpg";
import new_31 from "../../../../assets/images/gallery/new_photos/31.jpg";
import new_32 from "../../../../assets/images/gallery/new_photos/32.jpg";
import new_33 from "../../../../assets/images/gallery/new_photos/33.jpg";
import new_34 from "../../../../assets/images/gallery/new_photos/34.jpg";
import new_35 from "../../../../assets/images/gallery/new_photos/35.jpg";
import new_36 from "../../../../assets/images/gallery/new_photos/36.jpg";
import new_37 from "../../../../assets/images/gallery/new_photos/37.jpg";
import new_38 from "../../../../assets/images/gallery/new_photos/38.jpg";
import new_39 from "../../../../assets/images/gallery/new_photos/39.jpg";
import new_40 from "../../../../assets/images/gallery/new_photos/40.jpg";
import new_41 from "../../../../assets/images/gallery/new_photos/41.jpg";
import new_42 from "../../../../assets/images/gallery/new_photos/42.jpg";
import new_43 from "../../../../assets/images/gallery/new_photos/43.jpg";
import new_44 from "../../../../assets/images/gallery/new_photos/44.jpeg";
import new_45 from "../../../../assets/images/gallery/new_photos/45.jpg";
import new_46 from "../../../../assets/images/gallery/new_photos/46.jpg";
import new_47 from "../../../../assets/images/gallery/new_photos/47.jpeg";
import new_48 from "../../../../assets/images/gallery/new_photos/48.jpg";
import new_49 from "../../../../assets/images/gallery/new_photos/49.jpg";
import new_50 from "../../../../assets/images/gallery/new_photos/50.jpg";
import new_51 from "../../../../assets/images/gallery/new_photos/51.jpeg";

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

      <div className={styles.section}>
        <div className={cn(styles.grid, styles.fourth_grid)}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_1} alt="new_1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_2} alt="new_2" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_3} alt="new_3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_4} alt="new_4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_5} alt="new_5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_6} alt="new_6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_7} alt="new_7" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_8} alt="new_8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_9} alt="new_9" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_10} alt="new_10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_11} alt="new_11" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_12} alt="new_12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_13} alt="new_13" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_14} alt="new_14" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_15} alt="new_15" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_16} alt="new_16" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_17} alt="new_17" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_18} alt="new_18" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_19} alt="new_19" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_20} alt="new_20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_21} alt="new_21" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_22} alt="new_22" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_23} alt="new_23" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_24} alt="new_24" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_25} alt="new_25" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_26} alt="new_26" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_27} alt="new_27" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_28} alt="new_28" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_29} alt="new_29" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_30} alt="new_30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_31} alt="new_31" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_32} alt="new_32" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_33} alt="new_33" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_34} alt="new_34" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_35} alt="new_35" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_36} alt="new_36" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_37} alt="new_37" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_38} alt="new_38" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_39} alt="new_39" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_40} alt="new_40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_41} alt="new_41" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_42} alt="new_42" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_43} alt="new_43" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_44} alt="new_44" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_45} alt="new_45" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_46} alt="new_46" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_47} alt="new_47" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_48} alt="new_48" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_49} alt="new_49" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_50} alt="new_50" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(styles.gallery_item)}
          >
            <img src={new_51} alt="new_51" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
