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
        <p>Loading... your Location</p>
        </div>
      );
    } 

    else {
      var lat = latitude;
      var lon = longitude;
      console.log(lat);
      console.log(lon);
      return (
        <section id="geolocateMap" className="animated fadeInUp">
          <h3 className="animated">Your location coordinates are:</h3>
          <div className="coordinates">
          <p className="lat">Latitude: <span>{lat}</span></p>
          <p className="lon">Longitude: <span>{lon}</span></p>
          </div>
          <div className="mapContainer">           
              <GoogleMap zoom={16} lon={lon} lat={lat}/>
          </div> 
        </section>
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
