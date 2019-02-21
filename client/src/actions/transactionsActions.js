import { GET_TRANSACTIONS, ADD_TRANSACTION} from './types';

export const getTransactions = () => {
    return {
        type: GET_TRANSACTIONS
    }
}

export const addTransaction = () => {
    return {
        type: ADD_TRANSACTION
    }
}