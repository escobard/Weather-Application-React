import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// imports actions
import getLocation from '../actions/action_geolocation';
import fetchSSLData from '../actions/action_fetch_ssl_data';
import {fetchWeatherSSL, DataHandler} from '../middleware/fetchweather_ssl_middleware';

// imports gmap
import GoogleMap from '../components/google_map';

// imports charts
import Charts from '../components/charts/charts';

// runs functions at start
function dataTest(lat, lon){
      var lat = lat;
      var lon = lon;
      console.log('THIS IS LAT', lat);
      console.log('THIS IS LON', lon);
          switch(lat === 0) {
    case true:
        console.log('lat is', lat);
        return;
    case false:
        console.log('lat is', lat);
        return;
    default:
        console.log('lat is', lat);
        return;
    }

};

var LATITUDE;
var LONGITUDE;

class Location extends Component {
  constructor(props) {
    super(props);
    // to bind .this to any specific function so it points to the constructor, we use the following method:
    // sets coordinate variables
    var lat = this.props.location.coords.latitude;
    var lon = this.props.location.coords.longitude;
    const dataSet = dataTest(lat, lon);
    this.renderNew = this.renderNew.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.renderWhenReady = this.renderWhenReady.bind(this);
    this.state = {
      data: this.props.ssldata
    }
    this.sendAction(lat);
  }
  sendAction(lat){
    var lat = lat;
    console.log(lat);
    function bindData(){
    switch(lat === 0) {
    case true:
        console.log('lat is', lat);
        return;
    case false:
        console.log('lat is', lat);
        return;
    default:
        console.log('lat is', lat);
        return;
    }
    if (lat === 1) {
      console.log('TESTING LAT LESS THAN 0');
    } else if (lat > 1) {
      console.log('TESTING LAT MORE THAN 0');
      this.props.fetchSSLData(Data);
    }
    };
  }
  fetchWeather(data){
          var Data = data;
          var lat = this.props.location.coords.latitude;
          var lon = this.props.location.coords.longitude;
          fetchWeatherSSL(lat,lon);
          console.log('here be the SSL', Data);
          return data.map((datas) => {
            const dataLat = datas.latitude;
            console.log('HERE IS THE DATA', dataLat); 
          });
    /*
                alerts : data.alerts[0].description,
                summary : data.hourly.summary,
                weather : data.hourly.data.map(weatherTemps => weatherTemps.temperature),
                humidity : data.hourly.data.map(weatherHum=> weatherHum.humidity),
                pressure : data.hourly.data.map(weatherHum=> weatherHum.pressure)
                */

  }
  renderWhenReady(){
    // sets coordinate variables

    const lat = this.props.location.coords.latitude;
    const lon = this.props.location.coords.longitude;

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
  renderNew(data){
    var Data = DataHandler;

    switch(data === 0) {
    case true:
        console.log('Coordinates have not been searched', data);
        console.log('Current Data', DataHandler);
        this.props.getLocation();
        return;
    case false:
        console.log('Coordinates have been searched', data);
        console.log('Current Data', DataHandler);
        console.log('LATITUDE', LATITUDE);
        console.log('LONGITUDE', LONGITUDE);
        this.fetchWeather(Data);
    default:
        return;
    }
  }
  coordChange(){
    console.log(this.props.location.coords.latitude)
  }
  // renders container
  render () {
    return (

      <div>
        {this.renderWhenReady()}
        {this.renderNew(this.props.location.coords.latitude)}
        <div>
        </div>
      </div>

    );
  }
}

function mapStateToProps({ location, ssldata }){
  return {ssldata, location};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLocation, fetchSSLData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
