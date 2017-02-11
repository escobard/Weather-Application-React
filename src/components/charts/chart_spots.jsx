// =============================================================
// 
// 	chart_spots.jsx
//
// =============================================================

import React from 'react';

import _ from 'lodash';

import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';

function avarage(data) {
		
	return _.round(_.sum(data)/data.length);
};

export default (props) => {
	return (
		<div>
		<div>
			<Sparklines className="chartActual" height={120} width={180} data={props.chartData}>
				<SparklinesSpots />
				<SparklinesLine style={{ fill: "none" }} color={props.color} />
			</Sparklines>
		</div>
			<div><h5 className="chartDescription animated fadeIn">Wind Speed: {avarage(props.chartData)} {props.units}</h5></div>
		</div>
		
	);

}

