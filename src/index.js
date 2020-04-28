import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/stable';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

