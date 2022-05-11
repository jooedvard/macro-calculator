import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import KaloriaToEverything from './KaloriaToEverything';
import EverytoKaloria from './EverythingToKaloria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KaloriaToEverything />
    <EverytoKaloria />
  </React.StrictMode>
);


