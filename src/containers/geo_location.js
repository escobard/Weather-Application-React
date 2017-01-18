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
        <h3>Loading... your Location</h3>
        </div>
      );
    } 

    else if (latitude > 1){
      var lat = latitude;
      var lon = longitude;
      console.log(lat);
      console.log(lon);
      return (
      <article className="card animated fadeInUp" key={latitude}>
            <div className="card-block">
                <h4 className="card-title animated fadeInDown">Your current location is...</h4>
            </div>
        <section id="geolocateMap">
          <div className="mapContainer">           
              <GoogleMap zoom={16} lon={lon} lat={lat}/>
          </div> 
          <div className="coordinates">
          <h5 className="animated fadeInLeft lat">Latitude: <span>{lat}</span></h5>
          <h5 className="animated fadeInRight lon">Longitude: <span>{lon}</span></h5>
          </div>
        </section>   
      </article>        

      );
    }
    else{
        <div>
          <h3>Geolocation failed!</h3>
        </div>
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
