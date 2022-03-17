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

export const getDay = (i) => {
  if (i === 0) {
    return "Sun";
  } else if (i === 1) {
    return "Mon";
  } else if (i === 2) {
    return "Tue";
  } else if (i === 3) {
    return "Wed";
  } else if (i === 4) {
    return "Thu";
  } else if (i === 5) {
    return "Fri";
  } else if (i === 6) {
    return "Sat";
  } else {
    return "Something wrong";
  }
};

export const getMonth = (i)=>{
  if (i === 0) {
    return "January";
  } else if (i === 1) {
    return "Febrary";
  } else if (i === 2) {
    return "March";
  } else if (i === 3) {
    return "April";
  } else if (i === 4) {
    return "May";
  } else if (i === 5) {
    return "June";
  } else if (i === 6) {
    return "July";
  } else {
    return "Something wrong";
  }
}
