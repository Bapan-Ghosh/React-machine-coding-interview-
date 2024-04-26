import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const starArray = [1,2,3,4,5]

function App() {
  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(0)
  console.log(((rating && hover) || hover))

  return (
    <div className='App'>
         <h1>Star Ratings</h1>
         <div>
          {
            starArray.map((num)=>{
              return(
                <button 
                       key={num}
                       onClick={()=>setRating(num)} 
                       onMouseOver={()=>setHover(num)}
                        onMouseLeave={()=>setHover(rating)}>
                <span className={`star ${num <=((rating && hover) || hover)?'on':'off'}`}>&#9733;</span>
              </button>
              )
            })
          }
         </div>
    </div>
  );
}

export default App;
