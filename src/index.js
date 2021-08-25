import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.bundle.js'  
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import ContactUs from './components/ContactUs/ContactUs';
 
 


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ContactUs/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
