import React, { Component } from 'react';
import '../App.css';
import guessing_game from './guessing_game.png'
import liveWell from './liveWell.png'

export default class Projects extends Component {
	render() {
		return (
	<div className="Main">
		<div className="grid">
			<h1 className="projectHeader">Projects</h1>
		      <a href="https://alukoguessinggame.herokuapp.com/" target="_blank" rel="noopener noreferrer">
		      		<img className="projects" src={guessing_game} alt="guessing game" />
		      </a><span>gueesing game</span>
		     <a href="https://livewellaluko.herokuapp.com/" target="_blank" rel="noopener noreferrer">
		      		<img className="projects" src={liveWell} alt="live well" />
		     </a>
		</div>
	</div>  
		
		);
	}
}
			
		      		
		      