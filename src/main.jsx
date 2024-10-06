import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
);