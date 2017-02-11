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
	const weathercurrent = weather;
	console.log('weather', weather);
	return weather.map((weather) => {
		const lat = weather.latitude;
		const lon = weather.longitude;
		var alerts;
        if (weather.alerts == undefined) {
          alerts = undefined;
        } else {
          alerts = weatherData.alerts.map(alertData => alertData.description);
        }
		const summary = weather.daily.summary;
        // console.log(alerts);

        const temp = weather.daily.data.map(temps => temps.apparentTemperatureMax);
        // console.log(temp);

        const humi = weather.daily.data.map(humis => humis.humidity);
        // console.log(humi);

        const wind = weather.daily.data.map(winds => winds.windSpeed);
        // console.log(wind);
        
		console.log('CURENT WEATHER', weather);
		return (
			<article className="card animated fadeInDown searchWeather" key={lat}>
						    <div className="card-block">
						        <h4 className="card-title animated fadeInDown">Forecast for ... </h4>
						    </div>
							<section id="geolocateMap">
				            	<div className="mapContainer animated fadeInDown">           
				                	<GoogleMap zoom={12} lon={lon} lat={lat}/>
				            	</div> 
				          	</section> 
				          	<div className="localWeather">
					            <Charts key={lon} summary={summary} temp={temp} humi={humi} wind={wind} alerts={alerts}/>    
					        </div>  
			</article>
		);
	});
	}
	
	render(){
		return(
			<div>
				{this.renderWeather(this.props.searchweather)}
		</div>
			

		);
	}

}

// we can also write it with EMC6 syntax
 function mapStateToProps({ weather, geocode, searchweather }){

 	// this is how the function now looks
 	/*
	return { weather: weather }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { geocode, searchweather };
}

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
export default connect(mapStateToProps) (WeatherList);