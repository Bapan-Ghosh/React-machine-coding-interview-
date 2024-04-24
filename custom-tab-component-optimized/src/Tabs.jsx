import { useState, useMemo, useCallback } from "react";

const Tab = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const changeTab = useCallback((id) => {
    setCurrentTab(id);
  }, []);

  const activeTabContent = useMemo(() => {
    const activeTab = tabs.find((tab) => tab.id === currentTab);
    console.log(activeTab);
    // console.log(activeTab.content);
    return activeTab ? activeTab : null;
  }, [currentTab, tabs]);

  return (
    <div className="main">
      <div className="tabs">
        {tabs.map((tab) => (
          <button onClick={() => changeTab(tab.id)} key={tab.id}>
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {activeTabContent && (
          <div>
            <p>{activeTabContent.title}</p>
            <p>{activeTabContent.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
