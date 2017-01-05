import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Nav from './nav';
import FooterComp from './footer';


export default class App extends Component {
  render() {
    return (
    <div>
      <Nav />
    <main className="container">
      <SearchBar />
      <WeatherList />
     </main>
     <footer className="page-footer blue center-on-small-only">
       <FooterComp />
     </footer>
    </div>
    );
  }
}
