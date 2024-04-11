import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  const [value,setValue] = useState(0)
  const [success,setSuccess] = useState(false);
    
    useEffect(()=>{ 
        setInterval(()=>{ 
            setValue((val)=>val+1)
        },200)
    },[]) 
   
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar onComplete={()=>{setSuccess(true)}} value={value}/>
      <span>{success  ?  "completed" : "loading..." }</span>
    </div>
  );
}

export default App;
