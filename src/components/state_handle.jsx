/* ===================================

	offline-handle.jsx

======================================*/

import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Location from '../containers/geo_location';
import ScrollToTop from 'react-scroll-up';

export default class StateHandle extends Component {
  stateHandle(){
  	if(!navigator.onLine) { 
	    return (
	    	<article className="offline-text animated fadeInDown">
				<h3>The application is offline!</h3>
				<h3>Please connect to the internet to search the Weather.</h3>
				<img src="src/img/gears.gif" alt="application is offline" />
			</article>
	    );
	}
	else{
		return(
		<div>
			<SearchBar />
	        <WeatherList />
	        <Location />
	        <ScrollToTop showUnder={300}>
			  <img id="scrollToTop" src="src/img/up-arrow.png" alt="scroll to top"/>
			</ScrollToTop>
        </div>
		);
	}
  }

  render() {
    return (
		<div>
			{this.stateHandle()}
		</div>
    );
  }
}