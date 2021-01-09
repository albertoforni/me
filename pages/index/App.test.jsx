import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Title from "./Title";
import Nav from "./Nav";
import Section from "./Section";
import { navItems } from "./SectionContents";
import DomDelayedUpdate from "../../common/components/DomDelayedUpdate";

it("renders a title", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Title />)).toEqual(true);
});

it("renders a navigation with the selected item -1", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Nav).length).toEqual(1);

  const navProps = wrapper.find(Nav).props();
  expect(navProps.navItems.length).toEqual(navItems.length);
  expect(navProps.selectedItem).toEqual(-1);
});

describe("section", () => {
  it("renders a section inside a DomDelayedUpdate", () => {
    const wrapper = shallow(<App />);

    const domDelayedUpdate = wrapper.find(DomDelayedUpdate);
    expect(domDelayedUpdate.find(Section).length).toEqual(1);

    const domDelayedUpdateProps = domDelayedUpdate.props();
    expect(domDelayedUpdateProps.mountClass).toEqual("showSectionClass");
  });

  it("shows a section by empty content by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Section).length).toEqual(1);
    expect(wrapper.find(Section).props().content).toEqual("");
  });

  it("calls reset on DomDelayedUpdate and shows a section when Nav sets the section to 1", () => {
    const aDomDelayedUpdateSpyFn = jest.fn();

    const wrapper = mount(<App />);
    wrapper.find(DomDelayedUpdate).last().node.reset = aDomDelayedUpdateSpyFn;
    wrapper.find(Nav).props().onNavItemClick(1);

    expect(aDomDelayedUpdateSpyFn).toHaveBeenCalledWith(true);
    expect(wrapper.find(Section).props().content).not.toEqual("");
  });

  it("does not calls reset on DomDelayedUpdate when active section is -1", () => {
    const aDomDelayedUpdateSpyFn = jest.fn();

    const wrapper = mount(<App />);
    wrapper.find(DomDelayedUpdate).last().node.reset = aDomDelayedUpdateSpyFn;
    wrapper.find(Nav).props().onNavItemClick(-1);

    expect(aDomDelayedUpdateSpyFn).not.toHaveBeenCalled();
    expect(wrapper.find(Section).props().content).toEqual("");
  });
});
