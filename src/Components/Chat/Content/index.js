import React from "react";
import styles from "./content.module.css";

import Homeblue from "./../../../Assets/images/blueHome.svg";
import chatBlue from "./../../../Assets/images/blueChat.svg";
import speakerBlue from "./../../../Assets/images/blueSpeaker.svg";
import HomeLine from "./../../../Assets/images/homeline.svg";
import chatLine from "./../../../Assets/images/chatline.svg";
import speakerLine from "./../../../Assets/images/speakerline.svg";
import Home from "./Home";
const Content = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.popup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.popupContent}>
        <Home />
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
