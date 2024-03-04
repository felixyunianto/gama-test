import React from "react";
import { ARTICLES } from "../../../../constant/common";
import { Link } from "react-router-dom";
import { convertDate } from "../../../../helpers/convertDate";

import styles from "./index.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <div className={styles.title}>Article</div>
        <div className={styles.description}>
          Artikel kami dan artile terbaru. Temukan apa pun yang ingin Anda
          ketahui tentang kami.
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((article) => {
            return (
              !article.backlink && (
                <div
                  className={styles.grid_item}
                  key={`article-${article.title}`}
                >
                  <img src={article.thumbnail} alt={article.title} />
                  <div className={styles.article_title}>{article.title}</div>
                  <div className={styles.article_date}>
                    {convertDate(new Date(article.created_at), 'ddd, DD MMMM Y')}
                  </div>
                  <div className={styles.article_content}>
                    {article.description}
                  </div>
                  <Link
                    to={`${encodeURIComponent(article.title)}`}
                    className={styles.read_more}
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
