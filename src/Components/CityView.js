import { useEffect, useState } from 'react';
import './CityView.css';
import GetData from '../Controller/GetData.js'

export default function CityView({setCountries, setShowAll}) {
  const [citySearch, setCitySearch] = useState('');
  const [cityList, setCityList] = useState([])


  useEffect(()=>{       
    GetData(citySearch, {setCityList})       
  },[citySearch])

  const handleChange = (e)=>{
    setCitySearch('')
    e.preventDefault() ;     
    const searchInput = e.target.value;
    setCitySearch(searchInput);
  }
  
  const handleSearch = () =>{ 
    setCountries(cityList)
    setShowAll(true);      
  }

  return (
    <div className='city-View'>
    <div className='city-Search'>
      <input name='citySearch' value={citySearch.display_name} onChange={handleChange} placeholder='Search by City Name'/>
      <button onClick={handleSearch}>Search</button>      
    </div>   
    </div>
  );
}
