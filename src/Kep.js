
import React from "react";

function Kep(props) {
  return (
    <div className="kepek">
      {props.kepeim.map((kep, index) => {
        return <img src={props.kep.kep} alt="kép"></img>;
      })}
    </div>
  );
}

export default Kep;
