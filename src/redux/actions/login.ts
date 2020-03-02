import {Action, ActionCreator, Dispatch} from "redux";
import {User} from "../../models/User";
import API from "../../service/apiService";

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setLoginPending: ActionCreator<Action> = () => {
    return {
        type: LOGIN_PENDING,
        payload: true
    };
};

export const setLoginSuccess: ActionCreator<Action> = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user: data.response.data,
            token: data.token,
            isPending: false,
        }
    };
};

export const setLoginError: ActionCreator<Action> = () => {
    return {
        type: LOGIN_ERROR,
        payload: false,
    };
};

export const login: (user: User)
    => (dispatch: Dispatch)
    => void = (user: User) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoginPending());
        API.logIn(user)
            .then(success => {
                console.log(success);
                dispatch(setLoginSuccess(success));
            })
            .catch(err => {
                dispatch(setLoginError(err));
            });
    };
};