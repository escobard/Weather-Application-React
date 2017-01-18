// =============================================================
// 
// 	actions/geolocation.js
//
// =============================================================

// Redux Action Types
export const GET_LOCATION = 'GET_LOCATION';

function getLocation () {
  const geolocation = navigator.geolocation;
  
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
  
  return {
    type: GET_LOCATION,
    payload: location
  }
};

export default getLocation;