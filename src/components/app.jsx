/* ===================================

    app.jsx

======================================*/

import React, { Component } from 'react';

import Nav from './nav';
import FooterComp from './footer';

import StateHandle from './state_handle';

export default class App extends Component {
  render() {
    return (
    <div>
      <Nav />
    <main className="container">

      <section className="widgetContainer">
        <StateHandle />
      </section>

     </main>

     <footer className="page-footer blue center-on-small-only">
       <FooterComp />
     </footer>

    </div>
    );
  }
}
