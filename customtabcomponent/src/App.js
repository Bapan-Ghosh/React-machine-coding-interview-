// App.jsx
import React, { useState } from 'react';
import './App.css';
import Tab from './components/Tab';

function App() {
  const [currentTab, setCurrentTab] = useState('1');

  const tabs = [
    {
      id: '1',
      tabTitle: 'Tab 1',
      title: 'iphone',
      content: "The iPhone is a line of smartphones designed, developed, and marketed by Apple Inc. iPhones use Apple's iOS mobile operating system. The first iPhone was released on June 29, 2007, and has been released annually since then. iPhones are known for their innovative features, high build quality, and user-friendly interface."
    },
    {
      id: '2',
      tabTitle: 'Tab 2',
      title: 'samsung',
      content: "Samsung is a South Korean multinational manufacturing conglomerate headquartered in Samsung Digital City, Suwon, South Korea. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate)."
    },
    {
      id: '3',
      tabTitle: 'Tab 3',
      title: 'Motorola',
      content: "Motorola is a brand of Android smartphones owned by Lenovo. Motorola used to be a much larger company that made a wide variety of electronic products, but it was split up in 2011. The Motorola Mobility division, which makes smartphones, was acquired by Google in 2012 and then sold to Lenovo in 2014."
    }
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="App">
      <Tab tabs={tabs} currentTab={currentTab} handleTabClick={handleTabClick} />
    </div>
  );
}

export default App;
