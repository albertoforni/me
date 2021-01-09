import React from "react";
import { shallow } from "enzyme";
import Link from "./Link";

it("renders a link", () => {
  const href = "a link url";
  const content = "a link content";
  const wrapper = shallow(<Link href={href}>{content}</Link>);

  expect(wrapper.props().href).toEqual(href);
  expect(wrapper.props().children).toEqual(content);
});
