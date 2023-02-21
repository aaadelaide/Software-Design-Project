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
}

export default App;
