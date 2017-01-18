/* ===================================

	offline-handle.js

======================================*/

// handles application offline functions

import React, { Component } from 'react';

export default class offlineHandle extends Component {
  offline(){
  	if(!navigator.onLine) { 
	    return (
	    	<section class="animated fadeInUp">
				<h3>Application is offline, please connect to the internet to search the Weather.</h3>
			</section>
	    );

	}
  }

  render() {
    return (
		<div>
			{this.offline};
		</div>
    );
  }
}