import React, { Component } from 'react';
import Button from './calculatorButton';
import getButtonTexts from '../utils/calculatorButtonTexts';
import Input from './calculatorInputField';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleChange = () => null;

  handleClick = (e) => {
    const buttonName = e.target.textContent;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculatorWrapper">
        <div className="calculator">
          <Input onInputChange={(e) => this.handleChange(e)} total={total || '0'} next={next || ''} />
          <div className="calculatorKeyboard">
            {getButtonTexts().map((button) => (
              <Button
                key={button.id}
                text={button.text}
                onButtonClick={(e) => this.handleClick(e)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
