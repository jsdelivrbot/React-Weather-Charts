// import axios ajax library
import axios from 'axios';

const API_KEY = 'becd4aa142f0f707efaf65c62f74181a';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;
const countryCode = 'AU';

//export action type to share with reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// create action
// actions always have type
export function fetchWeather(city){

  const url = `${rootUrl}&q=${city},${countryCode}`;
  const request = axios.get(url);

  console.log('Request — ', request);

  return {

    // reference the action type const
    type: FETCH_WEATHER,
    payload: request

    //// payload === Promise : intercepted by 'redux-promise'
    /// waits for Promise to resolve
    // returns a new payload: response from Promise

  };
}
