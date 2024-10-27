import { useEffect, useRef, useState } from "react";
import { tabs } from "../../../dummyData";
import styles from "./tabs.module.css";
import TabContent from "../TabContent";

const Tabs = ({ activeTab, setActiveTab, isMobile }) => {
  const accordionRefs = useRef([]);
  const handleAccordionClick = (id) => {
    setActiveTab(activeTab === id && isMobile ? null : id);
    if (accordionRefs.current[id] && isMobile) {
      accordionRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              className={`${styles.tab} ${
                tab.id === activeTab ? styles.activeTab : ""
              }`}
              onClick={() => handleAccordionClick(tab.id)}
            >
              {tab.title}
            </button>

            {isMobile && tab.id === activeTab && (
              <TabContent
                activeTab={activeTab}
                ref={(el) => (accordionRefs.current[tab.id] = el)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
