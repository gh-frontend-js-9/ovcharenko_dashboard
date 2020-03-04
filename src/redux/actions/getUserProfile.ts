import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const USER_PENDING = 'USER_PENDING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const threadPending: ActionCreator<Action> = () => {
    return {
        type: USER_PENDING,
        payload: true
    };
};

export const threadSuccess: ActionCreator<Action> = (user) => {
    return {
        type: USER_SUCCESS,
        payload: {
            user: user,
        }
    };
};

export const threadError: ActionCreator<Action> = () => {
    return {
        type: USER_ERROR,
        payload: false,
    };
};

export const getUserById: (id)
    => (dispatch: Dispatch)
    => void = (id) => {
    return (dispatch: Dispatch) => {
        dispatch(threadPending());
        API.getUserById(id)
            .then(success => {
                console.log(success);
                dispatch(threadSuccess(success));
            })
            .catch(err => {
                dispatch(threadError(err));
            });
    };
};