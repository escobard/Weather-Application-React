import React, { Component } from 'react';

// custom components
import Nav from './nav';
import FooterComp from './footer';

// offline handler
import OfflineHandle from './offline-handle';


export default class App extends Component {
  render() {
    return (
    <div>
      <Nav />
    <main className="container">
      <section className="widgetContainer">
        <OfflineHandle />
      </section>
     </main>
     <footer className="page-footer blue center-on-small-only">
       <FooterComp />
     </footer>
    </div>
    );
  }
}
