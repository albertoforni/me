import React from "react";
import PropTypes from "prop-types";
import { merge, parent } from "glamor";
import { Button, Colors } from "../../common/style";

const styles = {
  button: merge(Button.noStyle, {
    position: "absolute",
    right: "1rem",
    width: "5rem",
    height: "4rem",
    backgroundColor: "white",
    border: `1px solid ${Colors.lightGray}`,
    borderRadius: 2,
    zIndex: 10,
    opacity: 0,
    transition: "all 150ms ease-out",
    transitionProperty: "opacity, border-color",
    ":hover": {
      borderColor: Colors.green,
    },
  }),
};

styles.buttonShow = merge(styles.button, {
  opacity: 1,
});

styles.hamburgerLine = merge(
  {
    width: "50%",
    height: 2,
    margin: "4px 25% 4px 25%",
    backgroundColor: Colors.black,
    transition: "background-color 150ms ease-out",
  },
  parent(`.${styles.buttonShow}:hover`, {
    backgroundColor: Colors.green,
  })
);

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
