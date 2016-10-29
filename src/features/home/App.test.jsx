import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';
import Nav from './Nav';

it('renders a title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Title />)).toEqual(true);
});

it('renders a navigation', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Nav />)).toEqual(true);
});
