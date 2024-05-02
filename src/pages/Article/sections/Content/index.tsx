import React, { useEffect, useState } from "react";
import { ARTICLES } from "../../../../constant/common";
import { Link } from "react-router-dom";
import { convertDate } from "../../../../helpers/convertDate";
import ReactPaginate from "react-paginate";

import styles from "./index.module.scss";

const Content = () => {
  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ARTICLES.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setBlogPosts(ARTICLES);
  }, [currentPage]);

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <div className={styles.title}>Article</div>
        <div className={styles.description}>
          Artikel kami dan artikel terbaru. Temukan apa pun yang ingin Anda
          ketahui tentang kami.
        </div>

        <div className={styles.grid}>
          {currentPosts.map((article) => {
            return (
              !article.backlink && (
                <div
                  className={styles.grid_item}
                  key={`article-${article.title}`}
                >
                  <img src={article.thumbnail} alt={article.title} />
                  <div className={styles.article_title}>{article.title}</div>
                  <div className={styles.article_date}>
                    {convertDate(
                      new Date(article.created_at),
                      "ddd, DD MMMM Y"
                    )}
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
        <ReactPaginate
          breakLabel="..."
          onPageChange={paginate}
          pageCount={Math.ceil(blogPosts.length / postsPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.page_number}
          previousLinkClassName={styles.page_number}
          nextLinkClassName={styles.page_number}
          activeLinkClassName={styles.active}
        />
      </div>
    </div>
  );
};

export default Content;
