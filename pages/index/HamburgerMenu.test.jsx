import React from "react";
import { shallow } from "enzyme";
import HamburgerMenu from "./HamburgerMenu";

const defaultProps = {
  onClick: () => {},
  show: false,
};

it("renders a button", () => {
  const onClick = () => {};
  const wrapper = shallow(
    <HamburgerMenu {...defaultProps} show onClick={onClick} />
  );

  expect(wrapper.props().onClick).toEqual(onClick);
});

it("renders a different class if show is true", () => {
  const wrapper = shallow(<HamburgerMenu {...defaultProps} show />);
  const wrapper2 = shallow(<HamburgerMenu {...defaultProps} />);

  expect(wrapper.props().className).not.toEqual(wrapper2.props().className);
});
