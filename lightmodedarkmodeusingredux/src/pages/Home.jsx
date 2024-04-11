import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const selector = useSelector((store)=>store.darkLight.islight)
  const styles = {
    with :"100vw",
    height :"100vh",
    backgroundColor : selector ? "black" : "white",
    color : selector ? "white" : "black"
  }

  return (
    <div style={styles}>
    <div>Home</div>
    <p>Welcome to home page</p>
    </div>

  )
}

export default Home