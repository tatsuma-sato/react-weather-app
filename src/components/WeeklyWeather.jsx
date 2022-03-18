import React from "react";
import cloudy from "../assets/weatherImages/cloudy_transparent.png";
import sunny from "../assets/weatherImages/sun_transparent.png";
import rainy from "../assets/weatherImages/rain_transparent.png";
import sun_rain from "../assets/weatherImages/sun-rain_transparent.png";
import snow from "../assets/weatherImages/snowflake_trasparent.png";
import { getTemp } from "../util";

const WeeklyWeather = ({ data }) => {
  let weekday = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");

  return (
    <div className="flex flex-col gap-5">
      {data.map((item, i) => {
        const {
          dt,
          temp: { max, min },
          weather,
          wind_speed,
          humidity,
        } = item;

        const main = weather[0]?.main; // weather
        const _date = new Date(dt * 1000);
        const date = _date.getDate();
        const month = _date.getMonth();
        const day = _date.getDay();
        return (
          <div key={i}>
            <div className="flex flex-row justify-between bg-gray-opacity py-4 px-6 text-center">
              <div>
                <h1>{weekday[day]}</h1>
                <p>
                  {date}/{month}
                </p>
              </div>

              <div className="img w-12 h-12">
                <img
                  src={getWeatherImg(main)}
                  className="h-full w-full"
                  alt={main}
                />
              </div>

              <div className="flex-col">
                <h1>{getTemp(max)}°</h1>
                <p>Max</p>
              </div>

              <div className="flex-col">
                <h1>{getTemp(min)}°</h1>
                <p>Low</p>
              </div>

              <div className="flex-col">
                <h1>{wind_speed} m/s</h1>
                <p>Wind</p>
              </div>
              <div className="flex-col">
                <h1>{humidity}%</h1>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getWeatherImg = (weather) => {
  switch (weather) {
    case "Rain":
      return rainy;
    case "Snow":
      return snow;
    case "Clear":
      return sunny;
    case "Clouds":
      return cloudy;
    default:
      return null;
  }
};

export default WeeklyWeather;

// date, day, weather, temp-low temp-high, wind, rain-chance
