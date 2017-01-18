import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';

// imports actions
import getLocation from '../actions/action_geolocation';


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
