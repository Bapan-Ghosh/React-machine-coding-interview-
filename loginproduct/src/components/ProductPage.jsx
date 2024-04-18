import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Card from './Card';

const ProductPage = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([]);

    useEffect(()=>{
        const val = localStorage.getItem('token');
        if(val === null){
            navigate("/");
        }
        else{
            fetchData();
        }
    },[])

    const fetchData = async()=>{
          const data = await fetch("https://dummyjson.com/products");
          const json = await data.json();
        //   console.log(json.products)
          setData(json.products);
    }

  return (
    <div>
         <div className='oterdiv'>
             {data.map((item,index)=>{
                return <Card item={item} key={item.id}/>
             })}
         </div>
    </div>
  )
}

export default ProductPage