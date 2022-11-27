
import './App.css';
import React from 'react';
import Kep from './kepek';

/* 
https://freeimage.host/i/HK5brUQ
https://freeimage.host/i/HK5bg0x
https://freeimage.host/i/HK5b8ib
https://freeimage.host/i/HK5bUfj
https://freeimage.host/i/HK5bP5B
https://freeimage.host/i/HK5biOP
https://freeimage.host/i/HK5bsb1
https://freeimage.host/i/HK5bQzF
https://freeimage.host/i/HK5bZWg
https://freeimage.host/i/HK5bbqJ
https://freeimage.host/i/HK5btsa
https://freeimage.host/i/HK5bpgR
https://freeimage.host/i/HK5mH5N
https://freeimage.host/i/HK5m9Jp
https://freeimage.host/i/HK5mJeI
https://freeimage.host/i/HK5m3zX
https://freeimage.host/i/HK5mFXn
https://freeimage.host/i/HK5mdbt
https://freeimage.host/i/HK5mqqG
https://freeimage.host/i/HK5mB1f
https://freeimage.host/i/HK5mKss */

const Kepeim = [
  {
    id:1,
    cim:"szep kepecske",
    kep:"https://iili.io/HK5brUQ.jpg"
  },
  {
    id:2,
    cim:"",
    kep: "https://iili.io/HK5mKss.jpg"
  },
  {
    id:3,
    cim:"",
    kep: "https://iili.io/HK5mB1f.jpg"
  },
  {
    id:4,
    cim:"",
    kep: "https://iili.io/HK5mqqG.jpg"
  },
  {
    id:5,
    cim:"",
    kep: "https://iili.io/HK5mdbt.jpg"
  },
  {
    id:6,
    cim:"",
    kep: "https://iili.io/HK5mFXn.jpg"
  },
  {
    id:7,
    cim:"",
    kep: "https://iili.io/HK5m3zX.jpg"
  },
  {
    id:8,
    cim:"",
    kep: "https://iili.io/HK5bUfj.jpg"
  },
  {
    id:9,
    cim:"",
    kep: "https://iili.io/HK5brUQ.jpg"
  },
  {
    id:10,
    cim:"",
    kep: "https://iili.io/HK5biOP.jpg"
  },
  {
    id:11,
    cim:"",
    kep: "https://iili.io/HK5bg0x.jpg"
  },
  {
    id:12,
    cim:"",
    kep: "https://iili.io/HK5bP5B.jpg"
  },
  {
    id:13,
    cim:"",
    kep: "https://iili.io/HK5b8ib.jpg"
  },
  {
    id:14,
    cim:"",
    kep: "https://iili.io/HK5bsb1.jpg"
  },
  {
    id:15,
    cim:"",
    kep: "https://iili.io/HK5bQzF.jpg"
  },
  {
    id:16,
    cim:"",
    kep: "https://iili.io/HK5bZWg.jpg"
  },
  {
    id:17,
    cim:"",
    kep: "https://iili.io/HK5bbqJ.jpg"
  },
  {
    id:18,
    cim:"",
    kep: "https://iili.io/HK5btsa.jpg"
  },
  {
    id:19,
    cim:"",
    kep: "https://iili.io/HK5bpgR.jpg"
  },
  {
    id:20,
    cim:"",
    kep: "https://iili.io/HK5mH5N.jpg"
  },
  {
    id:21,
    cim:"",
    kep: "https://iili.io/HK5mJeI.webp"
  }

]



function App() {


  function kosarFeldolgoz(adat) {
    console.log(adat);
  } 

  return (
    <main>
    <div className="App">
      <header className="App-header">
        <h1>  hibrid állatok ♥</h1>
      </header>

      <article className="galeria">

      {
        Kepeim.map((kep, index)=>{
            return(<Kep kepAdat={kep} key={index} kosarKattintasMetodus={kosarFeldolgoz}/>)
          }
        )
      }
        

      </article>
      <footer>
        <p>the night is dark and full of terror</p>
      </footer>
    </div>
    </main>
  );
}

export default App;
