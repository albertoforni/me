import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';
import about from '../../common/icons/about.svg';

const defaultProps = {
  text: 'default text',
  icon: 'default',
  menuIndex: 1,
};

it('renders the menu text', () => {
  const someText = 'some text';

  const wrapper = shallow(
    <NavItem
      {...defaultProps}
      text={someText}
    />
  );

  expect(wrapper.find('span').text()).toEqual(someText);
});

it('renders an icon', () => {
  const someText = 'some text';
  const anIcon = 'about';

  const wrapper = shallow(
    <NavItem
      {...defaultProps}
      text={someText}
      icon={anIcon}
    />
  );

  const iconProps = wrapper.find('img').props();
  expect(iconProps.src).toEqual(about);
  expect(iconProps.alt).toEqual(someText);
});

it('renders the aria-labelledby with same key as the menu text', () => {
  const anIndex = 23;

  const wrapper = shallow(
    <NavItem
      {...defaultProps}
      menuIndex={anIndex}
    />
  );

  expect(wrapper.find(`[aria-labelledby="menuLbl${anIndex}"]`).length).toEqual(1);
  expect(wrapper.find(`#menuLbl${anIndex}`).length).toEqual(1);
});
