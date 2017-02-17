// =============================================================
// 
// 	index.jsx
//
// =============================================================

import { combineReducers } from 'redux';

// imports the reducers
import weatherData from './reducer_weather_data';
import geocodeWeather from './reducer_geocode_weather_data';
import LocationReducer from './reducer_geolocation';
import geocodeReducer from './reducer_geocode';
import geocodeReducerReverse from './reducer_geocode_reverse';

const rootReducer = combineReducers({

  geoweather: geocodeWeather,
  searchweather: weatherData,
  geocode: geocodeReducer,
  geocodereverse: geocodeReducerReverse,
  location: LocationReducer
});

export default rootReducer;
