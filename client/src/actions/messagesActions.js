import {GET_MESSAGES, ADD_MESSAGE, MESSAGES_LOADING} from '../actions/types';
import axios from 'axios';

export const getMessages = () => dispatch => {
    dispatch(messagesLoading())
        axios
            .get('/api/messages')
            .then(res => dispatch({
                type: GET_MESSAGES,
                payload: res.data
            }))
}

export const addMessage = message => dispatch => {
    axios
        .post('/api/messages', message)
        .then(res => dispatch({
            type: ADD_MESSAGE,
            payload: res.data
        }))
}

export const messagesLoading = () => {
    return {
        type: MESSAGES_LOADING,
    }
}