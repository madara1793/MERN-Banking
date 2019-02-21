import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';


export const getMessages = () => {
    return{
        type: GET_MESSAGES
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}