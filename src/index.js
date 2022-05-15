import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipies from './Recipies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <div className='app'>
      
    <Recipies></Recipies>
    </div>
  </React.StrictMode>
);


