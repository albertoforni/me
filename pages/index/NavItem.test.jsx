import React from "react";
import { shallow } from "enzyme";
import NavItem from "./NavItem";

const defaultProps = {
  text: "default text",
  icon: "a default icon stream",
  navIndex: 1,
  onNavItemClick: () => {},
  animationClasses: {
    parentStartAnimation: "",
    hideRoot: "",
    parentStopAnimation: "",
  },
};

it("renders the menu text", () => {
  const someText = "some text";

  const wrapper = shallow(<NavItem {...defaultProps} text={someText} />);

  expect(wrapper.find("span").text()).toEqual(someText);
});

it("renders an icon", () => {
  const someText = "some text";
  const anIcon = "a default icon stream";

  const wrapper = shallow(
    <NavItem {...defaultProps} text={someText} icon={anIcon} />
  );

  const iconProps = wrapper.find("img").props();
  expect(iconProps.src).toEqual(anIcon);
  expect(iconProps.alt).toEqual(someText);
});

it("renders the aria-labelledby with same key as the menu text", () => {
  const anIndex = 23;

  const wrapper = shallow(<NavItem {...defaultProps} navIndex={anIndex} />);

  expect(wrapper.find(`[aria-labelledby="menuLbl${anIndex}"]`).length).toEqual(
    1
  );
  expect(wrapper.find(`#menuLbl${anIndex}`).length).toEqual(1);
});

it("calls onMenuItemClick when button is clicked", () => {
  const aSpyFunc = jest.fn();

  const wrapper = shallow(
    <NavItem {...defaultProps} onNavItemClick={aSpyFunc} />
  );

  wrapper.find("button").simulate("click");
  expect(aSpyFunc).toHaveBeenCalled();
});

it("disables the click when disabled is passed in", () => {
  const aSpyFunc = jest.fn();

  const wrapper = shallow(
    <NavItem {...defaultProps} onNavItemClick={aSpyFunc} disabled />
  );

  wrapper.find("button").simulate("click");
  expect(aSpyFunc).not.toHaveBeenCalled();
});
