import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Example from './Exm'

const Tabledata = ({users, cool}) => {
    const [da,setDa] = useState([])
  useEffect(()=>{
       datafetch()
  },[])

  const datafetch =async ()=>{
      const data = await fetch(`http://localhost:3001/${users}`);
      const json = await data.json();
      setDa(json);

    //   console.log(json.length)
  }


  return (
    <div>
        <Example da={da} cool={cool}/>


    </div>
  )
}

export default Tabledata