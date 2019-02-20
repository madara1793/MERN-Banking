import {GET_CURRENCIES} from '../actions/types'

let initialState = {
    currencies: [],
    from: 'EUR',
    to: 'USD',
    result: null,
    amount: 1
}

export default function(state = initialState, action = []) {
    switch(action.type) {
        case GET_CURRENCIES:
            return {
                currencies: [...action.payload]
            }
        default:
            return state;
    }
}