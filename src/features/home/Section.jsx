import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const Section = ({ content }) => (
  <section>
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Section;
