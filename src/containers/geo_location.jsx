import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// imports actions
import getLocation from '../actions/action_geolocation';
import {fetchWeatherSSL, handleData} from '../middleware/fetchweather_ssl_middleware';

// imports gmap
import GoogleMap from '../components/google_map';

// imports charts
import Charts from '../components/charts/charts';

class Location extends Component {
  constructor(props) {
    super(props);
    // to bind .this to any specific function so it points to the constructor, we use the following method:
    this.handleData = this.handleData.bind(this);
    this.renderWhenReady = this.renderWhenReady.bind(this);
    this.state = {
          alerts : '',
          summary : '',
          weather: '',
          humidity : '',
          pressure : ''
    };
  }
  // sets the object data from the middleware into our ssl data reducer
  handleData(data){
        if (data == undefined){
          return;
        }
        else {
          console.log('Fetch Weather SSL - Success!', data);
          const reducedData = { 
                alerts : data.alerts[0].description,
                summary : data.hourly.summary,
                weather : data.hourly.data.map(weatherTemps => weatherTemps.temperature),
                humidity : data.hourly.data.map(weatherHum=> weatherHum.humidity),
                pressure : data.hourly.data.map(weatherHum=> weatherHum.pressure)
          }
          this.renderData(reducedData);
        };
  }
  renderData(reducedData){
    console.log('reducedData= ', reducedData)
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

  // renders container
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
