import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import NavItem from './NavItem';

it('renders 5 NavItems', () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.find(NavItem).length).toEqual(5);
});
