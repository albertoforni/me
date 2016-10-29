import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';

it('renders a title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Title />)).toEqual(true);
});
