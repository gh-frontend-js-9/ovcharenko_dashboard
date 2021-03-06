import {Action, ActionCreator, Dispatch} from "redux";
import {User} from "../../models/User";
import API from "../../service/apiService";

export const RESET_PENDING = 'RESET_PENDING';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_ERROR = 'RESET_ERROR';

export const resetPending: ActionCreator<Action> = () => {
    return {
        type: RESET_PENDING,
        payload: true
    };
};

export const resetSuccess: ActionCreator<Action> = (message) => {
    return {
        type: RESET_SUCCESS,
        payload: {
            message: message
        }
    };
};

export const resetError: ActionCreator<Action> = () => {
    return {
        type: RESET_ERROR,
        payload: false,
    };
};

export const resetPassword: (user: User)
    => (dispatch: Dispatch)
    => void = (user: User) => {
    return (dispatch: Dispatch) => {
        dispatch(resetPending());
        API.resetPassword(user)
            .then(success => {
                console.log(success)
                dispatch(resetSuccess(success));
            })
            .catch(err => {
                dispatch(resetError(err));
            });
    };
};