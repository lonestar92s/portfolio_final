import React, { Component } from 'react';
import '../App.css';
import image from './profile.jpeg'



export default class Home extends Component{
	render() {
		return (
		
	  <div className="Parent">	
		<div clasName="Image">
		<img src={image} alt="profile" />
		</div>
	  </div>	
		
		)
	}
}
		
	
		

