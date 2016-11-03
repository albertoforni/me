import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';
import Nav from './Nav';
import Section from './Section';
import { navItems } from './SectionContents';

it('renders a title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Title />)).toEqual(true);
});

it('renders a navigation with the selected item -1', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Nav).length).toEqual(1);

  const navProps = wrapper.find(Nav).props();
  expect(navProps.navItems.length).toEqual(navItems.length);
  expect(navProps.selectedItem).toEqual(-1);
});

describe('section', () => {
  it('does not render a section by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Section).length).toEqual(0);
  });

  it('renders a section when Nav sets the section to 1', () => {
    const wrapper = shallow(<App />);
    wrapper.find(Nav).props().onNavItemClick(1);
    wrapper.update();

    expect(wrapper.find(Section).length).toEqual(1);
  });
});
