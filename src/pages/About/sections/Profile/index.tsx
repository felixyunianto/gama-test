import React from "react";
import cn from "classnames";
import contructionImage from "../../../../assets/images/construction.jpeg";

import styles from "./index.module.scss";
import Reveal from "../../../../components/Reveal";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.about_container}>
        <div className={styles.text_container}>
          <Reveal slider>
            <div className={styles.label}>Tentang Kami</div>
          </Reveal>
          <Reveal slider>
            <div className={styles.company_name}>PT. GAMA INDO MAHARDIKA</div>
          </Reveal>
          <div className={styles.divider} />
          <Reveal slider>
            <div className={styles.company_desc}>
              Tim kami terdiri dari banyak tenaga ahli yang berpengalaman dan
              profesional dalam menangani pekerjaan teknis terkait kebutuhan
              perijinan. Kami menjamin kualitas kinerja tim kami dalam menangani
              masalah pengurusan kebutuhan perijinan. Kami berkomitmen untuk
              melayani klien kami dengan baik dan menghasilkan tingkat kepuasan
              yang tinggi
            </div>
          </Reveal>

          <Reveal slider>
            <span className={styles.ttd}>-- GIM --</span>
          </Reveal>
        </div>
        <Reveal sliderFrom="right" slider>
          <div className={styles.image_container}>
            <img src={contructionImage} alt="" />
          </div>
        </Reveal>
      </div>
      <div className={styles.portofolio_container}>
        <div className={styles.section}>
          <Reveal>
            <div className={styles.portofolio_item}>
              <div className={styles.title}>500+</div>
              <div className={styles.description}>Klien</div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.portofolio_item}>
              <div className={styles.title}>2000+</div>
              <div className={styles.description}>
                Kontrak Selesai
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.portofolio_item}>
              <div className={styles.title}>60+</div>
              <div className={styles.description}>Tenaga Ahli</div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.portofolio_item}>
              <div className={styles.title}>1000+</div>
              <div className={styles.description}>Mitra</div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className={styles.vission_mission_container}>
        <div className={styles.vission}>
          <Reveal xPosition={-75} yPosition={0} delay={0.1}>
            <div className={styles.label}>Visi dan Misi</div>
          </Reveal>
          <Reveal xPosition={-90} yPosition={0} delay={0.2}>
            <div className={styles.title}>VISI PT. GAMA INDO MAHARDIKA</div>
          </Reveal>
          <Reveal xPosition={-100} yPosition={0} delay={0.3}>
            <p>
              Menjadi perusahaan konsultan yang terkemuka dan profesional yang
              membawa dampak positif, baik dalam bidang pengkaji teknis,
              kebumian, maupun konstruksi di Indonesia.
            </p>
          </Reveal>
        </div>
        <div className={styles.mission}>
          <div className={styles.mission_row}>
            <div className={styles.mission_column}>
              <Reveal slider className={styles.mission_card} sliderFrom="right">
                <>
                  <div className={styles.number}>01</div>
                  <div className={styles.mission_title}>Membantu</div>
                  <p>
                    Membantu pemerintah, sektor swasta, dan masyarakat dalam
                    mewujudkan bangunan gedung yang laik secara fungsi,
                    bertanggung jawab, serta berkelanjutan
                  </p>
                </>
              </Reveal>
              <Reveal
                slider
                className={cn(styles.mission_card, styles.show_mobile)}
                sliderFrom="right"
              >
                <>
                  <div className={styles.number}>02</div>
                  <div className={styles.mission_title}>Pengembangan</div>
                  <p>
                    Mengembangkan kawasan yang mampu menciptakan daya saing
                    tinggi dan nilai tambah bagi masyarakat luas
                  </p>
                </>
              </Reveal>
              <Reveal slider className={cn(styles.mission_card, styles.show_tablet)}>
                <>
                  <div className={styles.number}>03</div>
                  <div className={styles.mission_title}>Profesional</div>
                  <p>
                    Melayani dengan profesional dan fokus pada kualitas serta
                    kepuasan konsumen dengan memegangprinsip empat pilar
                    perusahaan
                  </p>
                </>
              </Reveal>
            </div>
            <div className={styles.mission_column}>
              <div className={styles.space}></div>
              <Reveal slider className={cn(styles.mission_card, styles.show_tablet)} sliderFrom="right">
                <>
                  <div className={styles.number}>02</div>
                  <div className={styles.mission_title}>Pengembangan</div>
                  <p>
                    Mengembangkan kawasan yang mampu menciptakan daya saing
                    tinggi dan nilai tambah bagi masyarakat luas
                  </p>
                </>
              </Reveal>
              <Reveal slider className={cn(styles.mission_card, styles.show_mobile)}>
                <>
                  <div className={styles.number}>03</div>
                  <div className={styles.mission_title}>Profesional</div>
                  <p>
                    Melayani dengan profesional dan fokus pada kualitas serta
                    kepuasan konsumen dengan memegangprinsip empat pilar
                    perusahaan
                  </p>
                </>
              </Reveal>

              <Reveal slider className={styles.mission_card}>
                <>
                  <div className={styles.number}>04</div>
                  <div className={styles.mission_title}>
                    Penyelesaian Masalah
                  </div>
                  <p>
                    Menyelesaikan masalah, bergerak secara sinergi, dan
                    menginspirasi perubahan.
                  </p>
                </>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
