/* ===================================

	nav.js

======================================*/

import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
    	<header>
		<nav className="navbar navbar-fixed-top navbar-dark bg-primary">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand animated slideInDown"><img className="animated rubberBand" src="img/clouds.png" alt="weather icon"/>Weather Application - v0.97</h1>
		        </div>

		    </div>

		</nav>
		</header>
    );
  }
}