import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';
import Nav from './Nav';
import Section from './Section';

it('renders a title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Title />)).toEqual(true);
});

it('renders a navigation', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Nav).length).toEqual(1);

  const selectedItem = wrapper.state('activeSection');

  const navProps = wrapper.find(Nav).props();
  expect(navProps.navItems.length).toEqual(5);
  expect(navProps.onNavItemClick).toBeInstanceOf(Function);
  expect(navProps.selectedItem).toEqual(selectedItem);
});

it('changes the active section onNavItemClick', () => {
  const wrapper = shallow(<App />);

  const aNewSectionIndex = 123;

  wrapper.find(Nav).props().onNavItemClick(aNewSectionIndex);
  expect(wrapper.state('activeSection')).toEqual(aNewSectionIndex);
});

describe('section', () => {
  it('does not render a section when activeSection is -1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('activeSection')).toEqual(-1);
    expect(wrapper.find(Section).length).toEqual(0);
  });

  it('renders a section when activeSection is not -1', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      activeSection: 1,
    });

    expect(wrapper.find(Section).length).toEqual(1);
  });
});
