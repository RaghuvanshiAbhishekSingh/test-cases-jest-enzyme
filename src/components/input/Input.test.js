import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttribute,storeFactory } from "../../../test/testUtils";

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store}/>).dive().dive(); //enzyme method to return the child component in case of HOC etc
  return wrapper;
};

describe("Check Input Component", () => {
    describe("Word has not been gussed", () => {
        test("render component without error",()=>{

        });

        test("render Input box",()=>{
            
        });

        test("Render submit button",()=>{
            
        });
    });

    describe("Word has been gussed", () => {
        test("render component without error",()=>{

        });

        test("Does not render Input box",()=>{
            
        });

        test("does not render submit button",()=>{
            
        });
    });
});

describe("Update state on dispatch", () => {
    test("Initial Render of Element", () => {});
  });
