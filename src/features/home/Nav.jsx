import React from 'react';
import { List } from '../../common/style';
import NavItem from './NavItem';

const styles = {
  menu: List.noStyle,
};

const NavItems = [
  {
    text: 'about me',
    icon: 'about',
  },
  {
    text: 'experience',
    icon: 'experience',
  },
  {
    text: 'education',
    icon: 'education',
  },
  {
    text: 'development skills',
    icon: 'dev',
  },
  {
    text: 'learning',
    icon: 'learn',
  },
];

const Nav = () => (
  <nav>
    <ul className={styles.menu} role="menubar">
      {
        NavItems.map((navItem, index) => <NavItem {...navItem} menuIndex={index} key={index} />)
      }
    </ul>
  </nav>
);

export default Nav;
