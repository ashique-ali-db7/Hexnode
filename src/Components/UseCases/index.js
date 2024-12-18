import { useState } from "react";
import Tabs from "./Tabs";
import styles from "./useCases.module.css";
import TabContent from "./TabContent";
import useWindowSize from "../../Hooks/windowSize";
const UseCases = () => {
  const [activeTab, setActiveTab] = useState(1);
  const width = useWindowSize();
  const isMobile = width <= 640;
  return (
    <div className={styles.container}>
      <h1>Specific kiosk modes for unique use cases</h1>
      <div className={styles.tabsContainer}>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={isMobile}
        />
        {!isMobile && <TabContent activeTab={activeTab} />}
      </div>
    </div>
  );
};

export default UseCases;
