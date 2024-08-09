import { useState, useRef, useEffect} from "react";

function SodaIngredient(props){

    return (
        <div className="stack-small">
            <img className="ingredient-icon" src={props.img}/>
            <div className="ingredient-item">{props.name}</div> 
            <div className="ingredient-percentage">{(props.percentage*props.amount).toFixed(2)} mL</div>
        </div>
    );
}

export default SodaIngredient;

// LeJ, LiJ, OJ, SW
// 1    2    3   4
// 0.125, 0.125, 0.25, 0.50