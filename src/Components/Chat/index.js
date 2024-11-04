import React, { useEffect, useState } from "react";
// import Popup from "./Popup";
import styles from "./chat.module.css";
import ChatIcon from "./../../Assets/images/popupIcon.png";
import Content from "./Content";
import Down from "./../../Assets/images/downArrow.svg";
const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPopupOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={togglePopup}>
        <img src={isPopupOpen ? Down : ChatIcon} alt="icon" />
      </button>
      {isPopupOpen && <Content />}
    </div>
  );
};

export default Popup;
