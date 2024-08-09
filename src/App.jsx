import { useState } from 'react';
import './App.css';
import Soda from "./components/Soda";
import SodaIngredient from './components/SodaIngredient';
import SodaAmountInput from './components/SodaAmountInput';

function App(props) {

  const [sodas, setSodas] = useState(props.sodas)

  const [currentSoda, selectSoda] = useState(0)
  // selectSoda(soda.id)

  const [sodaQuantity, setQuantity] = useState(250)

  function isWorkingProps(){
    console.log("props are working")
  }

  // Takes each of Soda's objects and maps the data into Soda components
  const sodaList = sodas.map(soda => (
    <Soda 
    id={soda.id}
    name={soda.name}
    img={soda.img}
    ingredients={soda.ingredients}
    isVisible={soda.isVisible}
    selectSoda = {selectSoda}
    />
  ));

  // Maps the ingredients of the selected Soda into Soda Ingredients components
  const ingredientList = sodas[currentSoda]["ingredients"].map(sodaIngredient => (
    <SodaIngredient
    id={sodaIngredient.id}
    name={sodaIngredient.name}
    img={sodaIngredient.img}
    percentage={sodaIngredient.percentage}
    amount={sodaQuantity}
    
    />
  ));

  // Returns the home page for the site, featuring the list of sodas and ingredients for selected soda.
  return (
    <div className='homepage'>
      <h1 className='title-banner'>Quick And Simple Soda Recipes</h1>
      <div className='soda-list'>
        {sodaList}
      </div>
      <div className='soda-ingredients'>
        {ingredientList}
      </div>
      <SodaAmountInput setQuantity={setQuantity} />
    </div>
  )
}

export default App
