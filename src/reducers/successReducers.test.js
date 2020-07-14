import successReducers from "./successReducers";
import { actionTypes } from "../actions";

describe("successReducers", () => {
  test("return defauly initial state of falsee when no action is performed successReducers", () => {
    const newState = successReducers(undefined, {});
    expect(newState).toBe(false);
  });

  test("returnstate of true upon recieving an action of type `CORRECT_GUESS`", () => {
    const newState = successReducers(undefined, {
      type: actionTypes.CORRECT_GUESS,
    });
    expect(newState).toBe(true);
  });
});
