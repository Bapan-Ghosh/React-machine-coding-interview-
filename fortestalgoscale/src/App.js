import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import ProductPage from './components/ProductPage';

/*
    username: 'kminchelle',
    password: '0lelplR',
*/
function App() {
  return (
    <div className="App">
       <Router>
           <Routes>
                  <Route path='/' element={<Login />}/>
                  <Route path='/productpage' element={<ProductPage/>}/>
           </Routes>
       </Router>
    </div>
  );
}

export default App;
