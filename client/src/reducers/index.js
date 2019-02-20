import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import converterReducer from "./converterReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cur: converterReducer
});