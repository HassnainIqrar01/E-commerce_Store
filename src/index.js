import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Sass/main.scss'
import Home from './Components/Home/Home';
import { Provider } from 'react-redux'; 
import store from './Components/Home/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <Provider store={store}> 
    <Home />
  </Provider>

);