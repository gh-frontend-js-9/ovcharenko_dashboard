import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const THREAD_PENDING = 'THREAD_PENDING';
export const THREAD_SUCCESS = 'THREAD_SUCCESS';
export const THREAD_ERROR = 'THREAD_ERROR';

export const threadPending: ActionCreator<Action> = () => {
    return {
        type: THREAD_PENDING,
        payload: true
    };
};

export const threadSuccess: ActionCreator<Action> = (thread) => {
    return {
        type: THREAD_SUCCESS,
        payload: {
            newThread: thread,
        }
    };
};

export const threadError: ActionCreator<Action> = () => {
    return {
        type: THREAD_ERROR,
        payload: false,
    };
};

export const postThread: (id)
    => (dispatch: Dispatch)
    => void = (id) => {
    return (dispatch: Dispatch) => {
        dispatch(threadPending());
        API.createThread(id)
            .then(success => {
                console.log(success);
                dispatch(threadSuccess(success));
            })
            .catch(err => {
                dispatch(threadError(err));
            });
    };
};