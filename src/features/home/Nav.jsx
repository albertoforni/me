import React, { PropTypes } from 'react';
import { List } from '../../common/style';
import NavItem from './NavItem';

const styles = {
  menu: List.noStyle,
};

const Nav = ({ navItems, onNavItemClick }) => (
  <nav>
    <ul className={styles.menu} role="menubar">
      {
        navItems.map((navItem, index) =>
          <NavItem
            {...navItem}
            navIndex={index}
            onNavItemClick={() => onNavItemClick(index)}
            key={index}
          />)
      }
    </ul>
  </nav>
);

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  onNavItemClick: PropTypes.func,
};

export default Nav;
