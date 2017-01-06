// =============================================================
// 
// 	chart.js
//
// =============================================================

// this was created since we will be using the same code multiple times to generate the weather charts

import React from 'react';

// imports lodash command library, more on lodash here : https://github.com/lodash/lodash
import _ from 'lodash';

// imports the chart API for reat, Sparklines, more on that here : https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';

// creates the avarage function
function avarage(data) {
		
	return _.round(_.sum(data)/data.length);
};

function chartType(type) {
	
	var chartType = '<SparklinesLine color={props.color}>';
	// generates the switch for each chart type
	switch (type) {
	  case 'line':
	    return '<SparklinesLine color={props.color}>';
	    break;
	  case 'bar':
	    return '<SparklinesBars color={props.color}>';
	    break;
	  case 'spots':
	    return '<SparkLinesSpots color={props.color}>';
	    break;
	  default:
	    return '<SparklinesLine color={props.color}>';
	    break;
	};
};

// trying to use an ES6 function here
export default (props) => {
	return (
		<div>
		<div>
			<Sparklines className="chartActual" height={120} width={180} data={props.chartData}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
		</div>
			<div>{avarage(props.chartData)} {props.units}</div>
		</div>
		
	);

}

