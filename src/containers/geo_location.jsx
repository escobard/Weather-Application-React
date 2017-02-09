import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

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

var COORDS = [];

class Location extends Component {
  constructor(props) {
    super(props);
    this.props.getLocation();
    // to bind .this to any specific function so it points to the constructor, we use the following method:
    // sets coordinate variables
    this.fetchLocal = this.fetchLocal.bind(this);
    this.renderWhenReady = this.renderWhenReady.bind(this);
    this.state = {
      data: []
    };
  }
  fetchLocal(){
    var coords = this.props.location.coords;
    var lat = coords.latitude;
    var lon = coords.longitude;
    console.log('IT BIN FETCHED');
    console.log('THESE BE THE COORDS', lat, lon);
    fetchWeatherSSL(lat,lon);
    var data = DataHandler;
    console.log(data);
    this.setState({data: this.state.data.push(DataHandler)});
    console.log(this.state.data[0]);

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
            <button onClick={this.fetchLocal}>Click to fetch the local forecast.</button>
          </section>  

        </article>        

      );
    }

    // handle for geolocation failing
    else {
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
