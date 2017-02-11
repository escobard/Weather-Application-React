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

	constructor(props){
		super(props);

		this.state = { searchTerm: '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
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
		
		// sets up promise to fetch the data for the geocode based on the city name and the weather data
		var fetchCityWeather = this.props.fetchGeocode(this.state.searchTerm).then(function(result){
			var lat = result.payload.data.results[0].geometry.location.lat
			var lon = result.payload.data.results[0].geometry.location.lng;
			console.log('COORDINATES', lat, lon);
			props.fetchSSLWeather(lat, lon);
		});
		this.setState({ searchTerm: ''});
	}

	render(){

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

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather, fetchGeocode, fetchSSLWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);