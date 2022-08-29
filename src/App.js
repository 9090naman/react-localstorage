import './App.css';
// import Create from './components/Create';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    
    
     <div className="App">
      <div className="outer">
        <div className="inner">
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={ <Registration/>} /> 
          </Routes>
        </div>
      </div>
    </div>
    
    
      
  );
}

export default App;
