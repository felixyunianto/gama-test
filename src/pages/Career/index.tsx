import React from "react";
import cn from "classnames";
import Slider from "react-slick";

import stairImage from "../../assets/icon/stair_path.svg";

import moy1Image from "../../assets/images/together/1.jpg";
import moy2Image from "../../assets/images/together/2.jpg";
import moy3Image from "../../assets/images/together/3.jpg";

import styles from "./index.module.scss";
import { CAREERS } from "../../constant/common";

const MEET_OF_YEAR_IMAGES = [
  {
    image: moy1Image,
    width: 100,
  },
  {
    image: moy2Image,
    width: 200,
  },
  {
    image: moy3Image,
    width: 200,
  },
];

const Career = () => {
  const [careerSelected, setCareerSelected] = React.useState<any>(null);
  const [isOpenCareer, setIsOpenCareer] = React.useState<boolean>(false);

  const openModal = (career: any) => {
    setCareerSelected(career);
    setIsOpenCareer(true);
  };

  const closeModal = () => {
    setCareerSelected(null);
    setIsOpenCareer(false);
  };

  return (
    <div className={styles.career}>
      <div className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.hero_title}>Bergabunglah dengan tim kami</div>
          <div className={styles.hero_description}>
            Temukan posisi mu sekarang
          </div>
          <div className={styles.stair_path}>
            <img src={stairImage} alt="" />
          </div>
          <div className={cn(styles.stair_path, styles.second)}>
            <img src={stairImage} alt="" />
          </div>
        </div>

        <div className={styles.career_container}>
          {CAREERS?.map((career, index) => (
            <div className={styles.career_item} key={index}>
              <div className={styles.career_item_title}>{career.title}</div>
              <div className={styles.career_item_description}>
                {career.description}
              </div>
              <div
                className={styles.career_item_button}
                onClick={() => {
                  openModal(career);
                }}
              >
                Lihat Detail
              </div>
            </div>
          ))}
        </div>

        <div className={styles.together}>
          <div className={styles.together_title}>Rapat Tahunan</div>
          <div className={styles.together_description}>
            Kami selalu mengadakan rapat tahunan.
          </div>
          <div className={styles.together_grid}>
            <img
              src={moy1Image}
              alt="moy-1"
              className={cn(styles.grid_item, styles.grid_item_1)}
            />
            <img
              src={moy2Image}
              alt="moy-2"
              className={cn(styles.grid_item, styles.grid_item_2)}
            />
            <img
              src={moy3Image}
              alt="moy-3"
              className={cn(styles.grid_item, styles.grid_item_3)}
            />

            <div className={cn(styles.grid_item, styles.grid_item_4)}>RAPAT TAHUNAN PT. GIM</div>
          </div>
        </div>
      </div>

      <div className={cn(styles.modal, isOpenCareer && styles.active)}>
        <div className={styles.modal_content}>
          <div className={styles.modal_content_close} onClick={closeModal}>
            &times;
          </div>
          <div className={styles.modal_title}>{careerSelected?.title}</div>
          <div className={styles.modal_description}>
            {careerSelected?.description}
          </div>
          <div className={styles.modal_qualifications_title}>Kualifikasi:</div>
          <div className={styles.modal_content_row}>
            <div className={styles.modal_content_column}>
              <div className={styles.modal_qualifications_content}>
                {careerSelected?.qualifications?.map(
                  (item: string, indexQualifications: number) => (
                    <div
                      className={styles.modal_qualifications_content_item}
                      key={indexQualifications}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.modal_content_column}>
              <div className={styles.modal_content_contact}>
                <div className={styles.first_col}>Email</div>
                {careerSelected?.email}
              </div>
              <div className={styles.modal_content_contact}>
                <div className={styles.first_col}>No. Hp</div>
                {careerSelected?.phone_number}
              </div>
              <div className={styles.modal_content_contact}>
                <div className={styles.first_col}>Alamat</div>
                {careerSelected?.address}
              </div>

              <div className={styles.modal_content_note}>
                Seluruh proses rekruitmen hanya melalui email resmi kami
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
