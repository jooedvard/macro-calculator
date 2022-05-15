import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import KaloriaToEverything from './KaloriaToEverything';
import EverytoKaloria from './EverythingToKaloria';
import FoodApi from './FoodApi';
import IngredientsList from './IngredientsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <div className='app'>
      
    <FoodApi></FoodApi>
    <IngredientsList></IngredientsList>
    <KaloriaToEverything title={"Nutritions"}/>
    <EverytoKaloria title={"How many calories?"}/>
    </div>
  </React.StrictMode>
);


