
import axios from 'axios';
const GetData = (city, {setCityList})=> {
  //Api domain 

    const URL = "https://nominatim.openstreetmap.org/search?"
    
    //api parameters 
    const params = {
      q:city,
      format:'json',
      addressdetails:1,
      polygon_geojson:0
    }
    const queryString = new URLSearchParams(params).toString();
    const requestMethod = {   
      method:'GET',
      redirect:'follow',
      'Access-Control-Allow-Origin':'*',
      mode:'no-cors'
    }

     axios(`${URL}${queryString}`, requestMethod)
    .then(response => {
      // console.log('get data response:',response.data)
      setCityList(response.data)}) 
    .catch(err => console.log('axios error:', err)) 
}

export default GetData;