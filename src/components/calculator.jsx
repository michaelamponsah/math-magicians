import React, { Component } from 'react';
import Button from './calculatorButton';
import getButtonTexts from '../utils/calculatorButtonTexts';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div className="calculatorWrapper">
        <div className="calculator">
          <div className="calculatorKeyboard">
            {getButtonTexts().map((button) => <Button key={button.id} text={button.text} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
