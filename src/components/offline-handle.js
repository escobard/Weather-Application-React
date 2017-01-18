/* ===================================

	offline-handle.js

======================================*/

// handles application offline functions

import React, { Component } from 'react';

export default class OfflineHandle extends Component {
  offline(){
  	if(navigator.onLine) { 
	    //
	    
	    return (
	    	<div className="animated fadeInUp">
				<h3>Application is offline, please connect to the internet to search the Weather.</h3>
			</div>
	    );
	}
  }

  render() {
    return (
		<div>
			{this.offline()}
		</div>
    );
  }
}