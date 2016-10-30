import React from 'react';
import { shallow } from 'enzyme';
import { TransitionMotion } from 'react-motion';
import Nav from './Nav';
import NavItem from './NavItem';

const defaultProps = {
  navItems: [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
  ],
  onNavItemClick: () => {},
  selectedItem: -1,
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
  ).find(TransitionMotion).shallow();

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
  ).find(TransitionMotion).shallow();

  wrapper.find(NavItem).at(1).props().onNavItemClick();

  expect(aSpyFunc).toHaveBeenCalledWith(1);
});

it('render only the selectedNavItem', () => {
  const thisTestIcon = 'this test icon';
  const thisTestText = 'this test text';

  const navItems = [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
    { icon: thisTestIcon, text: thisTestText },
  ];
  const selectedItem = 2;

  const wrapper = shallow(
    <Nav
      {...defaultProps}
      navItems={navItems}
      selectedItem={selectedItem}
    />
  ).find(TransitionMotion).shallow();

  expect(wrapper.find(NavItem).length).toEqual(1);
  expect(wrapper.find(NavItem).props().icon).toEqual(thisTestIcon);
  expect(wrapper.find(NavItem).props().text).toEqual(thisTestText);
});
