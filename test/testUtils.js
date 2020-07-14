import { checkPropTypes } from "prop-types";
import { createStore, applyMiddleware } from "redux";
import { middleware } from "../src/reducers/configureReducer";

import rootReducer from "../src/reducers/index";
/**
 * Retrn shallow wrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search in.
 * @param {string} val -value of data-test attribute
 */

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propsError).toBeUndefined();
};

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleWare(rootReducer, initialState);
};
