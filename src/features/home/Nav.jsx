import React from 'react';
import { List } from '../../common/style';
import NavItem from './NavItem';

// Icons
import about from '../../common/icons/about.svg';
import dev from '../../common/icons/dev.svg';
import education from '../../common/icons/education.svg';
import experience from '../../common/icons/experience.svg';
import learn from '../../common/icons/learn.svg';

const styles = {
  menu: List.noStyle,
};

const NavItems = [
  {
    text: 'about me',
    icon: about,
  },
  {
    text: 'experience',
    icon: experience,
  },
  {
    text: 'education',
    icon: education,
  },
  {
    text: 'development skills',
    icon: dev,
  },
  {
    text: 'learning',
    icon: learn,
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
