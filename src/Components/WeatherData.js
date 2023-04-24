import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherData.css";
import DailyData from "./DailyData";
const WeatherData = ({ country }) => {
  const [weatherData, setWeatherData] = useState();  

  useEffect(() => {
    const coordinates = [country.latlng[0], country.latlng[1]];
    const api_key = process.env.REACT_APP_API_KEY;
    const unit = "metric"
    const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${unit}&exclude=minutely,hourly&appid=${api_key}`;
  
    axios
      .get(URL)
      .then((response) => {
        console.log("weather data recieved!");
        setWeatherData(response);      
      })
      .catch(err=>{console.log(err)})   
  }, [country]); 
 

  return (
    <div className="weather_tab">
      <div className="weather-heading">
        <h2>Weather in {country.capital}</h2>
      </div>
      {        
        weatherData ? (
          <div className="weather-info">
            <div>
              Current temperature {weatherData.data.current.temp} Celcius
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.data.current.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
            <div>{weatherData.data.current.weather[0].main}</div>
            <div> Wind speed {weatherData.data.current.wind_speed} m/s</div>   
            <div className="dailt-forcast">
              <DailyData value={weatherData}/>        
            </div>
          </div>
        ) : (
          <div>data not available</div>
        )
        //once weather data is recieved, it should be shown here as a return package for weatherData component
      }
    </div>
  )
};

export default WeatherData;
