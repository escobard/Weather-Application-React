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
  constructor(props) {
    super(props);
    this.props.getLocation();
  }
  renderWhenReady(){
    const {coords: {latitude, longitude}} = this.props.location;
    console.log(latitude);
    console.log(longitude);
    return (
      <div>
        <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div>
      </div>
    );
  }
  render () {
    return (
      <div>
        {this.renderWhenReady()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {location: state.location};
};

export default connect(mapStateToProps, {getLocation})(Location);
