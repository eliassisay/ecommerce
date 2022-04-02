import React from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
//import {BrowserRouter as Route,Router,Link} from 'react-router-dom';
import './App.css';
import Signin from './container/Signin';
import Signup from './container/Signup';
import Home from './container/Home';

function App() {
  return (
    <Router>
    
    <div className="App">
      {/* <Router>
        <Link>
          <Route path="/"exact components={Home}/>
          <Route path="/signin"components={Signin}/>
          <Route path="/signup"components={Signup}/>
        </Link>
      </Router> */}
     <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={ <Signup />} />
  
      </Routes>
    </div>
</Router>
 


   
  );
}

export default App;
