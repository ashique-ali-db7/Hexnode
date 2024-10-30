import styles from "./messages.module.css";
import Chat from "./../../../../Assets/images/chatblack.svg";
import Send from "./../../../../Assets/images/sendWhite.svg";
const Messages = () => {
  return (
    <div className={styles.fullContent}>
      <div className={styles.header}> Messages</div>

      <div className={styles.contentContainer}>
        <div className={styles.messages}>
          <img src={Chat} alt="Chat" width={33} height={33} />
          <h3>No messages</h3>
          <p>Messages from the team will be shown here</p>
        </div>
        <button>
          Send us a Message <img src={Send} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default Messages;
