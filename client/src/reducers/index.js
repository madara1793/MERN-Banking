import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import transactionsReducer from "./transactionsReducers";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  transactions: transactionsReducer,
  messages: messagesReducer
});