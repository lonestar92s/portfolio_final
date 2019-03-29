import React, { Component } from 'react';
import '../App.css';
import image from './profile.jpeg'



export default class Home extends Component{
	render() {
		return (
		
	  <div className="Main">
	  <div className="Parent">	
		<div clasName="Image">
		<img src={image} alt="profile" />
		</div>
	  </div>
	  <section className="About">
	<div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
      <p>Hello, I am a Full-Stack Software Developer. Born and raised in Austin, TX currently living in Chicago, IL.</p>
      <p>it</p>
      <p>me</p>
      <p></p>
    </div>
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="ui vertical divider">
    
  </div>
</div>
	  </section>
	  </div>	
		
		)
	}
}
		

	
		

