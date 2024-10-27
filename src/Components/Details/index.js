import styles from "./details.module.css";
import DetailsImage from "./../../Assets/images/effortless-kiosk-deployement-image.webp";
const Details = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsWrapper}>
        <h2>What additional possibilities does the Kiosk mode offer?</h2>
        <div className={styles.contentWrapper}>
          <img src={DetailsImage} />
          <div className={styles.content}>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
