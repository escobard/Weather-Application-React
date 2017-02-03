// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

// includes our axios API
import axios from 'axios';

// new API call for darksky weather API
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/476d4cacd325216ea0fa53dc3b4fe5db/53.5444389,-113.4909267

import React, { Component } from 'react';
import { connect } from 'react-redux';

const API_KEY = '476d4cacd325216ea0fa53dc3b4fe5db';

const ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

export const FETCH_WEATHER_SSL ='FETCH_WEATHER_SSL';

//export class FetchWeather extends Component 

export class FetchWeatherSSL extends Component {
	constructor(props){
		super(props);

		this.state ={
			coordinates: this.props.geocode.data.results[0]
		};
		this.fetchWeather = this.fetchWeather.bind(this);
	}
	
	fetchWeather(){
		const coordinates = this.state.coordinates;
		const url = `${ROOT_URL}/${latitude},${longitude}`;

		// calls the ajax request with axios
		// this returns a promise
		
		const request = axios.get(url);

		console.log('Request - fetchweather_ssl: ', request);

		return {
			
			type: FETCH_WEATHER_SSL,
			payload: request
		};

	}

}
// we can also write it with EMC6 syntax
 function mapStateToProps({ geocode }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { geocode };
}

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
connect(mapStateToProps)(FetchWeatherSSL);
