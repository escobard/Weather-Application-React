// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

export const FETCH_DATA ='FETCH_DATA';

const fetchSSLData = (data) => {
	console.log('Action - Weather - Request: ', data);
	return {
		type: FETCH_DATA,
		payload: data
	};
};


export default fetchSSLData;