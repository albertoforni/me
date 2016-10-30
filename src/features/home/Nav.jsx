import React, { PropTypes } from 'react';
import { List } from '../../common/style';
import NavItem from './NavItem';
import Button from '../../common/components/Button';

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

const nextIndex = (items, currentIndex, onNavItemClick) => {
  const length = items.length;
  const nextItemIndex = currentIndex + 1;
  onNavItemClick(nextItemIndex >= length ? 0 : nextItemIndex);
};

const prevIndex = (items, currentIndex, onNavItemClick) => {
  const prevItemIndex = currentIndex - 1;

  onNavItemClick(prevItemIndex < 0 ? items.length - 1 : prevItemIndex);
};

const Nav = ({ navItems, onNavItemClick, selectedItem }) => {
  const navItemsBySelected = getNavItems(navItems, selectedItem);
  return (
    <nav>
      <Button
        onClick={() => prevIndex(navItems, selectedItem, onNavItemClick)}
      >{'<'}</Button>
      <Button
        onClick={() => nextIndex(navItems, selectedItem, onNavItemClick)}
      >{'>'}</Button>
      {
        navItemsBySelected.length === 1 ?
        (
          <HamburgerMenu
            onClick={() => onNavItemClick(-1)}
          />
        ) : null
      }
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
