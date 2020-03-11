import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const ALL_USER_PENDING = 'ALL_USER_PENDING';
export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS';
export const ALL_USER_ERROR = 'ALL_USER_ERROR';

export const getUserPending: ActionCreator<Action> = () => {
    return {
        type: ALL_USER_PENDING,
        payload: true
    };
};

export const getUserSuccess: ActionCreator<Action> = (users) => {
    return {
        type: ALL_USER_SUCCESS,
        payload: {
            users: users,
        }
    };
};

export const getUserError: ActionCreator<Action> = () => {
    return {
        type: ALL_USER_ERROR,
        payload: false,
    };
};

export const getUsers: ()
    => (dispatch: Dispatch)
    => void = () => {
    return (dispatch: Dispatch) => {
        dispatch(getUserPending());
        API.getAllUser()
            .then(success => {
                console.log(success);
                dispatch(getUserSuccess(success));
            })
            .catch(err => {
                dispatch(getUserError(err));
            });
    };
};