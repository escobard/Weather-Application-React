import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// imports actions
import getLocation from '../actions/action_geolocation';
import {fetchWeatherSSL, handleData} from '../middleware/fetchweather_ssl_middleware';

// imports gmap
import GoogleMap from '../components/google_map';

class Location extends Component {
  constructor(props) {
    super(props);
    // to bind .this to any specific function so it points to the constructor, we use the following method:
    this.handleData = this.handleData.bind(this);

    this.state ={
      coordinates: ''
    }
  }
  // sets the object data from the middlware into our ssl data reducer
  handleData(data){
        console.log('Fetch Weather SSL - Success!', data);
        if (data == undefined){
          return;
        }
        else {
          console.log('DEFINED', data);
        };
    return;
  }
  renderWhenReady(){
    this.props.getLocation();
    // sets coordinate variables
    var lat = this.props.location.coords.latitude;
    var lon = this.props.location.coords.longitude;

    // handle for empty coordinates
    if (lat <= 0 && lon <= 0) { 
    console.log("Loading Geolocation...")   
      return (
        <div>
        <p>Loading... your Location</p>
        </div>
      );
    } 
    
    // return this if coordinates are not empty
    else if (lat > 1){

      console.log(lat);
      console.log(lon);
      
      // fetches the weather API AJAX middleware based on geolocation
      fetchWeatherSSL(lat,lon, this.handleData);
      // sets the object data from the middlware into our ssl data reducer
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

  return bindActionCreators({getLocation}, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps)(Location);
