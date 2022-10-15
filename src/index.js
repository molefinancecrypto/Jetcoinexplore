import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter } from 'react-router-dom';
import { ParticularcoinHolder } from './contextfolder/Coindata';
import './NEXAFONTS/OTF/Nexa-Bold.otf';
import './NEXAFONTS/OTF/Nexa-Light.otf';
import {StateHolder} from '../src/components/CointoviewContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateHolder>
    <ParticularcoinHolder>
    <App />
    </ParticularcoinHolder>
    </StateHolder>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

