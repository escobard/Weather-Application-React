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

const rootReducer = combineReducers({

  geoweather: geocodeWeather,
  searchweather: weatherData,
  geocode: geocodeReducer,
  location: LocationReducer
});

export default rootReducer;
