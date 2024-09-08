import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import A from './components/A';
import reportWebVitals from './reportWebVitals';

// import A from "./components/A";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A />
  </React.StrictMode>
);


reportWebVitals();
