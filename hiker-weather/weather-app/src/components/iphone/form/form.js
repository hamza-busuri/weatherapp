import { h, render, Component } from 'preact';
	
import React from "react";
import { Link } from "react-router";
export default class Form extends Component {

    /*constructor(props){
		super(props);

		this.state = {value:''};
		this.handleSubmit = this.handleSubmit.bind(this);

		handleSubmit(event){
			alert('Thank you for planning your route');
			event.preventDefault();
		}*/
	// rendering a function when the button is clicked

	render() {
		
		return (
			<form onSubmit = {this.handleSubmit}>
			<label>
			   DateHere:
			   <input type = "text" value={this.state.value}/>
			</label>
		     <input type = "submit" value = "Submit"/>
		    </form>
		);
	}
}
