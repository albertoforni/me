import React from 'react';
import { style, merge } from 'glamor';
import Link from '../../common/components/Link';
import { List, MediaQueries } from '../../common/style';

const styles = {
  header: style({
    display: 'flex',
    flexDirection: 'column',
  }),
  title: style({
    fontFamily: 'Roboto, cursive',
    fontSize: '8rem',
    margin: '1rem 0 0 0',
    textAlign: 'center',
    [MediaQueries.small]: {
      margin: '2rem 0 0 0',
      fontSize: '5rem',
    },
  }),
  links: merge(
    List.noStyle,
    {
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
    }
  ),
  link: merge(
    {
      padding: '1rem',
      fontSize: '2rem',
    }
  ),
};


const Title = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Alberto Forni</h1>
    <ul className={styles.links}>
      <li className={styles.link}>
        <Link href="mailto:me@albertoforni.com">me@albertoforni.com</Link>
      </li>
      <li className={styles.link}><Link href="tel:+447941643042">+44 7941 64 30 42</Link></li>
    </ul>
  </header>
    );

export default Title;
