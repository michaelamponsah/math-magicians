import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      type,
      onInputChange,
      total,
      next,
    } = this.props;
    const value = next || total;
    return <input className="calculatorInputField" type={type} onChange={(e) => onInputChange(e)} value={value} />;
  }
}

Input.propTypes = {
  type: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  total: PropTypes.string,
  next: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  total: '0',
  next: null,
};

export default Input;
