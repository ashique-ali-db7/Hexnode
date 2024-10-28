// src/components/Header.js
import React, { useState } from "react";
import styles from "./header.module.css"; // Import the CSS Module
import hexnodeLogo from "./../../Assets/images/hexnode.png";
const Header = ({ setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen((prevVal) => !prevVal);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            {/* <img src={hexnodeLogo} alt="hexnode logo" className={styles.logo} /> */}
            <h2>hexnode</h2>
            <button className={styles.desktopButton}>14 DAY FREE TRIAL</button>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
