// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

import { combineReducers } from 'redux';

// imports the reducers
import weatherReducer from './reducer_weather';
import LocationReducer from './reducer_geolocation';

const rootReducer = combineReducers({
  
  // adds the reducer data to our App.state
  weather: weatherReducer,
  location: LocationReducer
});

export default rootReducer;
