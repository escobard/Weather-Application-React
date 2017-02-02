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

var API_KEY = '476d4cacd325216ea0fa53dc3b4fe5db';

var ROOT_URL =`https://api.darksky.net/forecast/${API_KEY}`;

export const FETCH_WEATHER_SSL ='FETCH_WEATHER_SSL';

//export class FetchWeather extends Component 

class FetchWeatherSSL extends Component {
	constructor(props){
		super(props);

		this.state ={
			coordinates: this.props.geocode.data.results[0]

		this.fetchWeather = this.fetchWeather.bind(this);
		}
	}
	
	fetchWeather(){
		const coordinates = this.state.coordinates;
		
		const latitude: coordinates.geometry.location.lat;
		const longitude: coordinates.geometry.location.lng;
		const url = `${ROOT_URL}/${latitude},${longitude}`;

		// calls the ajax request with axios
		// this returns a promise
		
		const request = axios.get(url);

		console.log('Request - fetchweather_ssl: ', request);

		// to avoid the convulted overkill application of jQuery for this small app, we will be using another library to generate our
		// AJAX request called axios
		// this library is made solely for making ajax requests to the browser
		// again, need to make sure that syntax is correct within EVERYTHING, otherwise it will cause bugs when exporting to another component
		// was missing commas in the object properties below, caused this component to be unfetchable as a result
		return {
			
			type: FETCH_WEATHER_SSL,
			
			// now that we have the DevOps figured out for the AJAX request, we can create the payload key value for this action
			// the request PROMISE is attached to this action creator's payload
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
export connect(mapStateToProps)(FetchWeatherSSL);
