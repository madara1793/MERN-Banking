import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';

const initialState = {
    messages: [],
    isLoading: false
}


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                isLoading: false
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [action.payload, ...state.messages]

            }
        case MESSAGES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}