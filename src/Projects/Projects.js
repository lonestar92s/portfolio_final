import React, { Component } from 'react';
import '../App.css';
import guessing_game from './guessing_game.png'
import liveWell from './liveWell.png'

export default class Projects extends Component {
	render() {
		return (
	<div className="Main">
			<h1 className="projectHeader">Projects</h1>
			    <div className="guessingGame">
				    <a href="https://alukoguessinggame.herokuapp.com/" target="_blank" rel="noopener noreferrer">
				      <img className="projects" src={guessing_game} alt="guessing game" />
				     </a>
			     </div>
			     <p className="description">A time based guessing game where you have 60 seconds and 10 attempts to guess what the secret number is! Built with javascript, jQuery, HTML and CSS. </p>
				 <div className="liveWell">   
				  <a href="https://livewellaluko.herokuapp.com/" target="_blank" rel="noopener noreferrer">
				  	<img className="projects" src={liveWell} alt="live well" />
				  </a>
				  </div>			
		 		<p className="description">liveWell is a real estate app that allows the user to search any residential property by address and get information such as square footage, bedrooms, bathrooms and Walkscore.</p>
		 		<h2 className="projectHeader">Repositories</h2>
		 		<ul>
		 			<li><a  style={{color: 'blue'}}href="https://github.com/lonestar92s/guessing-game" target="_blank" rel="noopener noreferrer">Guessing Game</a></li>
		 			<li><a  style={{color: 'blue'}}href="https://github.com/lonestar92s/liveWell" target="_blank" rel="noopener noreferrer">liveWell: React</a></li>
		 			<li><a  style={{color: 'blue'}}href="https://github.com/lonestar92s/liveWell_backend" target="_blank" rel="noopener noreferrer">liveWell: Node</a></li>
		 		</ul>
	</div>  
		
		);
	}
}
			
		      		
		      