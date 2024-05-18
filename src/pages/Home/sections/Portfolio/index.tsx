import React from "react";
import { motion } from "framer-motion";
import Reveal from "../../../../components/Reveal";
import { portfolio } from "../../../../constant/common";
import { useSearchParams } from "react-router-dom";
import styles from "./index.module.scss";
import ReactPaginate from "react-paginate";

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [blogPosts, setBlogPosts] = React.useState<any>([]);
  const [postsPerPage] = React.useState<number>(30);

  const indexOfLastPost = (searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = portfolio.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }: { selected: number }) => {
    setSearchParams({page: `${selected + 1}`})
  };

  React.useEffect(() => {
    setBlogPosts(portfolio);
  }, []);

  return (
    <div className={styles.portfolio_home}>
      <div className={styles.section}>
        <Reveal slider>
          <span>PT. GAMA INDO MAHARDIKA</span>
        </Reveal>
        <Reveal slider>
          <h1 className={styles.title}>Portofolio</h1>
        </Reveal>

        <div className={styles.container}>
          {currentPosts?.map((item: string) => (
            <motion.div
              initial={{
                x: -20,
                opacity: 0
              }}
              whileInView={{
                x: 0,
                opacity: 1
              }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className={styles.item_list}
              key={item}
            >
              {item}
            </motion.div>
          ))}
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
          disabledClassName={styles.disabled}
          forcePage={(searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1) - 1}
        />
      </div>
    </div>
  );
};

export default Portfolio;
