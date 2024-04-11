import React from 'react'

const Child = ({colorChange}) => {
  return (
    <div>
        <button onClick={colorChange}>CLICK THE BUTTON</button>
    </div>
  )
}

export default Child;