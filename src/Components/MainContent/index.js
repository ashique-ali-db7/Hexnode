import styles from "./mainContent.module.css";
import desktopImage from "./../../Assets/images/hexnode-kiosk.webp";
import idc from "./../../Assets/images/idc.webp";
import gartner from "./../../Assets/images/gartner.webp";
import forrester from "./../../Assets/images/forrester.webp";
const MainContent = () => {
  return (
    <>
      <div className={styles.firstContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.textContainer}>
            <h2>
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h2>
            <div className={styles.fieldContainer}>
              <input type="text" placeholder="Your Work Email" />
              <button>GET STARTED NOW!</button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={desktopImage} alt="Desktop" />
          </div>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.secondInner}>
          <div className={styles.item}>
            <img src={idc} alt="Hexnode" />
            <p>
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>
          <div className={styles.verticalLine}></div>

          <div className={styles.item}>
            <img src={gartner} alt="Hexnode" />
            <p>
              Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
              Quadrant for Unified Endpoint Management tools 2022.
            </p>
          </div>
          <div className={styles.verticalLine}></div>

          <div className={styles.item}>
            <img src={forrester} alt="Forrester" />
            <p>
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
