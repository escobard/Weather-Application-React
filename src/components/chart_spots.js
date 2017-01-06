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
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';

// creates the avarage function
function avarage(data) {
		
	return _.round(_.sum(data)/data.length);
};

// trying to use an ES6 function here
export default (props) => {
	return (
		<div>
		<div>
			<Sparklines className="chartActual" height={120} width={180} data={props.chartData}>
				<SparklinesSpots />
				<SparklinesLine style={{ fill: "none" }} color={props.color} />
			</Sparklines>
		</div>
			<div>{avarage(props.chartData)} {props.units}</div>
		</div>
		
	);

}

