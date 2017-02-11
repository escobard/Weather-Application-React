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
import { fetchGeocode } from '../actions/action_fetch_geocode';
import { fetchSearchWeather } from '../actions/action_fetch_weather_data';

class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { searchTerm: '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.validation = this.validation.bind(this);
	}

	onInputChange(event) {

		this.setState({ searchTerm: event.target.value})
	}
	
	// need to add a function to PREVENT form submit on enter, causing issues within single-page apps
	// 
	// this is done with the onFormSubmit function 
	// 
	onFormSubmit(event) {

		event.preventDefault();
		
		// binds this.props to a variable that is usable within this scope
		var props = this.props;
		var searchTerm = this.state.searchTerm;

		// checks for empty search strings
		if (searchTerm == '') {
			console.log('ERROR');
			this.validation('show');
		} else {
			console.log('WORKING');
			this.validation('hide');
		}

		// sets up promise to fetch the data for the geocode based on the city name and the weather data
		var fetchCityWeather = this.props.fetchGeocode(searchTerm).then(function(result){
			var lat = result.payload.data.results[0].geometry.location.lat
			var lon = result.payload.data.results[0].geometry.location.lng;
			console.log('COORDINATES', lat, lon);
			props.fetchSearchWeather(lat, lon);
		});
		this.setState({ searchTerm: ''});
	}
	validation(status){
		var status = status;
		var error = document.querySelector('#searchError');
		switch(status) {
		    case 'show':
		        error.classList.remove('hidden');
		        return;
		    case 'hide':
		        error.classList.add('hidden');
		        return;
		}
	}
	render(){

		return (
			<div>
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
				<span id="searchError" className="hidden">Please make sure to enter a valid city name.</span>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchGeocode, fetchSearchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);