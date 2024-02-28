import React from "react";
import styles from "./loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.blackout}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
