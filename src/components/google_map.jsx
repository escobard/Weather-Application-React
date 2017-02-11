// =============================================================
// 
// 	google_map.jsx
//
// =============================================================
 
import React from 'react';

import {GoogleMap, GoogleMapLoader, Marker} from 'react-google-maps';

export default (props) => {
	return (

		<GoogleMapLoader 
		
		containerElement={
		 <div style={{height: '100%'}} />
		}

		googleMapElement={
			<GoogleMap 
				defaultZoom={props.zoom} 
				defaultCenter={{lat: props.lat, lng: props.lon}} 
				
			/>

		}

		/>		

	);
}