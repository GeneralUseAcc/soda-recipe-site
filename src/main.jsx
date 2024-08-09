import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const DATA = [
  {id: 0, name: "Mountain Dew", img: './src/assets/mountain-dew-no-bg.png', ingredients: [{name: "Lemon Juice", percentage: 0.1667, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.1667, img: './src/assets/lime-juice.jpg'}, {name: "Orange Juice", percentage: 0.1667, img: './src/assets/orange-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 1, name: "Mountain Dew Baja Blast", img: './src/assets/mountain-dew-bajablast-no-bg.png',ingredients: [{name: "Lemon Juice", percentage: 0.125, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.125, img: './src/assets/lime-juice.jpg'}, {name: "Pineapple Juice", percentage: 0.125, img: './src/assets/pineapple-juice.jpg'}, {name: "Orange Juice", percentage: 0.125, img: './src/assets/orange-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 2, name: "Mountain Dew Code Red", img: './src/assets/mountain-dew-no-bg.png', ingredients: [{name: "Lemon Juice", percentage: 0.1667, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.1667, img: './src/assets/lime-juice.jpg'}, {name: "Orange Juice", percentage: 0.1667, img: './src/assets/orange-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 3, name: "Mountain Dew Voltage", img: './src/assets/mountain-dew-bajablast-no-bg.png', ingredients: [{name: "Lemon Juice", percentage: 0.125, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.125, img: './src/assets/lime-juice.jpg'}, {name: "Raspberry Juice", percentage: 0.0833, img: './src/assets/raspberry-juice.jpg'}, {name: "Orange Juice", percentage: 0.125, img: './src/assets/orange-juice.jpg'}, {name: "Ginseng", percentage: 0.0416667, img: './src/assets/ginseng.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 4, name: "Mountain Dew LiveWire", img: './src/assets/mountain-dew-no-bg.png', ingredients: [{name: "Orange Juice", percentage: 0.5, img: './src/assets/orange-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 5, name: "Mountain Dew Pitch Black", img: './src/assets/mountain-dew-bajablast-no-bg.png',ingredients: [{name: "Lemon Juice", percentage: 0.1667, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.1667, img: './src/assets/lime-juice.jpg'},  {name: "Grape Juice", percentage: 0.1667, img: './src/assets/grape-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 6, name: "Crush Cherry", img: './src/assets/mountain-dew-no-bg.png', ingredients: [{name: "Lemon Juice", percentage: 0.1667, img: './src/assets/lemon-juice.jpg'}, {name: "Lime Juice", percentage: 0.1667, img: './src/assets/lime-juice.jpg'}, {name: "Orange Juice", percentage: 0.1667, img: './src/assets/orange-juice.jpg'}, {name: "Sparkling Water", percentage: 0.5, img: './src/assets/water-juice.jpg'}]},
  {id: 7, name: "Water Juice", img: './src/assets/mountain-dew-bajablast-no-bg.png',ingredients: [{name: "Sparkling Water", percentage: 1.0, img: './src/assets/water-juice.jpg'}]}

]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App sodas={DATA}/>
  </React.StrictMode>,
)

