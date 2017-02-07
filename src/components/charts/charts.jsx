// =============================================================
// 
// 	charts/charts/jsx
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartLines from './chart_lines';
import ChartBars from './chart_bars';
import ChartSpots from './chart_spots';
import GoogleMap from '../google_map';

export default class Charts extends Component {
	render(){

		// sets our coordinate data
		const lat = this.props.lat;
		const lon = this.props.lon;

		// sets our city data
		const cityName = this.props.cityName;
		const temps = this.props.temps;
		console.log(temps);
		const pressures = this.props.pressures;
		console.log(pressures);
		const humidities = this.props.humidities;
		console.log(humidities);

		return(
			<article className="card animated fadeInDown" key={cityName}>
				    <div className="card-block">
				        <h4 className="card-title animated fadeInDown">Forecast for {cityName}</h4>
				    </div>
				    <section className="animated fadeInUp mapContainer">
				    	<GoogleMap zoom={12} lon={lon} lat={lat} />
				    </section>
					<section className="charts">
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={temps} color="#FF5200" units="Kelvin"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={humidities} color="#00FF6A" units="%"/>
						</div>
						<div className="chartContainer third animated fadeInUp">
							<ChartSpots chartData={pressures} color="#FF6E00" units="%"/>
						</div>
					</section>		
			</article>
		);
	}

}