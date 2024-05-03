import React, { useState } from 'react'
import './App.css';

const ToDoList = () => {
    const [activity,setactivity] = useState("");
    const [listData, setlistData] = useState([]);

    const addActivity = ()=>{
         setlistData((prevData)=>[
             ...prevData, activity
         ])
         setactivity('')
    }

    const removeActivity = (index)=>{
          const updatedListData = listData.filter((elem,id)=>{
            return index !== id    // er mane holo je je element oi index hobe na sei sei elements gulo add koro new array te
          })
          setlistData(updatedListData)
    }

    const removeAll = ()=>{
        setlistData([]);
    }

  return (
    <>
       <div className="container">
         <div className="header">To Do List</div>
         <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>{setactivity(e.target.value)}}/>
         <button onClick={addActivity}>Add</button>
        {listData.length > 0 ? <p className='list-heading'>Here is your List :{")"}</p> :
                                <p className='list-heading'>List is Empty !!</p>
        } 
         {listData.length > 0 && listData.map((data,index)=>{
                return(
                    <>
                       <p key={data.id} style={{display:"flex",marginTop:"8px"}}>
                           <div className='listData'>{data}</div>
                           
                           <button onClick={()=>removeActivity(index)}>remove</button>
                       </p>
                    </>
                )
         })}
         {listData.length >=1 && 
         <button onClick={removeAll}>Remove All</button>}
       </div>
    </>
  )
}

export default ToDoList