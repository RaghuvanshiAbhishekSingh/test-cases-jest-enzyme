import { createStore, applyMiddleware } from "redux";
import reducers from "./index";
import thunk from "redux-thunk";

export const middleware = [thunk];

const createStoreMiddleWare = applyMiddleware(...middleware)(createStore);

const store = createStoreMiddleWare(reducers);

export default store;
