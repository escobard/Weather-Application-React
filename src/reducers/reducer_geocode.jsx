// =============================================================
// 
// 	reducer_geocode.jsx
//
// =============================================================

import { FETCH_GEOCODE } from '../actions/action_fetch_geocode';

function geocodeReducer(state = [], action){

	switch (action.type){

		case FETCH_GEOCODE:

			return [ action.payload.data.results[0], ...state ];

	};

	return state;
};

export default geocodeReducer;