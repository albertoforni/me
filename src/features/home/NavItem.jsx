import React, { PropTypes } from 'react';
import { style, merge, parent } from 'glamor';
import { Button } from '../../common/style';
import about from '../../common/icons/about.svg';
import dev from '../../common/icons/dev.svg';
import education from '../../common/icons/education.svg';
import experience from '../../common/icons/experience.svg';
import learn from '../../common/icons/learn.svg';

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

const getIcon = (iconName) => {
  switch (iconName) {
    case 'about':
      return about;
    case 'dev':
      return dev;
    case 'education':
      return education;
    case 'experience':
      return experience;
    case 'learn':
      return learn;
    default:
      return iconName;
  }
};

const NavItem = ({ icon, text, menuIndex }) => {
  const menuLbl = `menuLbl${menuIndex}`;

  return (
    <li role="menuitem">
      <button className={`${styles.menuButton}`} aria-labelledby={menuLbl}>
        <div className={merge(styles.menuButtonTextContainer, menuButtonTextContainerHover)}>
          <span
            className={styles.menuButtonTextContent}
            id={menuLbl}
          >{text}</span>
        </div>
        <img className={styles.icon} role="presentation" alt={text} src={getIcon(icon)} />
      </button>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  menuIndex: PropTypes.number.isRequired,
};


export default NavItem;
