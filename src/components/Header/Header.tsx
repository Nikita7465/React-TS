import React from "react";
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";
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

          <NavLink
            to={"/about"}
            className={`${
              window.location.pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={`${
              window.location.pathname === "/gallery" ? styles.active : ""
            }`}
          >
            Gallery
          </NavLink>
          <NavLink
            to={"/pricing"}
            className={`${
              window.location.pathname === "/pricing" ? styles.active : ""
            }`}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"/faq"}
            className={`${
              window.location.pathname === "/faq" ? styles.active : ""
            }`}
          >
            FAQ
          </NavLink>
          <NavLink
            to={"/benefits"}
            className={`${
              window.location.pathname === "/benefits" ? styles.active : ""
            }`}
          >
            Benefits
          </NavLink>
        </nav>

        <div className={styles.signWrap}>
          <NavLink to={"/reg"}>Sign Up</NavLink>
          <NavLink to={"/auth"}>Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
