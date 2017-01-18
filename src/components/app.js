import React, { Component } from 'react';

// custom containers
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Location from '../containers/geo_location';

// custom components
import Nav from './nav';
import FooterComp from './footer';

import OfflineHandle from './offline-handle';


export default class App extends Component {
  render() {
    return (
    <div>
      <Nav />
    <main className="container">
      <section className="widgetContainer">
        <SearchBar />
        <OfflineHandle />
        <Location />
        <WeatherList />
      </section>
     </main>
     <footer className="page-footer blue center-on-small-only">
       <FooterComp />
     </footer>
    </div>
    );
  }
}
