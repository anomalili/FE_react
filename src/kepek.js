
import React  from 'react';

function Kep(props) {
    /* function kosarba() {
        console.log(props.konyvAdat.id)
        props.kosarKattintasMetodus(props.konyvAdat.id)
    } */

    return(
        <div className="galeria">{/* 
             <h3>Cím: {props.kepAdat.cim}</h3> */}
            <img src={props.kepAdat.kep}></img>
{/* 
            <button onClick={kosarba}>Kosárba</button> */}
            
        </div>
    );
}

export default Kep;