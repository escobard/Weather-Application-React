// =============================================================
// 
// 	google_map.js
//
// =============================================================

// imports react main 
import React from 'react';

// imports google maps component, more on that here : https://github.com/tomchentw/react-google-maps
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) => {
	return (

		<GoogleMapLoader 
		
		containerElement={
		 <div style={{height: '100%'}} />
		}

		googleMapElement={
			<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} 

			/>
		}

		/>		

	);
}