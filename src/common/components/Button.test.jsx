import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders a button', () => {
  const onClick = () => {};
  const content = 'a link content';
  const wrapper = shallow(<Button onClick={onClick}>{content}</Button>);

  expect(wrapper.props().onClick).toEqual(onClick);
  expect(wrapper.props().children).toEqual(content);
});
