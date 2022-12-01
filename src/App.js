import "./App.css";
import React from "react";
import Kep from "./Kep";
import foKep from "./Fokep";


const Kepeim = [
  {
    id: 1,
    cim: "szep kepecske",
    kep: "kepek/1.jpg",
  },
  {
    id: 2,
    cim: "",
    kep: "kepek/2.jpg",
  },
  {
    id: 3,
    cim: "",
    kep: "kepek/3.jpg",
  },
  {
    id: 4,
    cim: "",
    kep: "kepek/4.jpg",
  },
  {
    id: 5,
    cim: "",
    kep: "kepek/5.jpg",
  },
  {
    id: 6,
    cim: "",
    kep: "kepek/6.jpg",
  },
  {
    id: 7,
    cim: "",
    kep: "kepek/7.jpg",
  },
  {
    id: 8,
    cim: "",
    kep: "kepek/8.jpg",
  },
  {
    id: 9,
    cim: "",
    kep: "kepek/9.jpg",
  },
  {
    id: 10,
    cim: "",
    kep: "kepek/10.jpg",
  },
  {
    id: 11,
    cim: "",
    kep: "kepek/11.jpg",
  },
  {
    id: 12,
    cim: "",
    kep: "kepek/12.jpg",
  },
  {
    id: 13,
    cim: "",
    kep: "kepek/13.jpg",
  },
  {
    id: 14,
    cim: "",
    kep: "kepek/14.webp",
  },
  {
    id: 15,
    cim: "",
    kep: "kepek/15.webp",
  },
  {
    id: 16,
    cim: "",
    kep: "kepek/16.jpg",
  },
  {
    id: 17,
    cim: "",
    kep: "kepek/17.jpg",
  },
  {
    id: 18,
    cim: "",
    kep: "kepek/18.jpg",
  },
  {
    id: 19,
    cim: "",
    kep: "kepek/19.jpg",
  },
  {
    id: 20,
    cim: "",
    kep: "kepek/20.jpeg",
  },
  {
    id: 21,
    cim: "",
    kep: "kepek/21.jpg",
  },
  {
    id: 22,
    cim: "",
    kep: "kepek/22.jpg",
  },
];

function App() {
  function elozoKep() {
    console.log("nem hátra");
  }
  function kovetkezoKep() {
    console.log("előre");
  }

  return (
    <main>
      <div className="App">
        <header className="App-header">
          <h1>hibrid állatok ♥</h1>
          <div class="gombok">
            <button className="elozo" onClick={elozoKep}>
              ◀
            </button>
            <button className="kovetkezo" onClick={kovetkezoKep}>
              ▶
            </button>
          </div>
        </header>
        <div class="fokepClass">
          {
            //<foKep/>

            <foKep source={require("./kepek/1.jpg")} />
          }
        </div>

        <article className="galeria">
          {Kepeim.map((kep, index) => {
            return <Kep kepAdat={kep} key={index} />;
          })}
        </article>
        <footer></footer>
      </div>
    </main>
  );
}

export default App;
