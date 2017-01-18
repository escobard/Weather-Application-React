import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
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
    var latitude = this.props.location.coords.latitude;
    var longitude = this.props.location.coords.longitude;
    if (latitude <= 0 && longitude <= 0) { 
    console.log("Loading Geolocation...")   
      return (
        <div>
        <p>Loading...</p>
        </div>
      );
    } 

    else {
      var lat = latitude;
      var lon = longitude;
      console.log(lat);
      console.log(lon);
      return (
        <div>
          <div>Latitude: <span>{lat}</span></div>
          <div>Longitude: <span>{lon}</span></div>
          <div>
            <section className="animated fadeInUp mapContainer">
              <GoogleMap lon={lon} lat={lat} />
            </section>
          </div>
        </div>
      );
    }
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
