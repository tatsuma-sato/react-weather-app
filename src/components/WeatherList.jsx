import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import CurrentWeather from "./CurrentWeather";

const END_POINT = "http://api.openweathermap.org/";
const APIKEY = process.env.REACT_APP_API_KEY;

const WeatherList = () => {
  const { city, setCity, isCity, setIsCity } = useGlobalContext();

  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );
      const data = await response.json();

      console.log(data);
      setCurrentWeather(data);
      setLoading(false);
    };
    fetchData(city);
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <div className="container mx-auto mt-24">
        <CurrentWeather weatherData={currentWeather} />
      </div>
    </>
  );
};

export default WeatherList;
