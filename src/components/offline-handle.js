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
	    	<div className="offline-text animated fadeInUp">
				<h3>Application is offline, please connect to the internet to search the Weather.</h3>
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