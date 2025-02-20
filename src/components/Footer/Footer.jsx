import React from "react";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>SuperSuit</a>
        <a href="tel:+375293512740" className={styles.phone}>+375 29 351-27-40</a>
      </div>
    </footer>
  );
};

export default Footer;