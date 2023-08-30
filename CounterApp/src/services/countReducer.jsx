import {
  DECREMENT,
  INCREMENT,
  RESET,
  initialCountValue,
} from "../constantValue/intialValue";

const reducer = (state = initialCountValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default reducer;
