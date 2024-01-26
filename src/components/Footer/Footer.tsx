import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h3 className={styles.footerTitle}>ARShakir</h3>
          <div className={styles.icons}>
            <a href="https://www.google.com/">
              <img src="Google.svg" alt="" className={styles.icon} />
            </a>
            <a href="https://twitter.com/">
              <img src="Twitter.svg" alt="" className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <img src="Facebook.svg" alt="" className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.footerMain}>
          <div className={styles.footerLinkWrap}>
            <h4 className={styles.title}>First</h4>
            <a href="/" className={styles.link}>
              First page
            </a>
            <a href="/" className={styles.link}>
              Second page
            </a>
            <a href="/" className={styles.link}>
              Third page
            </a>
            <a href="/" className={styles.link}>
              Fourth page
            </a>
          </div>
          <div className={styles.footerLinkWrap}>
            <h4 className={styles.title}>Second</h4>
            <a href="/" className={styles.link}>
              First page
            </a>
            <a href="/" className={styles.link}>
              Second page
            </a>
            <a href="/" className={styles.link}>
              Third page
            </a>
            <a href="/" className={styles.link}>
              Fourth page
            </a>
          </div>
          <div className={styles.footerLinkWrap}>
            <h4 className={styles.title}>Third</h4>
            <a href="/" className={styles.link}>
              First page
            </a>
            <a href="/" className={styles.link}>
              Second page
            </a>
            <a href="/" className={styles.link}>
              Third page
            </a>
            <a href="/" className={styles.link}>
              Fourth page
            </a>
          </div>
          <div className={styles.footerLinkWrap}>
            <h4 className={styles.title}>Fourth</h4>
            <a href="/" className={styles.link}>
              First page
            </a>
            <a href="/" className={styles.link}>
              Second page
            </a>
            <a href="/" className={styles.link}>
              Third page
            </a>
            <a href="/" className={styles.link}>
              Fourth page
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
