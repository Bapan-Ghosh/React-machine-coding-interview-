import React, { useState } from 'react'

let items = [
    {
      id: 1,
      name: "do work",
    },
    {
      id: 2,
      name: "do grocery",
    },
    {
      id: 3,
      name: "go gym",
    },
]; 

const Component = () => {
    const [itemcolor,setItemColor] = useState(
        new Array(items.length).fill(false)
    );

      const changeColor = (index)=>{
           const newList = [...itemcolor];
           newList[index] = !newList[index];
           setItemColor(newList)
      }
  return (
    <div>
        <ul>
           {items.map((item,index)=>{
               return (
                <>
                  <li
                   onClick={()=>changeColor(index)} 
                   key={item.id}
                   style={{color:itemcolor[index] ? "red" : "black"}}
                   >
                    {item.name}
                   </li>
                </>
               )
           })}
        </ul>
    </div>
  )
}

export default Component