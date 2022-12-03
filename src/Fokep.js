import { render } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import Kep from "./Kep";
const Kepeim = [
  {
    id: 1,
    cim: "szep kepecske",
    kep: "kepek/1.jpg"
  },
  {
    id: 2,
    cim: "",
    kep: "kepek/2.jpg"
  },
  {
    id: 3,
    cim: "",
    kep: "kepek/3.jpg"
  },
  {
    id: 4,
    cim: "",
    kep: "kepek/4.jpg"
  },
  {
    id: 5,
    cim: "",
    kep: "kepek/5.jpg"
  },
  {
    id: 6,
    cim: "",
    kep: "kepek/6.jpg"
  },
  {
    id: 7,
    cim: "",
    kep: "kepek/7.jpg"
  },
  {
    id: 8,
    cim: "",
    kep: "kepek/8.jpg"
  },
  {
    id: 9,
    cim: "",
    kep: "kepek/9.jpg"
  },
  {
    id: 10,
    cim: "",
    kep: "kepek/10.jpg"
  },
  {
    id: 11,
    cim: "",
    kep: "kepek/11.jpg"
  },
  {
    id: 12,
    cim: "",
    kep: "kepek/12.jpg"
  },
  {
    id: 13,
    cim: "",
    kep: "kepek/13.jpg"
  },
  {
    id: 14,
    cim: "",
    kep: "kepek/14.webp"
  },
  {
    id: 15,
    cim: "",
    kep: "kepek/15.webp"
  },
  {
    id: 16,
    cim: "",
    kep: "kepek/16.jpg"
  },
  {
    id: 17,
    cim: "",
    kep: "kepek/17.jpg"
  },
  {
    id: 18,
    cim: "",
    kep: "kepek/18.jpg"
  },
  {
    id: 19,
    cim: "",
    kep: "kepek/19.jpg"
  },
  {
    id: 20,
    cim: "",
    kep: "kepek/20.jpeg"
  },
  {
    id: 21,
    cim: "",
    kep: "kepek/21.jpg"
  },
  {
    id: 22,
    cim: "",
    kep: "kepek/22.jpg"
  }

]



class FoKep extends React.Component {
/* 
  fokepMegjelen = () => {
    console.log("helloak");

    ReactDOM.render(<foKep />, document.getElementById(".fokep"));
  } */


  render(){
  return(
<div>
  <h1>LÁTHATÓ VAGYOK?!</h1>
  <img src={require('https://miro.medium.com/max/828/1*0V-dvvfo3zILTPL0yB0nEA.webp')}/>
</div>

    );
  }
}

export default FoKep;



