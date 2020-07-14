import React from "react";
import Counter from "./Counter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

//FOR DRY
/**
 * Factory function to create a shallow wrapper for counter component
 * @function setup
 * @param {object} props - Component props specified to props
 * @param {object} state  - Component stated for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Retrn shallow wrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search in.
 * @param {string} val -value of data-test attribute
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("check Basic Render", () => {
  const wrapper = setup();
  const counterComponent = findByTestAttr(wrapper, "component-counter");
  expect(counterComponent.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "increment-counter");
  expect(buttonComponent.length).toBe(1);
});

test("render counter Display", () => {
  const wrapper = setup();
  const lableComponent = findByTestAttr(wrapper, "display-counter");
  expect(lableComponent.length).toBe(1);
});

test("Counter start at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("Click button increment counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  //find button and click
  const button = findByTestAttr(wrapper, "increment-counter");
  button.simulate("click");

  //find display and check value
  const displayCounter = findByTestAttr(wrapper, "display-counter");
  expect(displayCounter.text()).toContain(counter + 1);
});

/**
 * DECREMENT COUNTER WITHE ERROR MESSAGE
 */

// test("Check that there is a decrement Button", () => {
//   const wrapper = setup();
//   const findDecrementButton = findByTestAttr(wrapper,'decrement-counter');
//   expect(findDecrementButton.length).toBe(1)
// });

// test("Check onclick of decrement Counter", ()=>{
//   const counter = 4;
//   const wrapper = setup(null,{counter});

//   const decrementButton =  findByTestAttr(wrapper, 'decrement-counter')
//   decrementButton.simulate("click");

//   const displayCounter = findByTestAttr(wrapper, "display-counter");
//   expect(displayCounter.text()).toContain(counter -1);
  
// });

// test("counter value not less then 0", ()=> {
//   const counter = 1;
//   const wrapper = setup(null, {counter,error:false});
//   const decrementButton = findByTestAttr(wrapper, 'decrement-counter')
//   decrementButton.simulate("click");
//   decrementButton.simulate("click");

//   const displayCounter = findByTestAttr(wrapper, "display-counter");
//   expect(displayCounter.text()).toContain(0);

//   const errorMessage = wrapper.find(".error");
//   expect(errorMessage.length).toBe(1);
//   expect(errorMessage.text()).toContain(0)
// })

describe('Decrement', () => {

  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'display-counter');
    expect(counterDisplay.text()).toContain(counter - 1);
  });
  // make sure error doesn't show by default
  test('error does not show when not needed', () => {
    // I plan to implement this by using a "hidden" class for the error div
    // I plan to use the data-test value 'error-message' for the error div
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');

    // using enzyme's ".hasClass()" method
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });
  describe('counter is 0 and decrement is clicked', () => {
    // using a describe here so I can use a "beforeEach" for shared setup

    // scoping wrapper to the describe, so it can be used in beforeEach and the tests
    let wrapper
    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = setup();

      // find button and click
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
      wrapper.update();
    });
    test('error shows', () => {
      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });
    test('counter still displays 0', () => {
      const counterDisplay = findByTestAttr(wrapper, 'display-counter');
      expect(counterDisplay.text()).toContain(0);
    });
    test('clicking increment clears the error', () => {
      // find and click the increment button
      const button = findByTestAttr(wrapper, 'increment-counter');
      button.simulate('click');

      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});