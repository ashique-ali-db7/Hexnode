import styles from "./newsContent.module.css";
import Apple from "./../../../Assets/images/apple.jpg";
import Arrow from "./../../../Assets/images/blueRightArrow.svg";
const NewsContent = ({ type, heading, text, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image ?? Apple} alt="Apple" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.feature}>
          <div className={styles.items}>New feature</div>
          <div className={styles.items}>{type}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.content1}>
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
          <div className={styles.content2}>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
