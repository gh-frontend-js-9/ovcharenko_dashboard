import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const MESSAGE_PENDING = 'MESSAGE_PENDING';
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
export const MESSAGE_ERROR = 'MESSAGE_ERROR';

export const messagePending: ActionCreator<Action> = () => {
    return {
        type: MESSAGE_PENDING,
        payload: true
    };
};

export const messageSuccess: ActionCreator<Action> = (data) => {
    return {
        type: MESSAGE_SUCCESS,
        payload: {
            threadId: data,
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
        dispatch(messagePending(id));
        API.allMessageInThread(id,sessionStorage.getItem('token'))
            .then(success => { 
                console.log(success);
                dispatch(messageSuccess(success));
            })
            .catch(err => {
                dispatch(messageError(err));
            });
    };
};