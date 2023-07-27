import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import empstore from './empstore';
// import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={empstore}>

  {/* <BrowserRouter> */}
   <App />
  {/* </BrowserRouter> */}
   
    </Provider>
  </React.StrictMode>
);

reportWebVitals();