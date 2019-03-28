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
		
		<NavLink to='/home'>
		<div className="link">
		<div>Andrew Aluko</div>
		<h2>Software Developer</h2>
		</div>
		</NavLink>
		</div>
		</div>

		)
	}
}

		
