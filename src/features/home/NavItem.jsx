import React, { PropTypes } from 'react';
import { style, merge, parent } from 'glamor';
import { Button } from '../../common/style';

const styles = {
  menuButton: merge([
    Button.noStyle,
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginBottom: '1rem',
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

const menuButtonTextContainerHover = parent(`.${styles.menuButton.toString()}:hover`, {
  boxShadow: '1px 1px 6px 1px rgba(170,170,170,0.7)',
});

const NavItem = ({ icon, text, navIndex, onNavItemClick, style: inlineStyle }) => {
  const menuLbl = `menuLbl${navIndex}`;

  return (
    <li role="menuitem" style={inlineStyle}>
      <button
        className={`${styles.menuButton}`}
        aria-labelledby={menuLbl}
        onClick={onNavItemClick}
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
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
};


export default NavItem;
