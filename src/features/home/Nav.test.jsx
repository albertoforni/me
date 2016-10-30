import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import NavItem from './NavItem';
import HamburgerMenu from './HamburgerMenu';
import Button from '../../common/components/Button';

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
  );

  expect(wrapper.find(NavItem).length).toEqual(navItems.length);
});

it('calls the onNavItemClick with the new menu Index', () => {
  const aSpyFunc = jest.fn();

  const wrapper = shallow(
    <Nav
      {...defaultProps}
      onNavItemClick={aSpyFunc}
    />
  );

  wrapper.find(NavItem).at(1).props().onNavItemClick();

  expect(aSpyFunc).toHaveBeenCalledWith(1);
});

it('renders only the selectedNavItem', () => {
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
  );

  expect(wrapper.find(NavItem).length).toEqual(1);
  expect(wrapper.find(NavItem).props().icon).toEqual(thisTestIcon);
  expect(wrapper.find(NavItem).props().text).toEqual(thisTestText);
});

describe('navigation buttons', () => {
  it('calls onNavItemClick with the next index', () => {
    const aSpyFunc = jest.fn();
    const nextItemIndex = 1;

    const wrapper = shallow(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={0}
      />
    );

    wrapper.find(Button).at(1).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(nextItemIndex);
  });

  it('calls onNavItemClick with the 0 if currentIndex is the last one', () => {
    const aSpyFunc = jest.fn();

    const wrapper = shallow(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={1}
      />
    );

    wrapper.find(Button).at(1).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(0);
  });

  it('calls onNavItemClick with the prev index', () => {
    const aSpyFunc = jest.fn();
    const prevItemIndex = 0;

    const wrapper = shallow(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={1}
      />
    );

    wrapper.find(Button).at(0).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(prevItemIndex);
  });

  it('calls onNavItemClick with the last nav item when current index is 0', () => {
    const aSpyFunc = jest.fn();
    const lastNavItemIndex = defaultProps.navItems.length - 1;

    const wrapper = shallow(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={0}
      />
    );

    wrapper.find(Button).at(0).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(lastNavItemIndex);
  });
});

describe('hamburger menu', () => {
  it('doesnt render the hamburger menu if there are no active sections', () => {
    const wrapper = shallow(
      <Nav
        {...defaultProps}
        selectedItem={-1}
      />
    );

    expect(wrapper.find(HamburgerMenu).length).toEqual(0);
  });

  it('calls onNavItemClick with index -1', () => {
    const aSpyFunc = jest.fn();

    const wrapper = shallow(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={0}
      />
    );

    wrapper.find(HamburgerMenu).at(0).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(-1);
  });
});
