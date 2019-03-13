import axios from "axios";
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  TRANSACTIONS_LOADING,
  SEARCH
} from "./types";

export const getTransactions = () => dispatch => {
  dispatch(transactionsLoading());
  axios.get("/api/transactions").then(res =>
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data
    })
  );
};
export const addTransaction = transaction => dispatch => {
  axios.post("/api/transactions", transaction).then(res =>
    dispatch({
      type: ADD_TRANSACTION,
      payload: res.data
    })
  );
};

export const search = value => {
  return {
    type: SEARCH,
    payload: value
  };
};

export const transactionsLoading = () => {
  return {
    type: TRANSACTIONS_LOADING
  };
};
