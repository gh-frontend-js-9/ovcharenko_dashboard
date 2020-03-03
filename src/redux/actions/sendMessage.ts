import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';

export const sendMessagePending: ActionCreator<Action> = () => {
    return {
        type: SEND_MESSAGE_PENDING,
        payload: true
    };
};

export const sendMessageSuccess: ActionCreator<Action> = (message) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: {
            newMessage: message,
            isPending: false,
        }
    };
};

export const sendMessageError: ActionCreator<Action> = () => {
    return {
        type: SEND_MESSAGE_ERROR,
        payload: false,
    };
};

/*
export const sendMessage: (id,body)
    => (dispatch: Dispatch)
    => void = (id,body) => {
    return (dispatch: Dispatch) => {
        dispatch(sendMessagePending());
        API.sendMessage(id,body)
            .then(success => {
                console.log(success);
                dispatch(sendMessageSuccess(success));
            })
            .catch(err => {
                dispatch(sendMessageError(err));
            });
    };
};*/
