import React, { PropTypes } from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';
import { List } from '../../common/style';
import NavItem from './NavItem';

const styles = {
  menu: List.noStyle,
};

const getDefaultStyles = navItems =>
  navItems.map(navItem => ({
    data: navItem,
    key: navItem.text,
    style: {
      height: 0,
      opacity: 1,
    },
  }));

const getStyles = (navItems, selectedItem) => {
  const selectedNavItem = navItems[selectedItem];

  if (selectedNavItem) {
    return [{
      data: selectedNavItem,
      key: selectedNavItem.text,
      style: {
        height: spring(60, presets.gentle),
        opacity: spring(1, presets.gentle),
      },
    }];
  }

  return navItems.map(navItem => ({
    data: navItem,
    key: navItem.text,
    style: {
      height: spring(60, presets.gentle),
      opacity: spring(1, presets.gentle),
    },
  }));
};

const willLeave = () => ({
  height: spring(0),
  opacity: 0,
});

const Nav = ({ navItems, onNavItemClick, selectedItem }) => (
  <nav>
    <TransitionMotion
      defaultStyles={getDefaultStyles(navItems, selectedItem)}
      styles={getStyles(navItems, selectedItem)}
      willLeave={willLeave}
    >
      {navItemsStyles =>
        <ul className={styles.menu} role="menubar">
          {
            navItemsStyles.map((navItem, index) =>
              <NavItem
                {...navItem.data}
                style={navItem.style}
                navIndex={index}
                onNavItemClick={() => onNavItemClick(index)}
                key={navItem.key}
              />
            )
          }
        </ul>
      }
    </TransitionMotion>
  </nav>
);

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  onNavItemClick: PropTypes.func,
  selectedItem: PropTypes.number,
};

export default Nav;
