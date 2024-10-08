// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const reducer = (currentState, action) => {
  if (currentState === undefined) return { number: 1 };

  const newState = { ...currentState };
  return newState;
};

const numberStore = createStore(reducer);

export default numberStore;
