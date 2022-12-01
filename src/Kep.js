import Kepeim from './App';
import React  from 'react';
import App from './App';

function Kep(props) {

    return(
        <div className="kepek">
            <img src={props.kepAdat.kep}></img>
        </div>
    );
}

export default Kep;