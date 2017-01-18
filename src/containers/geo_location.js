import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';

// imports actions
import getLocation from '../actions/action_geolocation';

// imports gmap
import GoogleMap from '../components/google_map';

class Location extends Component {
  componentWillMount() {
    this.props.getLocation();
  }
  fetchCoordinate(){

    var latitude = this.props.location.coords.latitude;
    var longitude = this.props.location.coords.longitude;
    
    return (
      <div>
        <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div>
      </div>
    );
  }
  fetchMapCoords(){
  // only able to do this with a set-timeout unfortunately
  setTimeout(() => {
    const {coords: {latitude, longitude}} = this.props.location;
    console.log("LAT" + latitude);
    console.log("LON" + longitude);
    },500);
  }
  render () {
    return (
    <div> 
        {this.fetchCoordinate()}
        {this.fetchMapCoords()}
    </div>
    );
  }
}

function mapStateToProps ({location}){
  return {location};
};

export default connect(mapStateToProps, {getLocation})(Location);
