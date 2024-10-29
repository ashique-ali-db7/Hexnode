import React, { useState } from "react";
// import Popup from "./Popup";
import styles from "./chat.module.css";
import ChatIcon from "./../../Assets/images/popupIcon.png";
import Content from "./Content";
const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={togglePopup}>
        <img src={ChatIcon} alt="icon" />
      </button>
      {isPopupOpen && <Content />}
    </div>
  );
};

export default Popup;
