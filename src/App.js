import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Components/Country";
import ExpandedView from "./Components/ExpandedView";
import Search from "./Components/Search";
import WeatherData from "./Components/WeatherData";
import CityView from "./Components/CityView";

const App = () => {
  const [countries, setCountries] = useState(["Nepal"]);
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState([]); 

  var showCountries = showAll ? countries : search;

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v2/all").then((response) => {
      console.log("promise fullfilled");
      setCountries(response.data);      
    });
    
  }, []);

  const showExpandedview = ({ data }) => {
    setSearch([data]);
    return <ExpandedView value={data} />;
  };
  
  return (
    <div className="app-view"> 
     <Search
        countries={countries}
        setShowAll={setShowAll}
        setSearch={setSearch}
      /> 
      <div className="country-list">
        <ul>
          { 
          // Before a search query is entered, showall value is true therefore application will show all countries
            showAll ? (
              showCountries.map((data, i) => {
                return (
                  <div>
                    <Country id={i} value={data.name} />
                  </div>
                );
              })
            ) 
            :
             //if search result has any value returned, it will modify show all to false therefore this second condition will execute
             showCountries.length === 1 ? (               
                <div>
                  <ExpandedView value={showCountries[0]} />   
                  <WeatherData country={showCountries[0]}/>
                </div> ) 
              : ( 
              //if search result is more than one i.e. result has many values holding all or part of search query then it will display the list with open button on the side
                showCountries.map((data, i) => {
                return (
                  <div className="searchResult">
                    <div className="searchResult-country">
                      <Country id={i} value={data.name} />
                    </div>
                    <div className="searchResult-button">
                      <button onClick={() => showExpandedview({ data })}>
                        show
                      </button>
                    </div>
                  </div>
                );
              })
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
