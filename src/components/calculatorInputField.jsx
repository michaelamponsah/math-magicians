import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { btnType } = this.props;
    return <input className="calculatorInputField" type={btnType} />;
  }
}

Input.propTypes = {
  btnType: PropTypes.string,
};

Input.defaultProps = {
  btnType: 'text',
};

export default Input;
