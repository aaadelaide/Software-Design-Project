import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {ProfileManagement} from './pages/ProfileManagement';
import { UserProfile } from './pages/UserProfile';
import { FuelQuote } from './pages/fuelQuote';
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
                 <Route exact path='/FuelQuote' element={< FuelQuote />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;