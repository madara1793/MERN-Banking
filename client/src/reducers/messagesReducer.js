import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';

const initialState = {
    messages: [
        {
            name: "Kamil",
            email: "example@email.com",
            subject: "subject 1",
            message: "hello"
        },
        {
            name: "Jan",
            email: "example@email.com",
            subject: "subject 3",
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
    }
}