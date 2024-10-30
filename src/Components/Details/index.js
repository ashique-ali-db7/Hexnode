import styles from "./details.module.css";
import { details } from "../../dummyData";
import { useState } from "react";
import useWindowSize from "../../Hooks/windowSize";
import Arrow from "./../../Assets/images/redRightArrow.svg";
const Details = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(details[0]);
  const width = useWindowSize();
  const clickHandler = (idx, item) => {
    setActive(idx);
    setData(item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.detailsWrapper}>
        <h1>What additional possibilities does the Kiosk mode offer?</h1>
        <div className={width > 990 ? styles.dataWrapper : ""}>
          {width > 990 && (
            <div className={styles.imageWrapper}>
              <img src={data.image} alt={data.title} />
            </div>
          )}
          <div className={styles.contentWrapper}>
            {details.map((item, idx) => (
              <div
                className={styles.content}
                key={idx}
                onClick={() => clickHandler(idx, item)}
              >
                {width <= 990 && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={active === idx ? "" : "displayNone"}
                  />
                )}

                <div className={styles.textWrapper}>
                  <h3>{item.title}</h3>
                  <p className={active === idx ? "" : "displayNone"}>
                    {item.description}
                  </p>
                  <p
                    id={styles.free}
                    className={active === idx ? "" : "displayNone"}
                  >
                    TRY FOR FREE
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
