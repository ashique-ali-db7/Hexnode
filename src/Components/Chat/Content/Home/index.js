import styles from "./home.module.css";
import hexnodeWhite from "./../../../../Assets/images/hexnodew.png";
import Send from "./../../../../Assets/images/send.svg";
import NewsContent from "../../NewsContent";
import QuestionCard from "../../QuestionsCard";
const Home = () => {
  return (
    <div className={styles.fullContent}>
      <div className={styles.header}>
        <img src={hexnodeWhite} alt="hexnode logo" className={styles.logo} />
      </div>

      <div className={styles.featuredArticle}>
        <h2>Good Day !</h2>
        <h2>How can we help?</h2>
      </div>
      <div className={styles.send}>
        Send us a message <img src={Send} alt="send" />
      </div>
      <NewsContent
        type="Apple"
        heading="Elevate your device management with VisionOS support!"
        text="We’re thrilled to announce the launch of VisionOS support in Hexnode!"
      />
      <QuestionCard
        mainHeading="Have a question? Ask the Hexnode community"
        heading="Hexnode Connect - Unified Endpoint Management Community"
        text="The right place to ask questions, get answers. Connect with other community members, learn and share knowledge."
      />
    </div>
  );
};

export default Home;
