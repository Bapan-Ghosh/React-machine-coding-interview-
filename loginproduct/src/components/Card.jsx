import React from 'react'

const Card = ({item}) => {
    console.log(item)
  return (
    <div className='card'>
        <ul>
            <li><img src={item.thumbnail} alt="thumbnail" /></li>
            <li >{item.brand}</li>
            <li>{item.category}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
            <li>{}</li>
        </ul>
    </div>
  )
}

export default Card