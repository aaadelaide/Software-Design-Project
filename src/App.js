<<<<<<< HEAD
import React, { useState } from "react";
import {Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import {fuelQuote} from "./Pages/fuelQuote";

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/fuelQuote" component={fuelQuote} />
        </Routes>
      </div>
    </Router>


  );
=======
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {ProfileManagement} from './pages/ProfileManagement';
import { UserProfile } from './pages/UserProfile';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/profilemanagement' element={< ProfileManagement />}></Route>
                 <Route exact path='/userprofile' element={< UserProfile />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
>>>>>>> main
}
  
export default App;