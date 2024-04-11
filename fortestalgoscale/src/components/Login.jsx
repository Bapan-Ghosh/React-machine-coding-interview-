import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const [username,setuserName] = useState();
    const [password,setPassword] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        const val = localStorage.getItem('token');
        if(val !== null){
            navigate("/productpage");
        }
    },[])

    const handleSubmit = async(e)=>{

          e.preventDefault();
          try{
            const response = await fetch("https://dummyjson.com/auth/login",
            {
                method :'POST',
                headers:{
                    'Content-Type': 'application/json' ,
                },
                body :JSON.stringify({username,password}),
            });

            if(response.ok){
                const data = await response.json();
                const token = data.token;
                console.log(token)
                localStorage.setItem('token',token);
                navigate("/productpage");
            }
            else{
                console.error("invalid name and password")
                alert("wrong input")
                setuserName("")
                setPassword("")
            }
          }
          catch(error){
            console.error("Error",error);
          }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
              <label htmlFor="">Username</label>
              <input
               type="text"
               value={username}
               onChange={(e)=>{
                setuserName(e.target.value)
               }}
                />
              
              <label htmlFor="">Password</label>
              <input 
              type="text" 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              />     
              <button type='submit'>Login</button>       
        </form>
    </div>
  )
}

export default Login