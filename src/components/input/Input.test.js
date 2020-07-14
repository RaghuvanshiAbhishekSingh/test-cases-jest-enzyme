import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttribute, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive(); //enzyme method to return the child component in case of HOC etc
  return wrapper;
};

describe("Check Input Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  
  describe("Word has not been gussed", () => {
    test("render component without error", () => {
        const component = findByTestAttribute(wrapper,'component-input');
        expect(component.length).toBe(1);
    });

    test("render Input box", () => {
        const component = findByTestAttribute(wrapper,'input-box');
        expect(component.length).toBe(1);
    });

    test("Render submit button", () => {
        const component = findByTestAttribute(wrapper,'submit-button');
        expect(component.length).toBe(1);
    });
  });

  describe("Word has been gussed", () => {
    test("render component without error", () => {});

    test("Does not render Input box", () => {});

    test("does not render submit button", () => {});
  });
});

describe("Update state on dispatch", () => {
  test("Initial Render of Element", () => {});
});
