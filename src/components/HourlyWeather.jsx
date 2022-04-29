import React from "react";
import cloudy from "../assets/weatherImages/cloudy_transparent.png";
import sunny from "../assets/weatherImages/sun_transparent.png";
import rainy from "../assets/weatherImages/rain_transparent.png";
import sun_rain from "../assets/weatherImages/sun-rain_transparent.png";
import snow from "../assets/weatherImages/snowflake_trasparent.png";
import { getTemp } from "../util";

const HourlyWeather = ({ data }) => {
  return (
    <div className="my-6">
      <div className="flex gap-4 justify-between">
        {data.map((item, i) => {
          if (i % 3 !== 0) return;
          const { dt, weather, temp } = item;
          const main = weather[0]?.main;
          const date = new Date(dt * 1000);
          let AmPm = "am";
          let hour = date.getHours();
          if (hour > 12) {
            AmPm = "pm";
            hour = (date.getHours() + 24) % 12 || 12;
          }

          return (
            <div
              className="flex flex-col p-2 text-center bg-gray-opacity w-32 items-center "
              key={i}
            >
              <p className="mb-2">
                {hour}
                {AmPm}
              </p>
              <div className="-container w-12 h-12 mb-2">
                <img
                  src={getWeatherImg(main)}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <p>{getTemp(temp)}°</p>
            </div>
          );
        })}
      </div>
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

export default HourlyWeather;
