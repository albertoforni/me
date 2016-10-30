import React, { PropTypes } from 'react';

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
  >{children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
