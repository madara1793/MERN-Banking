import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  TRANSACTIONS_LOADING,
  SEARCH
} from "../actions/types";

const initialState = {
  transactions: [],
  loading: false,
  value: "",
  works: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH:
      const value = action.payload;
      const works = state.transactions.filter(val => val.includes(value));
      return {
        ...state,
        value,
        works
      };
    default:
      return state;
  }
}
