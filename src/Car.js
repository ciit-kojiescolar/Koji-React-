import React from 'react';
import ReactDOM from 'react-dom/client';
import './Car.css';
import styles from './Car.module.css';

export default function Car({brand, color}) {
  const inlineStyle = {
    color: 'green',
    fontSize: '24px'
  }

  let name = 'John';
  let age = 10;

  return (
    <div>
      <h2>Simple React SPA</h2>
      <h3 className='itemStyle'>Name: {name}, Age: {age}</h3>

      <p className='itemStyle'>Car brand: {brand}, color: {color}</p>

      <p style={inlineStyle}>Hi, I'm using inline style...</p>

      <p style={{
        color: 'red',
        fontSize: '24px'
      }}>Hi, I'm using inline style 2...</p>

      <p className={styles.moduleStyle}>Hi, I'm using module style...</p>

    </div>
  )
    ;
}