import styles from "./home.module.css";
import hexnodeWhite from "./../../../../Assets/images/hexnodew.png";
const Home = () => {
  return (
    <div className={styles.fullContent}>
      <div className={styles.header}>
        <img src={hexnodeWhite} alt="hexnode logo" className={styles.logo} />
      </div>

      <div className={styles.featuredArticle}>
        <h1>Good Day!</h1>
        <h1>How can we help?</h1>
      </div>
    </div>
  );
};

export default Home;
