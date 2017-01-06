import React, { Component } from 'react';
import Intro from './intro';

export default class Nav extends Component {
  render() {
    return (
    	<header>
		<nav className="navbar navbar-dark bg-primary navbar-fixed-top">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand">Weather Application - Capstone Project - v0.4</h1>
		        </div>

		    </div>

		</nav>
		<Intro />
		</header>
    );
  }
}