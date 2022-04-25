import React from "react";

import { useGlobalContext } from "../context/context";

const Error = () => {
  const { setIsCity, setCity } = useGlobalContext();

  return (
    <div>
      <h1 className="text-white">Something is wrong</h1>
      <button
        onClick={() => {
          setIsCity(false);
          setCity("");
        }}
      >
        Back to search
      </button>
    </div>
  );
};

export default Error;
