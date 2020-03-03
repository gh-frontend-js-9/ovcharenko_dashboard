import {Action, ActionCreator, Dispatch} from "redux";
import API from "../../service/apiService";

export const USER_PENDING = 'USER_PENDING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const getUserPending: ActionCreator<Action> = () => {
    return {
        type: USER_PENDING,
        payload: true
    };
};

export const getUserSuccess: ActionCreator<Action> = (users) => {
    return {
        type: USER_SUCCESS,
        payload: {
            users: users,
        }
    };
};

export const getUserError: ActionCreator<Action> = () => {
    return {
        type: USER_ERROR,
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