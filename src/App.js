import "./App.css";
import React from "react";
import Kep from "./Kep";
import FoKep from "./Fokep";
import ReactDOM from 'react-dom/client';


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
        <div className="fokep">
          <FoKep />
        </div>
        <article className="galeria">
          <Kep/>
        </article>
        <footer></footer>
      </div>
    </main>
  );
}


export default App;
