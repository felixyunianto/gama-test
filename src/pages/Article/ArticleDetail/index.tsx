import React from "react";
import { useParams } from "react-router-dom";
import { ARTICLES } from "../../../constant/common";
import { convertDate } from "../../../helpers/convertDate";

import styles from "./index.module.scss";

import calendarIcon from "../../../assets/icon/fi-br-scale.svg";
import userIcon from "../../../assets/icon/fi-br-user.svg";

const ArticleDetail = () => {
  const { slug } = useParams();

  const [content, setContent] = React.useState<any>(null);

  React.useEffect(() => {
    if (slug) {
      setContent(ARTICLES.find((article) => article.title === slug));
    }
  }, [slug]);

  return (
    <div className={styles.article_detail}>
      <div className={styles.section}>
        <div className={styles.image}>
          <img src={content?.thumbnail} alt="thumbnail" />
        </div>
        <div className={styles.title}>{content?.title}</div>
        <div className={styles.creator_container}>
          <div className={styles.date}>
            <img src={calendarIcon} alt="date" className={styles.icon} />
            {convertDate(new Date(content?.created_at), "ddd, DD MM YYYY")}
          </div>
          <div className={styles.author}>
            <img src={userIcon} alt="date" className={styles.icon} />
            {content?.username}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content?.content }}
          className={styles.content}
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
