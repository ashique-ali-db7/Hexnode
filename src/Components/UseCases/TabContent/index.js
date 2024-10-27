import styles from "./tabContent.module.css";
import { tabs } from "../../../dummyData";
const TabContent = ({ activeTab }) => {
  const item = tabs.find((val) => val.id === activeTab);
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>{item.subTitle}</h2>
        <ul>
          {item?.content?.map((val, idx) => (
            <li key={idx}>
                 <span>
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
              <p>
               
                {val}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src={item.image} alt="single app image" />
      </div>
    </div>
  );
};
export default TabContent;
