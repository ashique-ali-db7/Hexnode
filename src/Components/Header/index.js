// src/components/Header.js
import React, { useEffect, useState } from "react";
import styles from "./header.module.css"; // Import the CSS Module
import hexnodeWhite from "./../../Assets/images/hexnodew.png";
import hexnodeBlack from "./../../Assets/images/hexnodeb.png";
import useWindowSize from "../../Hooks/windowSize";
const Header = ({ setMenuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const width = useWindowSize();
  const toggleMenu = () => {
    setMenuOpen((prevVal) => !prevVal);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles.container} ${isScrolled ? styles.white : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <header
          className={`${styles.header} ${isScrolled ? styles.white : ""}`}
        >
          <div className={styles.headerContent}>
            <img
              src={isHovered || isScrolled ? hexnodeBlack : hexnodeWhite}
              alt="hexnode logo"
              className={styles.logo}
            />

            <button className={styles.desktopButton} >14 DAY FREE TRIAL</button>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div
                className={`${styles.bar} ${
                  isScrolled || isHovered ? styles.barScroll : ""
                }`}
              ></div>
              <div
                className={`${styles.bar} ${
                  isScrolled || isHovered ? styles.barScroll : ""
                }`}
              ></div>
              <div
                className={`${styles.bar} ${
                  isScrolled || isHovered ? styles.barScroll : ""
                }`}
              ></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
