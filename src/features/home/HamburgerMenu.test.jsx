import React from 'react';
import { shallow } from 'enzyme';
import HamburgerMenu from './HamburgerMenu';

it('renders a button', () => {
  const onClick = () => {};
  const wrapper = shallow(<HamburgerMenu onClick={onClick} />);

  expect(wrapper.props().onClick).toEqual(onClick);
});
