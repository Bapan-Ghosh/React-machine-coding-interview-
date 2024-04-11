import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Carausal from './Carausal';

function App() {
  return (
    <div className='flex flex-col'>
       <Header/>      
       <Carausal/>
    </div>
  );
}

export default App;
