import "./App.css";
import { useState } from "react";
import Country from "./Components/Country";
import ExpandedView from "./Components/ExpandedView";
// import Search from "./Components/Search";
import WeatherData from "./Components/WeatherData";
import CityView from "./Components/CityView";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState([]); 

  var showCountries = showAll ? countries : search;
  
  const showExpandedview = ({ data }) => {
    setCountries([])
    setShowAll(false)
    setSearch([data]);
    return <ExpandedView value={data} />;
  };

  
  return (
    <div className="app-view"> 
    {/* component that takes the query from user and returns result based on it */}
    <CityView setCountries={setCountries} setShowAll={setShowAll} setSearch={setSearch} />
     {/* <Search
        countries={countries}
        setShowAll={setShowAll}
        setSearch={setSearch}
      />  */}
      <div className="country-list">
        <ul>
          {/*old code that displayed list of all the countries */}
          { 
          //Before a search query is entered, showall value is true therefore application will show all countries
            // showAll ? 
            //   (showCountries?.map((data, i) => {
            //     return (
            //       <div>
            //         <Country id={i} value={data.display_name} />
            //       </div>
            //     );
            //   })
            // ) 
            // :
            
            // if showCountries has only one value it automatically goes to expanded view
             showCountries?.length === 1 ? (               
                <div>
                  <ExpandedView value={showCountries[0]}/>   
                  <WeatherData country={showCountries[0]}/>
                </div> ) 
              : ( 
              //if search result is more than one i.e. result has many values holding all or part of search query then it will display the list with open button on the side
                showCountries?.map((data, i) => {
                return (
                  <div className="searchResult">
                    <div className="location-marker">
                      <span className="material-icons md18">location_on</span>
                    </div>
                    <div className="searchResult-country">
                      <Country id={i} onClick={()=>showExpandedview({data})} value={data.display_name} /> {/* the displayed results can be clicked to select the desired value to be expanded*/}
                    </div>
                    {/* <div className="searchResult-button">
                      <button onClick={() => showExpandedview({ data })}>
                        show
                      </button> 
                    </div>*/}
                  </div>
                );
              })
          )
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
