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

  }
  // sets the object data from the middleware into our ssl data reducer
  handleData(data){
        if (data == undefined){
          return;
        }
        else {
          console.log('Fetch Weather SSL - Success!', data);

          // sets up the render data objects, this process should be done via the reducer once custom middleware processes are applied
          const alerts = data.alerts[0].description;
          console.log("alerts =", alerts);

          // hourly
          const hourlySummary = data.hourly.summary;
          console.log("hourly summary=", hourlySummary);
          const hourlyTemp = data.hourly.data.map(weatherTemps => weatherTemps.temperature);
          console.log("hourly temp=", hourlyTemp)
          const hourlyHum = data.hourly.data.map(weatherHum=> weatherHum.humidity);
          console.log("hourly hum=", hourlyHum)
          const hourlyPress = data.hourly.data.map(weatherHum=> weatherHum.pressure);
          console.log("hourly press=", hourlyPress)
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

  render () {

    return (

      <div>
        {this.renderWhenReady()}
      </div>

    );
  }
}

function mapStateToProps({ location, weatherssl }){
  return { location, weatherssl };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLocation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
