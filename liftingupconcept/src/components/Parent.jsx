import React, {  useState } from 'react'
import Child from './Child';

const Parent = () => {
   const [color,setColor] = useState('black')

   const colorChange = ()=>{
    setColor(color=== "black" ? "blue" : "black");
   }

  return (
    <div>
        <div style={{backgroundColor:color,padding:"50px"}}></div>
        <Child colorChange={colorChange}/>
    </div>
  )
}

export default Parent;