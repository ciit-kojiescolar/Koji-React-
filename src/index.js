import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Car from './Car';
// import demofunc from './demofunc';
// import DemoTest from './DemoTest';
// import styles from './Car.module.css'; 

import ModalDemo from './ModalDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render( 
  <React.StrictMode>
    <ModalDemo title='This is modal component' car = {<Car brand='toyota' color='red'/>}>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </ModalDemo>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
