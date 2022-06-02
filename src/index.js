import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section>
      <h1>Calculator</h1>
      <Calculator />
    </section>
  </React.StrictMode>
);

reportWebVitals();
