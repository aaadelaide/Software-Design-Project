import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Login} from './Pages/Login';
import {Register} from './Pages/Register';
import {ProfileManagement} from './Pages/ProfileManagement';
import { UserProfile } from './Pages/UserProfile';
import { FuelQuoteHistory } from './Pages/FuelQuoteHistory';
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
                 <Route exact path='/fuelquotehistory' element={< FuelQuoteHistory/>}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;