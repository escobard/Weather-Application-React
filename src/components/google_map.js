// =============================================================
// 
// 	google_map.js
//
// =============================================================

// imports react main 
import React from 'react';

// imports google maps component, more on that here : https://github.com/tomchentw/react-google-maps
import {GoogleMap, GoogleMapLoader, Marker} from 'react-google-maps';

export default (props) => {
	return (

		<GoogleMapLoader 
		
		containerElement={
		 <div style={{height: '100%'}} />
		}

		googleMapElement={
			<GoogleMap 
				ref={(map) => console.log(map)} 
				defaultZoom={props.zoom} 
				defaultCenter={{lat: props.lat, lng: props.lon}} 
				onClick={props.onMapClick}
			/>

		}

		/>		

	);
}