import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from 'redux';

import getLocation from '../actions/action_geolocation';


/* Redux Action Types
const GET_LOCATION = 'GET_LOCATION';

const getLocation = () => {
  const geolocation = navigator.geolocation;
  
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
  
  return {
    type: GET_LOCATION,
    payload: location
  }
};

/* const Header = (props) => {
  return (
    <header><h1>{props.title}</h1></header>
  );
}; */

class Location extends Component {
  componentWillMount() {
    this.props.getLocation();
  }

  render () {
    const {coords: {latitude, longitude}} = this.props.location;
    
    return (
      <div>
        <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div>
      </div>
    );
  }
}

function mapStateToProps ({location}){
  return {location};
};

export default connect(mapStateToProps, {getLocation})(Location);

/* const GeoLocate = () => {
  return (
    <div>
      <Location />
    </div>
  );
}; */

/*
Actions

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

const LocationReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
  case GET_LOCATION:
    return action.payload;
  default:
    return state
  }
} */

/* 
reducers

const rootReducer = combineReducers ({
  location: LocationReducer
});

/* simplified React Promise Middleware 
function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return next => action => {
    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({...action, payload: result}),
          error => dispatch({...action, payload: error, error: true })
        )
      : next(action);
  };
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
export default class RenderLocation extends Component{
render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <GeoLocate />
  </Provider>
);
} */