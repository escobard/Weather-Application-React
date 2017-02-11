// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

import { combineReducers } from 'redux';

// imports the reducers
import sslDataReducer from './reducer_weather_data';
import LocationReducer from './reducer_geolocation';
import geocodeReducer from './reducer_geocode';

const rootReducer = combineReducers({
  
  // adds the reducer data to our App.state
  sslweather: sslDataReducer,
  geocode: geocodeReducer,
  location: LocationReducer
});

export default rootReducer;
