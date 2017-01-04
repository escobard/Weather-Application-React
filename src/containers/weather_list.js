// =============================================================
// 
// 	weather_list.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData){
		
		// this assigns a var to our cityData
		const cityName = cityData.city.name;

		// for our sparklines charts to work, we basically just need an array of numbers, which is what is passed into the temps const
		// after mapping the correct data
		// 
		// this basically grabs the cityData.list object, then maps out every child array with a function
		const temps = cityData.list.map(weatherTemps => 
			// this then grabs all the VALUES of the temp array, which contains the city's temperature for the next 5 days
			weatherTemps.main.temp);
		console.log(temps);

		// sets up the variable to map each pressure array and generate our chart 
		const pressures = cityData.list.map(weatherPress => weatherPress.main.pressure);
		console.log(pressures);

		// sets up the variable to map each humidity array and generate our chart 
		const humidities = cityData.list.map(weatherHumi => weatherHumi.main.humidity);
		console.log(humidities);

		/* this is the ES5 way of grabbing the data
		// sets up the variable to grab the .lon array from cityData
		const lon = cityData.city.coord.lon;

		// sets up the variable to grab the .lat array from cityData
		const lat = cityData.city.coord.lat;
		*/
	
		// this is the ES6 way of grabbing the lon / lat data
		const { lon, lat } = cityData.city.coord;
		return(

			<tr key={cityName}>
				
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart chartData={temps} color="orange" units="Kelvin"/></td>
				<td><Chart chartData={pressures} color="red" units="hPa"/></td>
				<td><Chart chartData={humidities} color="blue" units="%"/></td>
				
			</tr>

		);
	}
	
	render(){
		return(

			<table className="table table-hover">

				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>

			</table>

		);
	}

}

// this is how it's usually written, to pass the state.weather object into this container
/* function mapStateToProps(state){
	return {weather: state.weather};
} */

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { weather };
}

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
export default connect(mapStateToProps)(WeatherList);