import { useState } from 'react';
import './App.css';

function App() {
  const [currentTab,setCurrentTab] = useState('1');
  const tabs = [
    {
      id : 1,
      tabTitle : 'Tab 1',
      title : 'title 1',
      content : "Hey i'm component 1 "
    },
    {
      id : 2,
      tabTitle : 'Tab 2',
      title : 'title 2',
      content : "Hey i'm component 2"
    },
    {
      id : 3,
      tabTitle : 'Tab 3',
      title : 'title 3',
      content : "Hey i'm component 3"
    }
  ]

  const handleTabClick = (e)=>{
       setCurrentTab(e.target.id)
  }
  return (
    <div className='main'>
        <div className="tabs">
             {
              tabs.map((tab,i)=>{
                return (
                  <div key={i}>
                     {<button
                      id={tab.id}
                      className={currentTab === `${tab.id}` ? 'selected' : ''}
                      onClick={handleTabClick}
                     >
                       {tab.title}
                </button>}
                  </div>
                )
              })
             }
        </div>       
        <div className="content">
             {tabs.map((tab, i)=>{
                  return(
                    <div key={i}>
                      {currentTab === `${tab.id}` &&
                           <div>
                               <p>{tab.title}</p>  
                               <p>{tab.content}</p>
                           </div>
                      }
                    </div>
                  )
             })}
        </div>
    </div>
  );
}

export default App;
