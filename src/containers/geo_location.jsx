// =============================================================
// 
//  geo_location.jsx
//
// =============================================================

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getLocation from '../actions/action_geolocation';
import {fetchGeocodeReverse} from '../actions/action_fetch_geocode_reverse';
import {fetchGeocodeWeather} from '../actions/action_fetch_geocode_weather_data';

import GoogleMap from '../components/google_map';

import Charts from '../components/charts/charts';

class Location extends Component {
  constructor(props) {
    
    super(props)
    this.props.getLocation();

    this.fetchLocal = this.fetchLocal.bind(this);
    this.renderWhenReady = this.renderWhenReady.bind(this);

  }

  fetchLocal(){
    const lat = this.props.location.coords.latitude;
    const lon = this.props.location.coords.longitude;

    this.props.fetchGeocodeWeather(lat, lon);
    this.props.fetchGeocodeReverse(lat, lon);

    var local = document.querySelector('#localWeather');
    var button = document.querySelector('#fetchWeather');
    var container = document.querySelector('#geolocate');

    button.classList.add('hidden');
    local.classList.remove('hidden');
    container.classList.add('buttonClicked');

  }

  renderWhenReady(){
    
    const weather = this.props.geoweather[0];
    const cityData = this.props.geocodereverse[0];
    const lat = this.props.location.coords.latitude;
    const lon = this.props.location.coords.longitude;
    
    if (lat <= 0 && lon <= 0) { 

      // console.log("Loading Geolocation...")   
        return (
          <div>
          <p className="animated fadeInLeft">Loading... your Location</p>
          </div>
        );
    } 
    
    else if (lat > 1){
    
      // console.log(lat);
      // console.log(lon);
      // console.log(this.props.location);

      if (weather == undefined) {
        
        // console.log('weather data empty');
        var alerts;
        var summary;
        var temp=[];
        var humi=[];
        var wind=[];
      }

      else {
        var city = cityData.address_components[3].long_name;
        var province = cityData.address_components[5].long_name;
        var country = cityData.address_components[6].long_name; 
        console.log('Geolocation weather data fetched! - ', weather);
        console.log('Geolocation city data fetched! - ', cityData);
        if (weather.alerts == undefined) {
          alerts = undefined;
        } else {
          alerts = weather.alerts.map(alertData => alertData.description);
        }
        
        // console.log(alerts);
        
        var summary = weather.hourly.summary;
        // console.log(summary);
        
        var temp = weather.hourly.data.map(temps => temps.temperature);
        // console.log(temp);

        var humi = weather.hourly.data.map(humis => humis.humidity);
        // console.log(humi);

        var wind = weather.hourly.data.map(winds => winds.windSpeed);
        // console.log(wind);
      }

      return (
      
        <article id="geolocate" className="card animated fadeInUp" key={lat}>
          
          <div className="card-block">
            <h4 className="card-title animated fadeInDown">Your current location is ...</h4>
          </div>
          
          <section id="geolocateMap">
            <div className="mapContainer animated fadeInDown">           
                <GoogleMap zoom={16} lon={lon} lat={lat}/>
            </div> 
            <button id="fetchWeather" className="btn btn-primary animated fadeInUp" onClick={this.fetchLocal}>Show your local hourly forecast</button>
          </section>  
          <div id="localWeather" className="hidden">
            <h3 className="card-title animated fadeInDown">48 hour forecast for: {city}, {province}, {country}.</h3>
            <Charts key={lat} summary={summary} temp={temp} humi={humi} wind={wind} alerts={alerts}/>
            
          </div>  
        </article>        

      );
    }

    // handle for geolocation failing
    else {
     
        <div>
     
          <p className="geoError animated shake">Loading... your Location</p>
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

function mapStateToProps({ geoweather, geocodereverse, location}){
  return {geoweather, geocodereverse, location};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchGeocodeWeather, fetchGeocodeReverse, getLocation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
