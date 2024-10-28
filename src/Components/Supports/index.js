import { companyImages, supportedImages } from "../../dummyData";
import styles from "./support.module.css";
const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Platforms supported</h1>
        <div className={styles.gridContainer}>
          {supportedImages.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Support;
