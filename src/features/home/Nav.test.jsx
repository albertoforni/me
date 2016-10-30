import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import NavItem from './NavItem';

const defaultProps = {
  navItems: [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
  ],
  onNavItemClick: () => {},
};

it('renders NavItems', () => {
  const navItems = [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
  ];
  const wrapper = shallow(
    <Nav
      {...defaultProps}
      navItems={navItems}
    />
  );

  expect(wrapper.find(NavItem).length).toEqual(navItems.length);
});

it('calls the onNavItemClick with the new menu Index', () => {
  const navItems = [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
  ];
  const aSpyFunc = jest.fn();

  const wrapper = shallow(
    <Nav
      {...defaultProps}
      navItems={navItems}
      onNavItemClick={aSpyFunc}
    />
  );

  wrapper.find(NavItem).at(1).props().onNavItemClick();

  expect(aSpyFunc).toHaveBeenCalledWith(1);
});
