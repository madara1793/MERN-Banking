import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';


export const getMessages = () => {
    return{
        type: GET_MESSAGES
    }
}