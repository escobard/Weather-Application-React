// =============================================================
// 
// 	reducer_geocode.jsx
//
// =============================================================

import { FETCH_GEOCODE_REVERSE } from '../actions/action_fetch_geocode_reverse';

function geocodeReducerReverse(state = [], action){

	switch (action.type){

		case FETCH_GEOCODE_REVERSE:

			return [ action.payload.data.results[0], ...state ];

	};

	return state;
};

export default geocodeReducerReverse;