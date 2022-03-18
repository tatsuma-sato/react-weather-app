import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { useFetch } from "../hooks/useFetch";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import WeeklyWeather from "./WeeklyWeather";

const END_POINT = "http://api.openweathermap.org/data/2.5/";
const APIKEY = process.env.REACT_APP_API_KEY;

const WeatherList = () => {
  const { city, setCity, isCity, setIsCity, location } = useGlobalContext();

  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchCurrentWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${END_POINT}weather?q=${city}&appid=${APIKEY}`
        );
        const data = await response.json();
        console.log(data);
        setCurrentWeather(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentWeather();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchHoulyWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${END_POINT}onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutesly&appid=${APIKEY}`
        );
        const data = await response.json();
        console.log(data);
        setHourlyWeather(data.hourly.slice(2, 23));
        setDailyWeather(data.daily.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHoulyWeather();
    console.log(hourlyWeather);
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <div className="container mx-auto mt-24">
        <CurrentWeather weatherData={currentWeather} />
        {hourlyWeather && <HourlyWeather data={hourlyWeather} />}
        {dailyWeather && <WeeklyWeather data={dailyWeather} />}
      </div>
    </>
  );
};

export default WeatherList;
