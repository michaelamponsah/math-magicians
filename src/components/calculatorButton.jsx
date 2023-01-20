import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, onButtonClick } = props;
  return (
    <button type="button" onClick={(e) => onButtonClick(e)}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
