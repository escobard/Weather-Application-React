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
import { fetchWeather } from '../actions/action_fetchweather';
import { fetchGeocode } from '../actions/action_fetch_geocode';
import {fetchSSLWeather} from '../actions/action_fetch_ssl_data';

class SearchBar extends Component {

	// initiates the state of our component using the usual methods
	constructor(props){
		super(props);

		// this create the state of this component, for the search term
		this.state = { searchTerm: '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.fetchData = this.fetchData.bind(this);
	}

	// interesting to remember, all event handlers create a standard event object, which contains the actual event action
	// 
	onInputChange(event) {

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

		this.props.fetchGeocode(this.state.searchTerm);
	    this.fetchData(this.props.geocode);
		// then for user convinience (if the want to search the weather for something else) 
		// we clear out the searchTerm string
		this.setState({ searchTerm: ''});
	}
	fetchData(){
		var fetchData = new Promise(
	        function(resolve, reject) {
			resolve(this.props.fetchGeocode(this.state.searchTerm));
			reject('ERROR');
	        }
	    );		
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
					className="form-control animated fadeInLeft"
					value={this.state.searchTerm}
					onChange={this.onInputChange}
				/>
					<button type="submit" id="subButton" className="btn btn-primary animated fadeInRight">Submit</button>


			</form>

		);

	}

};
function mapStateToProps({ sslweather, geocode}){
  return {sslweather, geocode};
}
function mapDispatchToProps(dispatch){

	return bindActionCreators({ fetchWeather, fetchGeocode, fetchSSLWeather }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);