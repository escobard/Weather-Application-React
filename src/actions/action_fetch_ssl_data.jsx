// =============================================================
// 
// 	actions/fetchweather.js
//
// =============================================================

export const FETCH_DATA ='FETCH_DATA';

const fetchSSLData = (data) => {
  const datas = data;
  
  const dataRetrieval = new Promise((resolve, reject) => {
    if (!datas) {
      reject(new Error('Not Supported'));
    }
    resolve(datas);
  });
	console.log('Action - Weather - Request: ', data);
	return {
		type: FETCH_DATA,
		payload: data
	};
};


export default fetchSSLData;