import { createStore } from "redux";
import reducer from "../services/countReducer";

const store = createStore(reducer);

export default store;
