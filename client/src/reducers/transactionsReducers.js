import uuid from 'uuid';
import { GET_TRANSACTIONS, ADD_TRANSACTION} from '../actions/types';
const initialState = {
    transactions: [
        {id: uuid(), accountNumber: 123456, name: "Kamil", address: "bg70", reference: "payment", amount: 5000},
        {id: uuid(), accountNumber: 654321, name: "Kamil", address: "jbl", reference: "payment", amount: 3000}
    ]
}


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state
            }
        default:
            return state;
    }
}