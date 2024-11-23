import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Categories from './Categories.jsx';
import CTABanner from './Cta.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    ,
    <Categories/>
    ,
   <CTABanner/>
  </React.StrictMode>,
);
