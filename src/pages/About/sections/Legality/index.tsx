import React, { useState } from "react";

import { LEGALITIES } from "../../../../constant/common";
import iconEye from "../../../../assets/icon/ic-eye.svg";
import styles from "./index.module.scss";

const Legality = () => {
  const [currentPdf, setCurrentPdf] = useState<any>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const closePreview = () => {
    setShowModal(false);

  };

  const openPreview = (pdf: any) => {
    setShowModal(true);
    setCurrentPdf(pdf);
  };


  return (
    <>
      <div className={styles.legality}>
        <div className={styles.section}>
          <div className={styles.text_container}>
            <div className={styles.title}>Legalitas Kami</div>
            <div className={styles.description}>
              Berlegalitas dan Terpercaya
            </div>
          </div>
          <div className={styles.legality_list}>
            {LEGALITIES.map((legality) => (
              <div
                key={legality.name}
                className={styles.legality_list_item}
                onClick={() => {
                  openPreview(legality.pdf);
                }}
              >
                {legality.name}
                <img src={iconEye} alt={"preview-eye"} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.preview_modal}>
          <div className={styles.backdrop} onClick={closePreview}/>
          <div className={styles.modal_container}>
            <div className={styles.close_button} onClick={closePreview}>
              &times;
            </div>
            <div className={styles.pdf_viewer}>
              <iframe src={currentPdf} width={"100%"} height={"100%"}></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Legality;
