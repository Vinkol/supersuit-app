import React from "react";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>SuperSuit</a>
        <a href="tel:+375293512740" className={styles.phone}>+375 29 351-27-40</a>
      </div>
    </header>
  );
};

export default Header;