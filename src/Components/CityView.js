import { useEffect, useState } from 'react';
import './CityView.css';
import GetData from '../Controller/GetData.js'

//This component is called from the app component and has search input and button field
//it connects with GetData on the controller folder to acquire searched data
export default function CityView({setCountries, setShowAll}) {
  const [citySearch, setCitySearch] = useState('');
  const [cityList, setCityList] = useState([])


  useEffect(()=>{       
    //it sends search query (citySearch) and sets the result on cityList with the help of setCityList method from useState
    GetData(citySearch, {setCityList})       
  },[citySearch])
  //re-renders every time citySearch value is changed

  const handleChange = (e)=>{
    setCitySearch('') //empties the citySearch before new search query
    e.preventDefault() ;     
    const searchInput = e.target.value;
    setCitySearch(searchInput); //assigns the search query to citySearch
  }
  
  const handleSearch = () =>{ 
    setCountries(cityList) //once the search button is clicked, it sets the list of location recieved from api into 'countries' from app component with help of setCoutries
    setShowAll(true);      //setting showAll to true will triger the login [showCountries = showAll ? countries : search;] in app component which decides wether to show country lsit or search item 
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
