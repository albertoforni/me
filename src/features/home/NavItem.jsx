import React, { PropTypes } from 'react';
import { style, merge, parent, select } from 'glamor';
import { Button } from '../../common/style';

const styles = {
  navItem: (parentStartAnimation, hideRoot, parentStopAnimation) => merge(
    {
      height: 0,
      opacity: 0,
      marginBottom: '1rem',
      overflow: 'hidden',
      transition: 'all 150ms ease-in-out',
    },
    parent(`.${parentStartAnimation}`, {
      height: '4rem',
      opacity: 1,
      overflow: 'visible',
    }),
    select(`.${hideRoot}`, {
      height: 0,
      opacity: 0,
      margin: 0,
      overflow: 'hidden',
    }),
    parent(`.${parentStopAnimation}`, {
      transition: 'none',
    })
  ),
  menuButton: merge([
    Button.noStyle,
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }]
  ),
  menuButtonTextContainer: style(
    {
      display: 'flex',
      alignItems: 'center',
      height: '4rem',
      width: '70%',
      backgroundColor: '#888',
      color: 'white',
      transition: 'box-shadow 150ms ease-out',
    },
  ),
  menuButtonTextContent: style({
    flex: 1,
    paddingRight: '2rem',
    textAlign: 'right',
    textTransform: 'uppercase',
  }),
  icon: style({
    paddingLeft: '2rem',
  }),
};

const menuButtonTextContainerHover = parent(`.${styles.menuButton.toString()}:enabled:hover`, {
  boxShadow: '1px 1px 6px 1px rgba(170,170,170,0.7)',
});

const NavItem = ({
  icon,
  text,
  navIndex,
  onNavItemClick,
  disabled,
  animationClasses: {
    parentStartAnimation,
    hideRoot,
    parentStopAnimation,
  },
  }) => {
  const menuLbl = `menuLbl${navIndex}`;

  return (
    <li
      role="menuitem"
      className={`${hideRoot} ${styles.navItem(parentStartAnimation, hideRoot, parentStopAnimation)}`}
    >
      <button
        className={`${styles.menuButton}`}
        aria-labelledby={menuLbl}
        onClick={disabled ? null : onNavItemClick}
        disabled={disabled}
      >
        <div className={merge(styles.menuButtonTextContainer, menuButtonTextContainerHover)}>
          <span
            className={styles.menuButtonTextContent}
            id={menuLbl}
          >{text}</span>
        </div>
        <img className={styles.icon} role="presentation" alt={text} src={icon} />
      </button>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  navIndex: PropTypes.number.isRequired,
  onNavItemClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  animationClasses: PropTypes.shape({
    /* eslint-disable react/no-unused-prop-types */
    parentStartAnimation: PropTypes.string,
    hideRoot: PropTypes.string,
    parentStopAnimation: PropTypes.string,
  }),
  /* eslint-enable react/no-unused-prop-types */
};


export default NavItem;
