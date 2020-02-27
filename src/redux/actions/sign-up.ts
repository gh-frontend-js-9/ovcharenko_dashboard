import {Action, ActionCreator, Dispatch} from "redux";
import {User} from "../../models/User"
import API from "../../service/apiService";

export const REGISTER_PENDING: string = 'ACTION_REGISTER_PENDING';
export const REGISTER_SUCCESS: string = 'ACTION_REGISTER_SUCCESS';
export const REGISTER_ERROR: string = 'ACTION_REGISTER_ERROR';

const register: ActionCreator<Action> = () => {
    return {
        type: REGISTER_PENDING,
        payload: true,
    }
};

const registerSuccess: ActionCreator<Action> = (user:User) => {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            registerUser: user
        }
    }
};

const registerError: ActionCreator<Action> = () => {
    return {
        type: REGISTER_ERROR,
        payload: false,
    }
};

export const registrationUser: (user: User)
    => (dispatch: Dispatch)
    => void = (user: User) => {
    return (dispatch: Dispatch) => {
        dispatch(register());
        API.signUp(user)
            .then((user) => {
                console.log(user);
                dispatch(registerSuccess(user));
            })
            .catch(err => {
                dispatch(registerError());
            })
    }
};