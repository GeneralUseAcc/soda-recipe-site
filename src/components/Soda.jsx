import { useState, useRef, useEffect} from "react";

function Soda(props){

    function handleSelect(event) {
       selectedSoda = event.target.value
      }

    return (
        <div className="stack-small">
            <div className="soda-item" >{props.name}</div>
            <img className="soda-icon" onClick={() => props.selectSoda(props.id)} src={props.img}/>
        </div>
    );
}

export default Soda;