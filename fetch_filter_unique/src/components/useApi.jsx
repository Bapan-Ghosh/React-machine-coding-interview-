import { useEffect, useState } from "react"

const useApi = ()=>{
    const [val,setVal] = useState()
    const [unique, setUnique] = useState([]) 

    useEffect(()=>{
         fetchData()
    },[])

    const fetchData = async ()=>{
          const data = await fetch(`https://api.publicapis.org/entries`)
          const json = await data.json()
          setVal(json.entries)

          const uniqueCategories = [
            ...new Set(json.entries.map((item)=> item.Category))
          ]
          
          setUnique(uniqueCategories) 
    }

    return {val,unique};
}

export default useApi;