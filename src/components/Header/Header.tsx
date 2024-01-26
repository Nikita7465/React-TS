import React, { useState } from "react";
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <header className={styles.header}>
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

        <label className={styles.hamburgerLabel}>
          <input
            type="checkbox"
            className={styles.menuToggle}
            checked={menuOpen}
            onChange={handleToggleMenu}
          />
          <span className={styles.hamburger}></span>
        </label>

        <nav
          className={`${styles.mobileNav} ${
            menuOpen ? styles.mobileNavOpen : ""
          }`}
        >
          <NavLink
            to={"/"}
            className={`${
              window.location.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </NavLink>

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

        <div className={styles.regAndAuthWrap}>
          <NavLink to={"/reg"}>Sign Up</NavLink>
          <NavLink to={"/auth"}>Sign In</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
