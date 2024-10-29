import React from "react";
import styles from "./content.module.css";
import hexnodeWhite from "./../../../Assets/images/hexnodew.png";
import Homeblue from "./../../../Assets/images/homeline.svg";
import chatBlue from "./../../../Assets/images/chatline.svg";
import speakerBlue from "./../../../Assets/images/speakerline.svg";
const Content = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.popup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.popupContent}>
        <div className={styles.fullContent}>
          <div className={styles.header}>
            <img
              src={hexnodeWhite}
              alt="hexnode logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.featuredArticle}>
            <h1>Good Day!</h1>
            <h1>How can we help?</h1>
          </div>
        </div>
        <div className={styles.footer}>
          <button>
            <img src={Homeblue} alt="home" /> Home
          </button>
          <button>
            <img src={chatBlue} alt="chat" /> Messages
          </button>
          <button>
            <img src={speakerBlue} alt="news" /> News
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
