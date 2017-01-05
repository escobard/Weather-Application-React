import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
		<nav className="navbar navbar-dark bg-primary navbar-fixed-top">

		    <div className="nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <a className="navbar-brand">Navbar</a>
		            <ul className="nav navbar-nav">
		                <li className="nav-item active">
		                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
		                </li>
		            </ul>
		        </div>

		    </div>

		</nav>
    );
  }
}