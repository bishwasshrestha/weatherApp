import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Country from './Components/Country';
import ExpandedView from "./Components/ExpandedView";
import Search from './Components/Search'
import WeatherData from "./Components/WeatherData";


const App = () => {
  const [countries, setCountries] = useState(['Nepal']);   
  const [showAll, setShowAll] = useState(true); 
  const [search, setSearch] = useState([]); 
 
  useEffect(() => {
    console.log("effect");
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        console.log("promise fullfilled");
        setCountries(response.data);
      });
  }, []); 
 

  const showExpandedview = ({ data }) => {
    setSearch([data]);
    return <ExpandedView value={data} />;
  };
  var showCountries = showAll ? countries : search;
  
  return (
    <div className="app-view">    
      <Search countries={countries} setShowAll={setShowAll} setSearch={setSearch}/>
      <ul>
        {showAll? (
          showCountries.map((data) => {
            return (
            <div>
              <Country value={data.name} />
            </div>
            )
          })
        ) : showCountries.length === 1 
            ? (
              <div>
                <ExpandedView value={showCountries[0]} />
                <WeatherData country={showCountries[0]}/>              

              </div>) 
            : ( 
              showCountries.map((data, i) => {
                return (
                  <div className="searchResult">
                    <div className="searchResult-country">
                      <Country value={data.name} />
                    </div>
                    <div className='searchResult-button'>
                      <button onClick={()=>showExpandedview({data})}>show</button>
                    </div>
                  </div>
                );
              })
            )}
      </ul>
      
      </div>

  );
};

export default App;
