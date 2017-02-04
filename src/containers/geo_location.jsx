import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// imports actions
import getLocation from '../actions/action_geolocation';
import {postWeatherSSL} from '../actions/action_post_weather_ssl';
import {fetchWeatherSSL, handleData} from '../middleware/fetchweather_ssl_middleware';

// imports gmap
import GoogleMap from '../components/google_map';

class Location extends Component {
  constructor(props) {
    super(props);
    this.props.getLocation();
  }
  renderWhenReady(){

    var lat = this.props.location.coords.latitude;
    var lon = this.props.location.coords.longitude;


    
    if (lat <= 0 && lon <= 0) { 
    console.log("Loading Geolocation...")   
      return (
        <div>
        <p>Loading... your Location</p>
        </div>
      );
    } 

    else if (lat > 1){

      console.log(lat);
      console.log(lon);
      
      // fetches the weather API based on geolocation
      const retrieveWeather = fetchWeatherSSL(lat,lon, handleData);

      function handleData(data){
        console.log('Fetch Weather SSL - Success!', data);
        if (data == undefined){
          return;
        }
        else {
          console.log('DEFINED');
          return data;
        };

      }

      return (
      <article className="card animated fadeInUp" key={lat}>
        
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
          console.log("Geolocation failed.")           
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
 function mapStateToProps({ location, weatherssl }){

  // this is how the function now looks
  /*
  return { weather: weather }; */

  //this can be further condensed with ES6 like so:
  // because both the key and the value object have the same identifier
  return { location, weatherssl };
}
function mapDispatchToProps(dispatch) {

  return bindActionCreators({getLocation, postWeatherSSL}, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps)(Location);
