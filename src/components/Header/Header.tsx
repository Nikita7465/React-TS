import React, { useState } from "react";
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";
import Cookies from "js-cookie";
import styles from "./header.module.css";
import Modal from "../ui/Modal/Modal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const switchModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const logout = () => {
    const cookies = Cookies.get();

    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
  };

  const username = Cookies.get("username");

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
          {username ? (
            <h5 className={styles.username} onClick={switchModal}>
              {username}
            </h5>
          ) : (
            <>
              <NavLink to={"/register"}>Sign Up</NavLink>
              <NavLink to={"/auth"}>Sign In</NavLink>
            </>
          )}
        </div>
      </header>
      {isModalOpen && (
        <Modal
          text="Log out of the account?"
          type="confirm"
          onCancel={switchModal}
          onConfirm={() => {
            switchModal();
            logout();
          }}
        />
      )}
    </div>
  );
};

export default Header;
