import React, { PropTypes } from 'react';
import { style, merge } from 'glamor';
import { Button } from '../../common/style';

const styles = {
  button: merge(Button.noStyle, {
    position: 'absolute',
    right: 10,
    width: 50,
    height: 40,
    backgroundColor: 'white',
    border: '1px solid black',
    zIndex: 10,
    opacity: 0,
    transition: 'opacity 150ms ease-out',
  }),
  hamburgerLine: style({
    width: '50%',
    height: 3,
    margin: '4px 25% 4px 25%',
    backgroundColor: 'black',
  }),
};

styles.buttonShow = merge(styles.button, {
  opacity: 1,
});

const HambuergMenu = ({ onClick, show }) => (
  <button
    className={show ? styles.buttonShow : styles.button}
    aria-label="show menu"
    onClick={onClick}
  >
    <div className={styles.hamburgerLine} />
    <div className={styles.hamburgerLine} />
    <div className={styles.hamburgerLine} />
  </button>
);

HambuergMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default HambuergMenu;
