import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './pages/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App  w-[100vw] h-[100vh]">
      <Router >
        <Navbar />
        <hr /><hr /><hr /><hr /><hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
