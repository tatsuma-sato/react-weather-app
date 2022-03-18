import australia from "./images/australia.jpg";
import egypt from "./images/egypt.jpg";
import newyork from "./images/newyork.jpg";
import paris from "./images/paris.jpg";
import rain from "./images/rain.jpg";
import tokyo from "./images/tokyo.jpg";
import uk from "./images/uk.jpg";

const imageArr = [australia, egypt, newyork, paris, rain, tokyo, uk];

export const randomImage = () => {
  const random = Math.floor(Math.random() * (imageArr.length - 1 + 1 - 0) + 0);
  console.log(random);
  return imageArr[random];
};

export const getTemp = (kel) => {
  return (kel - 273.15).toFixed(1);
};
