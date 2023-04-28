import { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherData.css";
import DailyData from "./DailyData";
import Map from './Map'
// import CityView from "./CityView";

const WeatherData = ({ country }) => {

  const [weatherData, setWeatherData] = useState('');   

  useEffect(() => {
    const coordinates = [country.lat,country.lon];      
    const api_key = process.env.REACT_APP_API_KEY;
    const unit = "metric"
    const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${unit}&exclude=minutely,hourly&appid=${api_key}`;

    axios
      .get(URL)
      .then((response) => {
        console.log("weather data recieved!");
        setWeatherData(response);      
      })
      .catch(err=>{console.log('axios error:',err)});  
      
    }, [country]);

  return (
    <div className="weather_tab">
      {/* if weather data is available, it should display basic weather information about this country */}
      <div>
      {        
        weatherData ? (
          <div className="weather-info">            
            <div>
              Current temperature {weatherData.data.current.temp}&deg;C
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.data.current.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
            <div>{weatherData.data.current.weather[0].main}</div>
            <div> Wind speed {weatherData.data.current.wind_speed} m/s</div>  

            {/* Display 5 days forcast  */}
            <div className="dailt-forcast">
              <DailyData value={weatherData}/>                    
            </div>        

            <div className="map">
              <Map value={country}/>
            </div>
          </div>
        ) : <div></div>
        //once weather data is recieved, it should be shown here as a return package for weatherData component
      }
      </div>     
    </div>
  )
};

export default WeatherData;
