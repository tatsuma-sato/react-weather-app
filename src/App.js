import { useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherList from "./components/WeatherList";
import { useGlobalContext } from "./context/context";
import australia from "./images/australia.jpg";
import egypt from "./images/egypt.jpg";
import newyork from "./images/newyork.jpg";
import paris from "./images/paris.jpg";
import rain from "./images/rain.jpg";
import tokyo from "./images/tokyo.jpg";
import uk from "./images/uk.jpg";

let bgImage = tokyo;

function App() {
  const { city, setCity, isCity, setIsCity } = useGlobalContext();

  const imageArr = [australia, egypt, newyork, paris, rain, tokyo, uk];

  useEffect(() => {
    bgImage = randomImage();
  }, [isCity]);

  const randomImage = () => {
    const random = Math.floor(
      Math.random() * (imageArr.length - 1 + 1 - 0) + 0
    );
    return imageArr[random];
  };

  let _style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div
      className="App relative h-screen w-screen bg-center bg-no-repeat bg-cover z-0"
      style={_style}
    >
      <div className="backdrop-blur z-10 absolute w-full h-full"></div>
      <div className="absolute z-20 w-full h-full">
        {/* {isCity ? <WeatherList /> : <Search />} */}
        {/* <Search /> */}
        <WeatherList />
      </div>
    </div>
  );
}

export default App;
