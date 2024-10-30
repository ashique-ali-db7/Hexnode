import NewsContent from "../../NewsContent";
import styles from "./news.module.css";
import boyImage from "./../../../../Assets/images/boy.jpeg";
import girlImage from "./../../../../Assets/images/girl.png";
import boyImage2 from "./../../../../Assets/images/boy with lap.jpeg";
import { chatData } from "../../../../dummyData";

const News = () => {
  return (
    <div className={styles.fullContent}>
      <div className={styles.header}> News</div>

      <div className={styles.contentContainer}>
        <div className={styles.subHeading}>
          <div>
            <h3>Latest</h3>
            <p>From Team Hexnode</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={girlImage} alt="logo" className={styles.circleImage} />
            <img src={boyImage} alt="logo" className={styles.circleImage} />
            <img src={boyImage2} alt="logo" className={styles.circleImage} />
          </div>
        </div>
        {chatData?.map((val, idx) => (
          <NewsContent
            type={val.type}
            heading={val.heading}
            text={val.text}
            image={val.image}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
