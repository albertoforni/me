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
  }),
  hamburgerLine: style({
    width: '50%',
    height: 3,
    margin: '4px 25% 4px 25%',
    backgroundColor: 'black',
  }),
};

const HambuergMenu = ({ onClick }) => (
  <button
    className={styles.button}
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
};

export default HambuergMenu;
