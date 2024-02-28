import React from "react";
import styles from "./notFound.module.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <h1 className={styles.title}>Page Not Found</h1>
        <NavLink to={"/"}>GO TO HOME PAGE</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
