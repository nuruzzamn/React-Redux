import {
  GET_REQUEST,
  GET_REQUEST_FAILURE,
  GET_REQUEST_SUCCESS,
} from "../constantValue/Constant";

const initalState = {
  isLoading: false,
  error: null,
  todos: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: null,
      };

    case GET_REQUEST_FAILURE:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
