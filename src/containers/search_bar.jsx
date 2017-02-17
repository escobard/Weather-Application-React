// =============================================================
// 
// 	search_bar.jsx
//
// =============================================================

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

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
	
	onFormSubmit(event) {

		event.preventDefault();
		
		// binds this.props to a variable that is usable within this scope
		var props = this.props;
		var searchTerm = this.state.searchTerm;

		// checks for empty search strings
		if (searchTerm == '') {
			// console.log('ERROR');
			this.validation('show');
			return;
		} else {
			// console.log('WORKING');
			this.validation('hide');
		}

		// sets up promise to fetch the data for the geocode based on the city name and the weather data
		var fetchCityWeather = this.props.fetchGeocode(searchTerm).then(function(result){
			var lat = result.payload.data.results[0].geometry.location.lat
			var lon = result.payload.data.results[0].geometry.location.lng;
			// console.log('COORDINATES', lat, lon);
			props.fetchSearchWeather(lat, lon);
		});
		this.setState({ searchTerm: ''});
	}

	validation(status){
		var status = status;
		var error = document.querySelector('#searchError');
		switch(status) {
		    case 'show':
		        error.classList.remove('hidden','fadeOutUp');
		        error.classList.add('shake');
		        return;
		    case 'hide':
		    	error.classList.remove('shake');
		    	error.classList.add('fadeOutUp');
		    	setTimeout(function(){
		    		error.classList.add('hidden');
		    	},500)
		        
		        return;
		}
	}
	
	render(){

		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="input-group">
					<label id="searchLabel" htmlFor="searchInput" aria-hidden="false">Enter the name of a city to Fetch it's 5 day
					<input 
						id="searchInput"
						placeholder="Type in the name of a city"
						className="form-control animated fadeInLeft"
						value={this.state.searchTerm}
						onChange={this.onInputChange}
					/></label>
						<button type="submit" id="subButton" className="btn btn-primary animated fadeInRight">Search</button>
				</form>
				<span id="searchError" className="hidden animated shake">Please enter a valid city name.</span>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchGeocode, fetchSearchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);