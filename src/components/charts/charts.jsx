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

		return(
			<article className="card animated fadeInDown" key={this.props.key}>

					<section className="charts">
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={this.props.temp} color="#FF5200" units="Celcius"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={this.props.humi} color="#00FF6A" units="%"/>
						</div>
						<div className="chartContainer third animated fadeInUp">
							<ChartSpots chartData={this.props.wind} color="#FF6E00" units="Meters per second"/>
						</div>
					</section>		
			</article>
		);
	}

}