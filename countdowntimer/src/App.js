import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = "April, 12, 2024";

  const getTime = ()=>{
    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMins(Math.floor((time/1000/60)%60))
    setSecs(Math.floor((time/1000)%60))
  } 

  useEffect(()=>{
     const interval = setInterval(()=>getTime(deadline),1000)

     return ()=> clearInterval(interval)
  },[])

  return (
    <div className='container'>
            <div className="col">
                <h1>{days<10 ? "0"+days: days}</h1>
                <span className='text'>days</span>
            </div>
            <div className="col">
                <h1>{hours<10 ? "0"+hours: hours}</h1>
                <span className='text'>hours</span>
            </div>
            <div className="col">
                <h1>{mins<10 ? "0"+mins: mins}</h1>
                <span className='text'>mins</span> 
            </div>
            <div className="col">
                <h1>{secs<10 ? "0"+secs: secs}</h1>
                <span className='text'>secs</span> 
            </div>
         
    </div>
  );
}

export default App;
