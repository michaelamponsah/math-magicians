import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { text, onButtonClick } = this.props;
    return (
      <button type="button" onClick={(e) => onButtonClick(e)}>{text}</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
