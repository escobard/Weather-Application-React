import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// imports actions
import getLocation from '../actions/action_geolocation';
import { fetchWeatherSSL } from '../actions/action_fetchweather_ssl';

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
        </section>   
      </article>        

      );
    }
    else{
        <div>
          <p>Loading... your Location</p>
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

// we can also write it with EMC6 syntax
 function mapStateToProps({ location }){

  // this is how the function now looks
  /*
  return { weather: weather }; */

  //this can be further condensed with ES6 like so:
  // because both the key and the value object have the same identifier
  return { location };
}
function mapDispatchToProps(dispatch) {

  return bindActionCreators({getLocation, fetchWeatherSSL}, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps)(Location);
