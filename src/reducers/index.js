// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

import { combineReducers } from 'redux';

// imports the WeatherReducer
import weatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  
  // adds the reducer data to our App.state
  weather: weatherReducer
});

export default rootReducer;
