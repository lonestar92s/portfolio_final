import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'


class App extends Component {
    render() {
        return (
    <Router> 
      <div> 
        <nav className="Navbar">
        <ul>
        <li>Andrew Aluko</li>
        </ul>
        <ul className ="Navlinks">
        <li className="nav-item"><NavLink to='/'>Home</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/about'>About</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/projects'>Projects</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/contact'>Contact</NavLink></li>{' '}
        </ul>
        </nav>
      <Switch> 
       <Route exact path="/" component={Home} />
       <Route path='/contact' component={Contact} />
       </Switch>
       </div>
     </Router>
        );
    }
}
export default App;
     
        
        
        
        
      
      