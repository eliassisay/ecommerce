import React from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import './App.css';
import Signin from './container/Signin';
import Signup from './container/Signup';
import Home from './container/Home';

function App() {
  return (
   
    <Router>
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={<Navigate to="/" Signup />} />
      </Routes>
    </div>

  </Router>


   
  );
}

export default App;
