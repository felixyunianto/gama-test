import React from "react";

import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={styles.center_body}>
      <div className={styles.loader}>
        Loading
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
