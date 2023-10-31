import React, { PropTypes } from 'react';

const Link = ({ href, children }) => (
  <a href={href}>{children}</a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]).isRequired,
};

export default Link;
