import styles from "./questions.module.css";

const QuestionCard = ({ mainHeading, heading, text }) => {
  return (
    <div className={styles.communityCard}>
      <div className={styles.cardHeader}>{mainHeading}</div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{heading}</h2>

        <p className={styles.cardText}>{text}</p>
        <button className={styles.cardButton}>Ask away!</button>
      </div>
    </div>
  );
};

export default QuestionCard;
