import { useState } from "react";

function SodaAmountInput(props){

    function handleChange(event) {
        setAmount(event.target.value);
    }

    return(
    <div className="soda-amount">
        <label >
        How much soda do you want to make?: 
        <input type="number" name="sodaAmount" id="amountSpinner" min="0" defaultValue={250} onChange={e => props.setQuantity(e.target.value)}/> 
        mL
        </label>
    </div>
    );
}

export default SodaAmountInput;