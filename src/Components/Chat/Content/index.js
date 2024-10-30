import React, { useState } from "react";
import styles from "./content.module.css";

import Homeblue from "./../../../Assets/images/blueHome.svg";
import chatBlue from "./../../../Assets/images/blueChat.svg";
import speakerBlue from "./../../../Assets/images/blueSpeaker.svg";
import HomeLine from "./../../../Assets/images/homeline.svg";
import chatLine from "./../../../Assets/images/chatline.svg";
import speakerLine from "./../../../Assets/images/speakerline.svg";
import Home from "./Home";
import Messages from "./Messages";
import News from "./News";
const Content = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("home");

  return (
    <div className={`${styles.popup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.popupContent}>
        {tab === "home" && <Home />}
        {tab === "chat" && <Messages />}
        {tab === "news" && <News />}

        <div className={styles.footer}>
          <button
            className={tab === "home" ? styles.blueColor : ""}
            onClick={() => setTab("home")}
          >
            <img src={tab === "home" ? Homeblue : HomeLine} alt="home" /> Home
          </button>
          <button
            className={tab === "chat" ? styles.blueColor : ""}
            onClick={() => setTab("chat")}
          >
            <img src={tab === "chat" ? chatBlue : chatLine} alt="chat" />
            Messages
          </button>
          <button
            className={tab === "news" ? styles.blueColor : ""}
            onClick={() => setTab("news")}
          >
            <img src={tab === "news" ? speakerBlue : speakerLine} alt="news" />
            News
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
