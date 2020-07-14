import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttribute, checkProps } from "../../../test/testUtils";

const defaultProps = { success: false };
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

describe("Checking Congrats component", () => {
  test("render without error", () => {
    //const success = false;
    const wrapper = setup( );
    const congratComponent = findByTestAttribute(wrapper, "component-congrats");
    expect(congratComponent.length).toBe(1);
  });

  test("Render no text when success props is false", () => {
    const success = false;
    const wrapper = setup({ success });

    const congratComponent = findByTestAttribute(wrapper, "component-congrats");
    expect(congratComponent.text()).toBe("");
  });

  test("render non-empty congrats message when c=success props is true", () => {
    const success = true;
    const wrapper = setup({ success });

    const congratMessage = findByTestAttribute(wrapper, "congrats-message");
    expect(congratMessage.text().length).not.toBe(0);
  });

  test("Does not throw warning with excepted props", () => {
    const success = true;
    checkProps(Congrats, { success });
    // const propError = checkPropTypes(
    //   Congrats.propTypes,
    //   { success },
    //   "prop",
    //   Congrats.name
    // );

    //expect(propError).toBeUndefined();
  });
});
