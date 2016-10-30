import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const Section = ({ content, style: inlineStyle }) => (
  <section style={inlineStyle}>
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
};

export default Section;
