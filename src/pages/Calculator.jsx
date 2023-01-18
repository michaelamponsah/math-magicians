import React from 'react';
import Calculator from '../components/calculator';
import './Calculator.css';

const CalculatorPage = () => (
  <section className="container">
    <div className="calculator-wrapper">
      <p>Let&apos;s do some math!</p>
      <div className="calculator">
        <Calculator />
      </div>
    </div>
  </section>
);

export default CalculatorPage;
