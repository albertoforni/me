import React, { PropTypes } from 'react';
import { List } from '../../common/style';
import NavItem from './NavItem';

const styles = {
  menu: List.noStyle,
};

const getNavItems = (navItems, selectedItem) => {
  const selectedNavItem = navItems[selectedItem];

  if (selectedNavItem) {
    return [selectedNavItem];
  }

  return navItems;
};

const Nav = ({ navItems, onNavItemClick, selectedItem }) => {
  const navItemsBySelected = getNavItems(navItems, selectedItem);
  return (
    <nav>
      <ul className={styles.menu} role="menubar">
        {
          navItemsBySelected.map((navItem, index) =>
            <NavItem
              {...navItem}
              navIndex={index}
              onNavItemClick={() => onNavItemClick(index)}
              key={index}
              disabled={navItemsBySelected.length === 1}
            />
          )
        }
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  onNavItemClick: PropTypes.func,
  selectedItem: PropTypes.number,
};

export default Nav;
