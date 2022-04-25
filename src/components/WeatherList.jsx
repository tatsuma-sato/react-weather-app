import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { useFetch } from "../hooks/useFetch";
import CurrentWeather from "./CurrentWeather";
import Error from "./Error";
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
    // let isMounted = true;
    const fetchCurrentWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${END_POINT}weather?q=${city}&appid=${APIKEY}`
        );
        const data = await response.json();
        setCurrentWeather(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        console.log("aaa");
        return <h1>Could not find the city you typed</h1>;
      }
    };
    fetchCurrentWeather();
    console.log("current");
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  useEffect(() => {
    // let isMounted = true;
    console.log("hourly");
    const fetchHoulyWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${END_POINT}onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutesly&appid=${APIKEY}`
        );
        const data = await response.json();

        setHourlyWeather(data.hourly.slice(2, 23));
        setDailyWeather(data.daily.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.log(error);
        return (
          <>
            <h1>Could not find the city you typed</h1>
          </>
        );
      }
    };
    fetchHoulyWeather();
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  if (loading || !hourlyWeather || !dailyWeather) return <h3>Loading...</h3>;

  if (currentWeather.cod === "404") return <Error />;

  return (
    <>
      <div className="container mx-auto mt-20 text-center">
        <CurrentWeather weatherData={currentWeather} />
        {hourlyWeather && <HourlyWeather data={hourlyWeather} />}
        {dailyWeather && <WeeklyWeather data={dailyWeather} />}
        <button
          className="btn btn-ghost border-none mt-5"
          onClick={() => {
            setIsCity(false);
          }}
        >
          Back to Search
        </button>
      </div>
    </>
  );
};

export default WeatherList;
