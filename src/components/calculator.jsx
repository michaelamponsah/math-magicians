import React, { useState } from 'react';
import Button from './calculatorButton';
import getButtonTexts from '../utils/calculatorButtonTexts';
import Input from './calculatorInputField';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleChange = () => null;

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    const result = calculate(calcObj, buttonName);
    setCalcObj(result);
  };

  const { total, next } = calcObj;
  return (
    <div className="calculatorWrapper">
      <div className="calculator">
        <Input onInputChange={(e) => handleChange(e)} total={total || '0'} next={next || ''} />
        <div className="calculatorKeyboard">
          {getButtonTexts().map((button) => (
            <Button
              key={button.id}
              text={button.text}
              onButtonClick={(e) => handleClick(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
