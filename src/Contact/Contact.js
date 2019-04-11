import React, { Component } from 'react';
import '../App.css';



export default class Contact extends Component {
	state = {
		fname: '',
	    lname: '',
	    email: '',
	    message: '',
	    mailsent: false,
	    error: null
	}
	// event handler
	handleFormSubmit =(event)=> {
	  event.preventDefault();
	  console.log(this.state);
	}
    
    render() {
        return (
    <div>
	   <div className="App">
    	<h1>Email me!</h1>
		<form action="/action_page.php">
			<label>First Name</label>
			<input type="text"id="fname"name="firstname" placeholder="Your name.." value={this.state.fname} onChange={event=> this.setState({ fname: event.target.value })}/>

			<label>Last Name</label>
			<input type="text"id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={event=> this.setState({ lname: event.target.value })}/>


			<label>Email</label>
			<input type="email"id="email"name="email"placeholder="Your email" value={this.state.email} onChange={event => this.setState({ email: event.target.value })}/>


			<label>Subject</label>
			<textarea id="subject"name="subject"placeholder="Write something.." onChange={event => this.setState({ message: event.target.value})} value={this.state.message}>
			</textarea>
			<input type="submit"value="Submit" onClick={event => this.handleFormSubmit(event)} />
		</form>


		</div>
	</div>

        )
    }
}