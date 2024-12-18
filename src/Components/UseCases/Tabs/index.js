import { tabs } from "../../../dummyData";
import styles from "./tabs.module.css";
import TabContent from "../TabContent";
import Next from "../../../Assets/images/next-arrow-icon-black.svg";
import Up from "../../../Assets/images/arrowupW.png";
const Tabs = ({ activeTab, setActiveTab, isMobile }) => {
  const handleAccordionClick = (id) => {
    setActiveTab(activeTab === id && isMobile ? null : id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={
              isMobile
                ? ""
                : `${styles.butContainer} ${
                    tab.id === activeTab ? styles.activeTab : ""
                  }`
            }
          >
            <button
              className={`${styles.tab} ${
                tab.id === activeTab ? styles.activeTab : ""
              }`}
              onClick={() => handleAccordionClick(tab.id)}
              aria-expanded={tab.id === activeTab ? "true" : "false"}
            >
              {tab.title}
              {isMobile && (
                <img
                  src={tab.id === activeTab ? Up : Next}
                  alt="Next"
                  className={tab.id === activeTab ? "" : styles.arrowImage}
                />
              )}
            </button>

            {isMobile && tab.id === activeTab && (
              <TabContent activeTab={activeTab} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
