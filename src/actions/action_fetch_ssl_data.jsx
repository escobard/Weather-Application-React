// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

export const FETCH_DATA ='FETCH_DATA';

const fetchSSLData = (data) => {
  const data = data;
  
  const dataRetrieval = new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Not Supported'));
    }
    
    data.getCurrentData((datas) => {
      resolve(datas);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });

	console.log('Request: ', data);

	// to avoid the convulted overkill application of jQuery for this small app, we will be using another library to generate our
	// AJAX request called axios
	// this library is made solely for making ajax requests to the browser
	// again, need to make sure that syntax is correct within EVERYTHING, otherwise it will cause bugs when exporting to another component
	// was missing commas in the object properties below, caused this component to be unfetchable as a result
	return {
		
		type: FETCH_DATA,
		
		// now that we have the DevOps figured out for the AJAX request, we can create the payload key value for this action
		// the request PROMISE is attached to this action creator's payload
		payload: data
	};
};


export default fetchSSLData;