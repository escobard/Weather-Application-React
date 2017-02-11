// =============================================================
// 
//  reducer_geolocation.jsx
//
// =============================================================

import { GET_LOCATION } from '../actions/action_geolocation';

var INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

function LocationReducer (state = INIT_STATE, action) {
  switch(action.type) {
  case GET_LOCATION:
    return action.payload;
  default:
    return state;
  }
};

export default LocationReducer;