import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import { cartReducer } from './reducers/cartReducer';

function App() {
  const [state,dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[]
  })
  useEffect(()=>{
    fetchData()
  },[])
 
  console.log(state)
  const fetchData = async()=>{
        const val = await fetch(`https://dummyjson.com/products`);
        const json = await val.json()
        dispatch({
          type : "ADD_PRODUCTS",
          payload : json.products,
        })
  }
   
  return (
    <div style={{display:"flex"}}>
           <Products state={state} dispatch={dispatch}/>   
           <Cart state={state} dispatch={dispatch}/>   
    </div>
  );
}

export default App;
