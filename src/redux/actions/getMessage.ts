import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";
import {sendMessageError, sendMessagePending, sendMessageSuccess} from "./sendMessage";

export const MESSAGE_PENDING = 'MESSAGE_PENDING';
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
export const MESSAGE_ERROR = 'MESSAGE_ERROR';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_CURRENT_THREAD = 'SET_CURRENT_THREAD'

export const setCurrentThread: ActionCreator<Action> = (threadId) => {
    return {
        type: SET_CURRENT_THREAD,
        payload: {
            threadId: threadId
        }
    };
};

export const addMessage: ActionCreator<Action> = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            message: message,
        }
    };
};


export const messagePending: ActionCreator<Action> = () => {
    return {
        type: MESSAGE_PENDING,
        payload: true
    };
};

export const messageSuccess: ActionCreator<Action> = (messages) => {
    return {
        type: MESSAGE_SUCCESS,
        payload: {
            messages: messages,
            isPending: false,
        }
    };
};

export const messageError: ActionCreator<Action> = () => {
    return {
        type: MESSAGE_ERROR,
        payload: false,
    };
};

export const getMessage: (id)
    => (dispatch: Dispatch)
    => void = (id) => {
    return (dispatch: Dispatch) => {
        dispatch(messagePending());
        API.allMessageInThread(id,sessionStorage.getItem('token'))
            .then(success => { 
                console.log(success);
                dispatch(messageSuccess(success));
                dispatch(setCurrentThread(id))
            })
            .catch(err => {
                dispatch(messageError(err));
            });
    };
};

export const sendMessage: (id,body)
    => (dispatch: Dispatch)
    => void = (id,body) => {
    return (dispatch: Dispatch) => {
        API.sendMessage(id,body)
            .then(success => {
                console.log(success);
                dispatch(addMessage(success));
            })
            .catch(err => {
                dispatch(sendMessageError(err));
            });
    };
};