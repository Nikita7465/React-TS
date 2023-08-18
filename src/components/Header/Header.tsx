import React from "react";
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";
import Btn from "../UI/Btn/Btn";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <span className={styles.logo}>
            <NavLink to={"/"}>
              <img src="logo.svg" alt="" className={styles.logoImg} />
            </NavLink>
          </span>
          <NavLink to={"/about"} className={styles.navLink}>
            About
          </NavLink>
          <NavLink to={"/gallery"} className={styles.navLink}>
            Gallery
          </NavLink>
          <NavLink to={"/pricing"} className={styles.navLink}>
            Pricing
          </NavLink>
          <NavLink to={"/faq"} className={styles.navLink}>
            FAQ
          </NavLink>
          <NavLink to={"/benefits"} className={styles.navLink}>
            Benefits
          </NavLink>
        </nav>
        <div className={styles.btnsWrap}>
          <Btn>Sign In</Btn>
          <Btn>Sign Up</Btn>
        </div>
      </div>
    </div>
  );
};

export default Header;
