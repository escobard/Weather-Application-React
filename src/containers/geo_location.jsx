import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// imports actions
import getLocation from '../actions/action_geolocation';
import fetchSSLData from '../actions/action_fetch_ssl_data';
import {fetchWeatherSSL, DataHandler} from '../middleware/fetchweather_ssl_middleware';
import _ from 'lodash';
// imports gmap
import GoogleMap from '../components/google_map';

// imports charts
import Charts from '../components/charts/charts';


class Location extends Component {
  constructor(props) {
    super(props);
    // to bind .this to any specific function so it points to the constructor, we use the following method:
    // sets coordinate variables

    this.fetchWeather = this.fetchWeather.bind(this);
    this.renderWhenReady = this.renderWhenReady.bind(this);
    this.props.fetchSSLData(DataHandler);
    this.state = {
      data: this.props.ssldata
    }
  }
  fetchWeather(){
    const lat = this.props.location.coords.latitude;
    const lon = this.props.location.coords.longitude;
    fetchWeatherSSL(lat,lon);
    return(
      <div>
        <p>WWEWHE</p>
      </div>
    )
  }
  renderWhenReady(){
    // sets coordinate variables
    this.props.getLocation();
    const lat = this.props.location.coords.latitude;
    const lon = this.props.location.coords.longitude;

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
      // 
      
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

    // handle for geolocation failing
    else{
        <div>
          <p>Loading... your Location</p>
          console.log("Geolocation failed.")           
        </div>
    }
  }

  // renders container
  render () {
    return (

      <div>
        {this.renderWhenReady()}
        <div>
          {this.fetchWeather()}
        </div>
      </div>

    );
  }
}

function mapStateToProps({ location, ssldata }){
  return { location, ssldata };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSSLData, getLocation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
