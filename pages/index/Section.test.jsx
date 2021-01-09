import React from "react";
import { shallow } from "enzyme";
import ReactMarkdown from "react-markdown";
import Section from "./Section";

const defaultProps = {
  content: "some content",
  parentClass: "",
};

it("renders the menu text", () => {
  const wrapper = shallow(<Section {...defaultProps} />);

  expect(wrapper.find("section").length).toEqual(1);
});

it("renders markdown into the section", () => {
  const someContent = "some content";

  const wrapper = shallow(<Section {...defaultProps} content={someContent} />);

  expect(wrapper.find(ReactMarkdown).props().source).toEqual(someContent);
});
