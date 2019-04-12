import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const API_PATH = 'http://localhost:1992/portfolio/api/contact/index.php';

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
	  handleFormSubmit = event => {
    event.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
    .then(result => {
      this.setState( { 
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState( { error: error.message } ));
  };


    
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
			{this.state.mailSent  &&
                  <div className="success">Thank you for contacting me!</div>
                }
                {this.state.error  &&
                  <div className="error">Sorry there was a problem sending your email.</div>
                }

		</form>
		</div>
	</div>

        )
    }
}