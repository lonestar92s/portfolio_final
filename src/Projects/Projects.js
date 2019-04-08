import React, { Component } from 'react';
import '../App.css';
import guessing_game from './guessing_game.png'

export default class Projects extends Component {
	render() {
		return (
		<div className="Main">
			<div className="guessingGame">
		      <a href="https://alukoguessinggame.herokuapp.com/" target="_blank" rel="noopener noreferrer">
		      		<img src={guessing_game} alt="guessing game" />
		      </a>
		      </div>
		  </div>  
		
		);
	}
}