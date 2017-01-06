// =============================================================
// 
// 	search_bar.js
//
// =============================================================

import React, { Component } from 'react';

// this is done to connect the action creator reducer with this component 
import { connect } from 'react-redux';

// this is to bind the action creator itself to this component
import { bindActionCreators } from 'redux';

// this is the actual action creator created in actions/index.js
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {

	// initiates the state of our component using the usual methods
	constructor(props){
		super(props);

		// this create the state of this component, for the search term
		this.state = { searchTerm: '' }

		// to bind .this to any specific function so it points to the constructor, we use the following method:
		this.onInputChange = this.onInputChange.bind(this);
		// broken down below
		// this. = the SearchBar class
		// onInputChange = the function within the SearchBar class called onInputChange
		// .bind(this) = binds the SearchBar class to the this. parameter within the onInputChange function as a result
		// 
		// same thing is done on onFormSubmit for the .this value
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// interesting to remember, all event handlers create a standard event object, which contains the actual event action
	// 
	onInputChange(event) {

		// this logs the value of the input .target being the parent element (the input) and .value being the value of the input
		console.log('The search bar value is: ' + event.target.value);

		// this makes it so that the final value of the input sets the .state.searchTerm value
		// this throws an error because .this is bound to the event change function, not the constructor
		// to fix this, refer to the constructor notes 'bind' above
		this.setState({ searchTerm: event.target.value})
	}
	
	// need to add a function to PREVENT form submit on enter, causing issues within single-page apps
	// 
	// this is done with the onFormSubmit function 
	// 
	onFormSubmit(event) {
		
		// prevents default on the form submit (or when a user clicks submit / presses enter)
		// this is the default HTML form behavior
		event.preventDefault();

		// this now fetches the weather action creator accordingly
		this.props.fetchWeather(this.state.searchTerm);

		// then for user convinience (if the want to search the weather for something else) 
		// we clear out the searchTerm string
		this.setState({ searchTerm: ''});
	}

	render(){

		// this is going to be a controlled field
		// controlled field is a form element where the value is set by the STATE of the component 
		// 

		return (
		
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					id="searchInput"
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control animated slideInLeft"
					value={this.state.searchTerm}
					onChange={this.onInputChange}
				/>
					<button type="submit" id="subButton" className="btn btn-primary animated slideInRight">Submit</button>


			</form>

		);

	}

};

// this binds the action creator fetch weather to our SearchBar component
function mapDispatchToProps(dispatch){

	return bindActionCreators({ fetchWeather }, dispatch);

};

// this connects the fetchWeather action creator to the SearchBar component, allowing it to be called within the SearchBar function
// null is set as the first argument, because action creators MUST always be the second argument of the connect function
// since in this case we do not have a reducer (because we are using middlewaare to fetch state data) the argument must be set as null
// since there is no reducer attached to the fetchWeather action creator
// 
// to summarize, this gives us access to SearchBar.props.fetchWeather or within the SearchBar class, to this.props.fetchWeather
// 
export default connect(null, mapDispatchToProps)(SearchBar);