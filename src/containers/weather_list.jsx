// =============================================================
// 
// 	weather_list.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// imports charts
import Charts from '../components/charts/charts';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
	constructor(props){
		super(props);

		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(weather){
	console.log('CURRENT WEATHER', weather[0]);
	console.log('CURRENT GEO', this.props.geocode);
		

		return(
			<article className="card animated fadeInDown">
				    <div className="card-block">
				        <h4 className="card-title animated fadeInDown">Forecast for </h4>
				    </div>
			</article>
		);
	}
	
	render(){
		return(
			<div>
				{this.props.geocode.map(this.renderWeather)}
		</div>
			

		);
	}

}

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather, geocode, sslweather }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { weather, geocode, sslweather };
}

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
export default connect(mapStateToProps) (WeatherList);