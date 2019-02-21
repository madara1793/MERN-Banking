import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import converterReducer from "./converterReducer";
import transactionsReducer from "./transactionsReducers";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cur: converterReducer,
  transactions: transactionsReducer,
  messages: messagesReducer
});