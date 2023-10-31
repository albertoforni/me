import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './Nav';
import NavItem from './NavItem';
import HamburgerMenu from './HamburgerMenu';
import Button from '../../common/components/Button';
import DomDelayedUpdate from '../../common/components/DomDelayedUpdate';

const defaultProps = {
  navItems: [
    { icon: 'an icon', text: 'some text' },
    { icon: 'an icon', text: 'some text' },
  ],
  onNavItemClick: () => {},
  selectedItem: -1,
};

it('renders NavItems inside DomDelayedUpdate', () => {
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
  const domDelayedUpdate = wrapper.find(DomDelayedUpdate);
  expect(domDelayedUpdate.find(NavItem).length).toEqual(navItems.length);

  const domDelayedUpdateProps = domDelayedUpdate.props();
  expect(domDelayedUpdateProps.mountClass).toEqual('parentStartAnimation');
  expect(domDelayedUpdateProps.mountDelay).toEqual(150);
  expect(domDelayedUpdateProps.shouldUpdate).toEqual(false);
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

it('shows only the selectedNavItem', () => {
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

  expect(wrapper.find(NavItem).length).toEqual(3);
  expect(wrapper.find(NavItem).at(selectedItem).props().icon).toEqual(thisTestIcon);
  expect(wrapper.find(NavItem).at(selectedItem).props().text).toEqual(thisTestText);
  expect(wrapper.find(NavItem).at(selectedItem).props().animationClasses.hideRoot).toEqual('');

  expect(wrapper.find(NavItem).at(0).props().animationClasses.hideRoot).toEqual('hideRoot');
  expect(wrapper.find(NavItem).at(1).props().animationClasses.hideRoot).toEqual('hideRoot');
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
  it('doesnt show the hamburger menu if there are no active sections', () => {
    const wrapper = shallow(
      <Nav
        {...defaultProps}
        selectedItem={-1}
      />
    );

    expect(wrapper.find(HamburgerMenu).length).toEqual(1);
    expect(wrapper.find(HamburgerMenu).props().show).toEqual(false);
  });

  it('shows the hamburger menu if there is an active section', () => {
    const wrapper = shallow(
      <Nav
        {...defaultProps}
        selectedItem={0}
      />
    );

    expect(wrapper.find(HamburgerMenu).length).toEqual(1);
    expect(wrapper.find(HamburgerMenu).props().show).toEqual(true);
  });

  it('calls onNavItemClick with index -1 after reseting DomDelayedUpdate', () => {
    const aSpyFunc = jest.fn();
    const aDomDelayedUpdateSpyFn = jest.fn();

    const wrapper = mount(
      <Nav
        {...defaultProps}
        onNavItemClick={aSpyFunc}
        selectedItem={0}
      />
    );

    wrapper.find(DomDelayedUpdate).node.reset = aDomDelayedUpdateSpyFn;

    wrapper.find(HamburgerMenu).props().onClick();

    expect(aSpyFunc).toHaveBeenCalledWith(-1);
    expect(aDomDelayedUpdateSpyFn).toHaveBeenCalledWith();
  });
});
