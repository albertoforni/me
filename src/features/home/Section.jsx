import React, { PropTypes } from 'react';
import { merge, $, parent } from 'glamor';
import ReactMarkdown from 'react-markdown';

const styles = {
  section: parentClass => merge(
    {
      width: '70%',
      margin: '3rem auto',
      lineHeight: '2.4rem',
      opacity: 0,
    },
    parent(`.${parentClass}`, {
      opacity: 1,
      transition: 'opacity 400ms ease-out',
    }),
    $(' h3', { margin: 0, marginTop: '4rem' }),
    $(' h4', { margin: 0 }),
  ),
};

const Section = ({ content, parentClass }) => (
  <section className={styles.section(parentClass)}>
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
  parentClass: PropTypes.string.isRequired,
};

export default Section;
