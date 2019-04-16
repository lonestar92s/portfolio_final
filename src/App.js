import React, { Component } from 'react';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import LandingPage from './LandingPage/LandingPage'
import './App.css';



import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';






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
        <li className="nav-item"><NavLink to='/about'>About</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/projects'>Projects</NavLink></li>{' '}
        <li className="nav-item"><a href="https://github.com/lonestar92s" className="social" target="_blank" rel="noopener noreferrer" ><i className="github icon"></i></a></li>{' '}
        <li className="nav-item"><a href="https://www.linkedin.com/in/andrewaluko/" className="social" target="_blank" rel="noopener noreferrer"><i className="linkedin icon"></i></a></li>{' '}
        <li className="nav-item"><a href='mailto:aluko17@icloud.com' className="email"><i className="envelope outline icon"></i></a></li>{' '}
        </ul>
        </nav>
      <Switch> 
       <Route exact path="/" component={LandingPage} />
       <Route path='/contact' component={Contact} />
       <Route path='/about' component={Home} />
       <Route path='/projects' component={Projects} />
       </Switch>
       </div>
     </Router>
        );
    }
}
export default App;
     
        
        
        
        
      
      