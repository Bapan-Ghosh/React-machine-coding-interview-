import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

const Body = lazy(() => import('./components/Body'));
const BlankPage = lazy(() => import('./components/BlankPage'));

function App() {
  return (
// I have done routing here 
//The Provider component is a React component that makes the Redux store
// available to any nested components that need to access it
// Have implemented lazy loading according to the requirements
// for the split bundling( spliting the bundled js file which is bundled by
// bundler here i have used webpack we may use parcel or vite also)
    <Provider store={store}>
      <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/BlankPage" element={<BlankPage />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
