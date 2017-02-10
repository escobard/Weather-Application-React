// =============================================================
// 
// 	charts/charts.jsx
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartLines from './chart_lines';
import ChartBars from './chart_bars';
import ChartSpots from './chart_spots';

export default class Charts extends Component {
	render(){
		var alerts = this.props.alerts;
		// checks for empty alert array
        if (alerts == undefined) {
          var alerts = 'There are no weather alerts in your area';
        } else {
          var alerts = alerts;
        } 
		return(
			<article className="card animated fadeInDown" key={this.props.key}>
					
					<section className="charts">
					<div id="summary"><h4 className="card-title animated fadeInDown">{this.props.summary}</h4></div>
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={this.props.temp} color="#FF5200" units="Celcius"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={this.props.humi} color="#00FF6A" units="%"/>
						</div>
						<div className="chartContainer third animated fadeInUp">
							<ChartSpots chartData={this.props.wind} color="#FF6E00" units="Meters per second"/>
						</div>
					<div id="alerts"><p>{alerts}</p></div>
					</section>		
			</article>
		);
	}

}