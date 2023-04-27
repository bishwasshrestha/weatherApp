import axios from 'axios';
import React, { useState } from 'react'
import './CityView.css';

export default function CityView({setSearch}) {
  const [citySearch, setCitySearch] = useState('');
  const [cityList, setCityList] = useState([])

  const handleChange = (e)=>{
    e.preventDefault() 
    setCitySearch(e.target.value)
  }

  const handleCityClick = ({city}) => {
   console.log(city);
    setCitySearch(city)
  }
  //Api domain
const URL = "https://nominatim.openstreetmap.org/search?"


const handleSearch = () =>{
  //api parameters 
  const params = {
    q:citySearch,
    format:'json',
    addressdetails:1,
    polygon_geojson:0
  }
  const queryString = new URLSearchParams(params).toString();
  const requestMethod = {   
    method:'GET',
    redirect:'follow'  
  }

  axios(`${URL}${queryString}`, requestMethod)
  .then(response => setCityList(response.data)) 
  .catch(err => console.log('axios error:', err))  
}

  return (
    <div className='city-View'>
    <div className='city-Search'>
      <input name='citySearch' value={citySearch} onChange={handleChange} placeholder='Search by City Name'/>
      <button onClick={handleSearch}>Search</button>      
    </div>
    <div className='city-List'>
      <ul>
      {
        cityList ?
        (
          cityList.map((city,i) => {
            return (<li id={i} onClick={()=>handleCityClick({city})}>{city?.display_name}</li>)
          })
        )        
        : <></>
      }
      </ul>
    </div>
    </div>
  )
}
