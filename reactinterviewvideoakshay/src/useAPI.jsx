import {useState,useEffect} from 'react'

const useAPI = (ok) => {
   const [customhook,setCustomhook] = useState() 

    useEffect(()=>{
        setCustomhook(ok*21)
    },[])

    return customhook;
}

export default useAPI