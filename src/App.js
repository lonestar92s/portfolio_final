import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import LandingPage from './LandingPage/LandingPage'
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
        <li className="Name"><NavLink to='/'>Andrew Aluko</NavLink></li>
        </ul>
        <ul className ="Navlinks">
        <li className="nav-item"><NavLink to='/home'>Home</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/projects'>Projects</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/contact'>Contact</NavLink></li>{' '}
        <li className="nav-item"><a href="https://github.com/lonestar92s"><i class="github icon"></i></a></li>{' '}
        </ul>
        </nav>
      <Switch> 
       <Route exact path="/" component={LandingPage} />
       <Route path='/contact' component={Contact} />
       <Route path='/home' component={Home} />
       </Switch>
       </div>
     </Router>
        );
    }
}
export default App;
     
        
        
        
        
      
      