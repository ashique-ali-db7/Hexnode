import styles from "./details.module.css";
import { details } from "../../dummyData";
import { useState } from "react";
import useWindowSize from "../../Hooks/windowSize";
import Arrow from "./../../Assets/images/redRightArrow.svg";
const Details = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(details[0]);
  const [isHovered, setIsHovered] = useState(false);

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
              <div
                style={{ top: `${data?.featureDetails?.position}%` }}
                className={`${styles.feature} ${
                  isHovered ? styles.featureHovered : ""
                }`}
              >
                <span className={styles.tick}>
                  <svg width="14.393" height="10.111">
                    <path
                      fill="none"
                      stroke="#60c458"
                      stroke-width="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <span>{data?.featureDetails?.name}</span>
              </div>
              <img
                key={active}
                src={data.image}
                alt={data.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          )}
          <div className={styles.contentWrapper}>
            {details.map((item, idx) => (
              <div
                className={styles.content}
                key={idx}
                onClick={() => clickHandler(idx, item)}
                aria-expanded={active === idx ? "true" : "false"}
              >
                {width <= 990 && (
                  <div style={{ position: "relative" }}>
                    {active === idx && (
                      <div
                        style={{ top: "80%" }}
                        className={`${styles.feature} ${
                          isHovered ? styles.featureHovered : ""
                        }`}
                      >
                        <span className={styles.tick}>
                          <svg width="12.393" height="8.111">
                            <path
                              fill="none"
                              stroke="#60c458"
                              stroke-width="2"
                              d="M.697 4.107 5.45 8.718l8.247-8"
                              data-name="tick - icon"
                            ></path>
                          </svg>
                        </span>
                        <span>{data?.featureDetails?.name}</span>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={active === idx ? "" : "displayNone"}
                    />
                  </div>
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
                    <img
                      src={Arrow}
                      alt="img"
                      style={{
                        width: "7px",
                        height: "11px",
                        marginLeft: "4px",
                      }}
                    />
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
