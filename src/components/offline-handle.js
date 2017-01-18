/* ===================================

	offline-handle.js

======================================*/

// handles application offline functions

import React, { Component } from 'react';

// imports components

// custom containers
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Location from '../containers/geo_location';


export default class OfflineHandle extends Component {
  offline(){
  	if(!navigator.onLine) { 
	    //
	    
	    return (
	    	<div className="offline-text ">
				<h3 className="animated fadeInDown">The application is offline!</h3>
				<img className="animated fadeIn" src="img/gears.gif" alt="application is offline" />
				<h3 className="animated fadeInUp">Please connect to the internet to search the Weather.</h3>
			</div>
	    );
	}
	else{
		return(
		<div>
			<SearchBar />
	        <WeatherList />
	        <Location />
        </div>
		);
	}
  }

  render() {
    return (
		<div>
			{this.offline()}
		</div>
    );
  }
}