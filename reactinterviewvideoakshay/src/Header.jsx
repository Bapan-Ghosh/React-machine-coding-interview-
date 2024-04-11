import {useState,useEffect} from 'react'
import useAPI from './useAPI'

const Header = () => {
    const [ok,setOk] = useState(0)
    console.log("API Call")

    const okk = useAPI(44);  // this is example of custom hooks
    useEffect(()=>{
       console.log("CCCCCCCCCC")
    },[])
  return (
    <div className='flex flex-col content-center items-center w-screen'>
         <p>{okk}</p>
         <h1>{ok}</h1>
         <div className='flex gap-2'>
           <button onClick={()=>setOk(ok+1)}>+</button>
           <button onClick={()=>setOk(ok-1)}>-</button>
         </div>
    </div>
  )
}

export default Header