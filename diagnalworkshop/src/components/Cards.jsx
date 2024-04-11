import React from 'react'
import "../styles/cards.css"
import Card from './Card'

const Cards = ({pageData}) => {
    // console.log(pageData)
  return (
    <div className='cards'>
        {pageData.map((data,index)=>{
            return (
                 <Card key={index} data={data}/>
              
            )
        })}
        
    </div>
  )
}

export default Cards