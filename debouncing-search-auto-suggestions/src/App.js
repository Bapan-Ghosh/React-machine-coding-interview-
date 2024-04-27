import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [search,setSearch] = useState('')
  const [apidata, setApidata] = useState([]);
  const [selectdata,setSelectdata] = useState('');
  console.log(search)

  const inputApiCall = async()=>{
       const url = `https://api.frontendeval.com/fake/food/${search}`;
       const data = await fetch(url);
       const json = await data.json();
       console.log(json) 
       setApidata(json) 
  }

  useEffect(()=>{
    if (search) {
       const time = setTimeout(()=>{
          inputApiCall();
       },2000) 

       return (()=> clearTimeout(time))
      }
      else {
        setApidata([]);
      }
  },[search])

  const setSuggestionClick = (data)=>{
    setSearch(data)
    setSelectdata(data)
    alert(data)
  }

  return (
    <div className="App">
      <h1>Debouncing search suggestion</h1>
      <div className="search">
        <input 
           type="text" 
           value={search} 
           onChange={(e)=>setSearch(e.target.value)} 
           placeholder="Search"
           />
      </div>
      <div className="show-suggestions">
         {apidata && apidata.map((data,index)=>{
             return <div className='search-r' onClick={()=>setSuggestionClick(data)} key={index}>{data}</div>  
         })}
      </div>
    </div>
  );
}

export default App;
