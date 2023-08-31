import axios from "axios";
import {
  GET_REQUEST,
  GET_REQUEST_FAILURE,
  GET_REQUEST_SUCCESS,
} from "../constantValue/Constant";

export const fGetRequest = () => {
  return {
    type: GET_REQUEST,
  };
};

export const fGetRequestSuccess = (value) => {
  return {
    type: GET_REQUEST_SUCCESS,
    payload: value.data,
  };
};

export const fGetRequestFailure = (error) => {
  return {
    type: GET_REQUEST_FAILURE,
    payload: error.message,
  };
};

export const getAlltodos = () => async (dispatch) => {
  dispatch(fGetRequest());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch(fGetRequestSuccess(res));
  } catch (error) {
    dispatch(fGetRequestFailure(error));
  }
};
