import React, { Component } from 'react';

class Chat extends Component {
	constructor(props){
		super(props);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}
	handleSubmitForm (e){
		e.preventDefault();
		let text = this.refs.messageText.value;
		this.props.actions.send(JSON.stringify(text));
	}
	render() {
	    let i=0,
	    messages = this.props.message.map(res=>{
	      return <li className="list-group-item" key={i++}>{res}</li>
	    })
		return (
			<div className="container">
  				<form onSubmit={this.handleSubmitForm}>
  					<div className="form-group">
  							<input type="text" className="form-control" ref="messageText"/>
  							<span className="input-group-button">
  								<button type="submit" className="btn btn-primary">Submit</button>
  							</span>
  					</div>
  				</form>
  				<ul className="list-group">{messages}</ul>
			</div>
		);
	}
}
export default Chat;