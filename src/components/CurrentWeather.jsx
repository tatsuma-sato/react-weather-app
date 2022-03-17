import React, { useEffect, useState } from "react";
import cloudy from "../assets/weatherImages/cloudy-day.png";
import sunny from "../assets/weatherImages/sun.png";
import rainy from "../assets/weatherImages/rain.png";
import sun_rain from "../assets/weatherImages/sun-rain.png";
import { getDay } from "../util";
import { countries } from "country-data";

const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);

  const {
    name,
    weather,
    main,
    wind,
    dt,
    sys: { country },
  } = weatherData;

  const [currentWeather, setCurrentWeather] = useState(
    weather[0].main.toLowerCase()
  );
  const [day, setDay] = useState("");
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
    setDay(getDay(date.getDay()));
    setFormattedTime(formattedTime);
    setTemp((main.temp - 273.15).toFixed(1));
    setCurrentCountry(countries[country].name);
  }, []);

  return (
    <>
      <div className="location">
        <h1>
          {name}, {currentCountry}
        </h1>
        <div>
          <p>{formatedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
