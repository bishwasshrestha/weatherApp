import React from "react";
import './DailyData.css'


const DailyData = ({value}) =>{
  const dailydata = value.data.daily;
  return(
    <div className="daily-data">     
    {
      dailydata.map((day, i)=>{      
        let dt = new Date(day.dt * 1000).toDateString()
        let sunrise = new Date(day.sunrise *1000).toTimeString('hh:mm')
        let sunset = new Date(day.sunset*1000).toTimeString('hh:mm')

        return (
          <div className="daily">
            <p>{(dt)}</p>            
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
            />          
          <p>Max-temp: {day.temp.max}&deg;C</p>
          <p>Min-temp: {day.temp.min}&deg;C</p>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <p>Humidity: {day.humidity} %</p>         
          <p>Weather: {day.weather[0].description}</p>         
          </div>
        )
      })
    }     
    </div>
  );
}  


export default DailyData;

