import React, { useEffect, useState } from "react";
import cloudy from "../assets/weatherImages/cloudy_transparent.png";
import sunny from "../assets/weatherImages/sun_transparent.png";
import rainy from "../assets/weatherImages/rain_transparent.png";
import sun_rain from "../assets/weatherImages/sun-rain_transparent.png";
import { countries } from "country-data";
import { getTemp } from "../util";
import { AiOutlineArrowUp } from "react-icons/ai";

const CurrentWeather = ({ weatherData }) => {
  // console.log(weatherData);

  const {
    name,
    weather,
    main: { temp: tempreture, temp_max, temp_min, humidity },
    wind,
    dt,
    sys: { country, sunrise, sunset },
  } = weatherData;

  const [currentWeather, setCurrentWeather] = useState(
    weather[0].main.toLowerCase()
  );
  const [formattedTime, setFormattedTime] = useState("");
  const [temp, setTemp] = useState("");
  const [formatedDate, setFormattedDate] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  const options = { weekday: "long", month: "long", day: "numeric" };

  useEffect(() => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    setFormattedDate(date.toLocaleDateString("en-gb", options));
    setFormattedTime(formattedTime);
    setTemp(getTemp(tempreture));
    setCurrentCountry(countries[country].name);
  }, []);

  return (
    <>
      <div className="whether_container bg-gray-opacity px-5 py-5">
        <div className="location">
          <h1 className="text-3xl">
            {name}, {currentCountry}
          </h1>
          <div>
            <p>{formatedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>

        <div className="text-center">
          <div className="weather-stats stats bg-transparent">
            <div className="stat flex items-center ">
              <div className="stat-figure h-32">
                <img src={sunny} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col items-center">
                <p className="stat-value text-6xl">{temp}°</p>
                <p className="stat-desc opacity-100 text-xl">
                  {weather[0]?.description}
                </p>
              </div>
            </div>

            <div className="stat grid grid-rows-2 grid-flow-col gap-y-4 gap-x-8">
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">{getTemp(temp_max)}°</h1>
                <p className="stat-desc opacity-100 text-base">High</p>
              </div>
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">{getTemp(temp_min)}°</h1>
                <p className="stat-desc opacity-100 text-base">Low</p>
              </div>
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">
                  <AiOutlineArrowUp
                    className="inline"
                    style={{
                      transform: `translateY(-4px) rotate(${wind.deg}deg)`,
                    }}
                  />
                  {wind.speed.toFixed(1)} m/s
                </h1>
                <p className="stat-desc opacity-100 text-base">Wind</p>
              </div>
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">{humidity}%</h1>
                <p className="stat-desc opacity-100 text-base">Humidity</p>
              </div>
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">{getTime(sunrise)}</h1>
                <p className="stat-desc opacity-100 text-base">Sunrise</p>
              </div>
              <div className="flex flex-col">
                <h1 className="stat-value text-2xl">{getTime(sunset)}</h1>
                <p className="stat-desc opacity-100 text-base">Sunset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

export default CurrentWeather;
