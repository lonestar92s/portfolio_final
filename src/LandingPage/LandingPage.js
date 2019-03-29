import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom'
import '../App.css';

export default class LandingPage extends Component{
	render() {
		return (
		<div className="LandingPage">
			<div className="Main">
				<div className="brand">
					<h1>Creative.</h1>
					<h2>Capable.</h2>
					<h3>Analytical.</h3>
				</div>	
		<NavLink to='/about'>
		  <div className="link">
		    <div>Andrew Aluko</div>
		     <h2>______________________</h2>
		     <h2>Software Developer</h2>
		  </div>
		</NavLink>
		   </div>
		</div>

		)
	}
}

		
