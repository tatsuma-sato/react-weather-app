import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;

const Search = () => {
  const { city, setCity, isCity, setIsCity, setLocation } = useGlobalContext();

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API}`
      );
      const data = await response.json();
      const locaiton = data.results[0]?.geometry.location;
      setLocation((prev) => ({
        lat: locaiton.lat,
        lng: locaiton.lng,
      }));
    };
    fetchData();
  }, [isCity]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsCity(true);
  };

  return (
    <form
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3"
      onSubmit={onSubmit}
    >
      <div className="">
        <input
          type="text"
          id="city"
          className="bg-gray-50 w-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter a city name"
          required
          onChange={(e) => setCity(e.target.value.replace(" ", "+"))}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
