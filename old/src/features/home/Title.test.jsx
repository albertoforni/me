import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
import Link from '../../common/components/Link';

it('renders Alberto Forni and 2 links', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.find(Link).length).toEqual(2);
});
