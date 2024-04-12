// Tab.jsx
import React from 'react';
import '../App.css';

const Tab = ({ tabs, currentTab, handleTabClick }) => {
  return (
    <div className='main'>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={currentTab === tab.id ? 'selected' : ''}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {currentTab === tab.id && (
              <div>
                <p style={{ fontWeight: "bold" }}>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
