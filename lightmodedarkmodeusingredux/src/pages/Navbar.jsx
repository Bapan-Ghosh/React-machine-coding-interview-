import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { changeDarakLight } from "../Redux/darklightSlice.jsx";
 
const Navbar = () => {
  const [darkLight,setDarkLight] = useState("Dark") 
  const selector = useSelector((store) => store.darkLight.islight);
  const dispatch = useDispatch()
  // console.log(selector)
  // console.log(dispatch)

  const styles = {
    display: "flex",
    gap: "10px",
    width: "100vw",
    backgroundColor: selector ? "black" : "white",
    color: selector ? "white" : "black",
};

  const changeTheme = ()=>{
    dispatch(changeDarakLight()) // dispatching an action , action will call a reducer function
    darkLight === "Light" ? setDarkLight("Dark") : setDarkLight("Light")
  } 

  return (
    <div style={styles} className="flex">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/blog"}>Blog</Link>
      <button onClick={changeTheme}>{darkLight}</button>
    </div>
  );
};

export default Navbar;
