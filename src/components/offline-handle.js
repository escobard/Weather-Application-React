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
	    	<article className="offline-text animated fadeInDown">
				<h3>The application is offline!</h3>
				<h3>Please connect to the internet to search the Weather.</h3>
				<img src="img/gears.gif" alt="application is offline" />
			</article>
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