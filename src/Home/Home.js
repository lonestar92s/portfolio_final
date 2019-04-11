import React, { Component } from 'react';
import '../App.css';
import image from './profile.jpeg'



export default class Home extends Component{
	render() {
		return (
		
	  <div className="Main">
	  <div className="Parent">	
		<img src={image} alt="profile" className="Image" />
	  </div>
		<div className="About">
		<h1> Who I Am</h1>
		I am a Full-Stack Developer who is passionate about solving complex problems with clear and concise solutions. I love building straightforward applications that provide ease of use. Outside of software development I enjoy making music, traveling, religously watching soccer and eating tacos.
		<h1>Technologies</h1>
		<ul>
			<li>Languages: Javascript, HTML/CSS, Python, SQL</li>
			<li>Frameworks/Libraries: Node.js, Express.js, React, Django, Bootstrap</li>
			<li>Dev Ops: AWS, GitHub, Heroku, Postman</li>
		</ul>
		</div>
	  </div>	
		)
	}
}
		

	
		
		
		

