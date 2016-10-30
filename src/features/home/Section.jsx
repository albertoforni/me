import React, { PropTypes } from 'react';
import { style, merge, parent } from 'glamor';
import ReactMarkdown from 'react-markdown';

const styles = {
};

const Section = ({ content }) => (
  <section>
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Section;
