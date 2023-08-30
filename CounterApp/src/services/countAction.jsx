import { DECREMENT, INCREMENT, RESET } from "../constantValue/intialValue";

export const fIncrement = () => {
  return {
    type: INCREMENT,
  };
};

export const fDecrement = () => {
  return {
    type: DECREMENT,
  };
};

export const fReset = () => {
  return {
    type: RESET,
  };
};
