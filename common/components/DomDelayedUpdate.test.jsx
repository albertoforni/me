import React from "react";
import { shallow, mount } from "enzyme";
import DomDelayedUpdate from "./DomDelayedUpdate";

jest.useFakeTimers();

const getLastTimer = () =>
  setTimeout.mock.calls[setTimeout.mock.calls.length - 1];

it("renders the children", () => {
  const aChild = <div />;

  const wrapper = shallow(<DomDelayedUpdate>{aChild}</DomDelayedUpdate>);

  expect(wrapper.children()).toEqual(shallow(aChild));
});

it("sets the div class after the passed millisecond", () => {
  const aMountClass = "aMountclass";
  const mountDelay = 123;

  const wrapper = mount(
    <DomDelayedUpdate mountClass={aMountClass} mountDelay={mountDelay} />
  );

  expect(wrapper.find("div").first().node.className).toEqual("");
  expect(getLastTimer()[1]).toBe(123);

  jest.runOnlyPendingTimers();

  expect(wrapper.find("div").first().node.className).toEqual(aMountClass);
});

it("adds the updateClass if not there", () => {
  const aMountClass = "aMountclass";
  const anUpdateClass = "anUpdateClass";
  const updateDelay = 432;

  const wrapper = mount(
    <DomDelayedUpdate
      mountClass={aMountClass}
      updateClass={anUpdateClass}
      updateDelay={updateDelay}
      shouldUpdate
    />
  );

  wrapper.update();

  jest.runOnlyPendingTimers();

  expect(getLastTimer()[1]).toBe(updateDelay);
  expect(wrapper.find("div").first().node.className).toEqual(
    `${aMountClass} ${anUpdateClass}`
  );
});

it("removes the updateClass shouldUpdate is false", () => {
  const aMountClass = "aMountClass";
  const anUpdateClass = "anUpdateClass";

  const wrapper = mount(
    <DomDelayedUpdate mountClass={aMountClass} updateClass={anUpdateClass} />
  );

  wrapper.find("div").first().node.classList.add(anUpdateClass);

  wrapper.update();

  jest.runOnlyPendingTimers();

  expect(wrapper.find("div").first().node.className).toEqual(aMountClass);
});

it("sets the class to an empty value", () => {
  const aMountClass = "aMountclass";
  const wrapper = mount(<DomDelayedUpdate mountClass={aMountClass} />);

  wrapper.instance().reset(true);

  expect(wrapper.find("div").first().node.className).toEqual("");
});

it("removes the updateClass", () => {
  const aMountClass = "a Mount class";
  const wrapper = mount(<DomDelayedUpdate mountClass={aMountClass} />);

  wrapper.find("div").first().node.classList.add("aNewClass");

  wrapper.instance().reset();

  expect(wrapper.find("div").first().node.className).toEqual(aMountClass);
});

it("sets the class to the initial value", () => {
  const aMountClass = "a Mount class";
  const wrapper = mount(
    <DomDelayedUpdate mountClass={aMountClass} shouldUpdateWithMountClass />
  );

  wrapper.find("div").first().node.className = "wrongClass";

  wrapper.instance().reset();

  expect(wrapper.find("div").first().node.className).toEqual(aMountClass);
});
