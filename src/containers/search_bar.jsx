// =============================================================
// 
// 	search_bar.js
//
// =============================================================

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/action_fetchweather';
import { fetchGeocode } from '../actions/action_fetch_geocode';

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

		this.props.fetchWeather(this.state.searchTerm);

		this.props.fetchGeocode(this.state.searchTerm);

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

	return bindActionCreators({ fetchWeather, fetchGeocode }, dispatch);

};


export default connect(null, mapDispatchToProps)(SearchBar);