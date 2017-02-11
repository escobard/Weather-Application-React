// =============================================================
// 
// 	chart_bars.jsx
//
// =============================================================

import React from 'react';

import _ from 'lodash';

import { Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

function avarage(data) {
		
	return _.round(_.sum(data)/data.length);
};

export default (props) => {
	return (
		<div>
		<div>
			<Sparklines className="chartActual" height={120} width={180} data={props.chartData}>
				<SparklinesBars style={{ fill: "#00e660" }}/>
			</Sparklines>
		</div>
			<div><h5 className="chartDescription animated fadeIn">Humidity: {avarage(props.chartData)} {props.units}</h5></div>
		</div>
		
	);

}

