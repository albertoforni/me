import React, { PropTypes } from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={className}
  >{children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
