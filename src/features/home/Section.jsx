import React, { PropTypes } from 'react';
import { merge, $ } from 'glamor';
import ReactMarkdown from 'react-markdown';

const styles = {
  section: merge(
    {
      width: '70%',
      margin: '3rem auto',
      lineHeight: '2.4rem',
    },
    $(' h3', { margin: 0, marginTop: '4rem' }),
    $(' h4', { margin: 0 }),
  ),
};

const Section = ({ content }) => (
  <section className={styles.section} >
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Section;
