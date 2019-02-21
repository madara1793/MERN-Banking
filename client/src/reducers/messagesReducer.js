import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';
import uuid from 'uuid';
const initialState = {
    messages: [
        {
            id: uuid(),
            name: "Kamil",
            email: "example@email.com",
            select: "subject 1",
            message: "hello"
        },
        {
            id: uuid(),
            name: "Jan",
            email: "example@email.com",
            select: "subject 3",
            message: "GoodBye"
        },
    ],

}


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state
            }
        default:
            return state;
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }
    }
}