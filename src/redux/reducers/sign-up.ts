import {
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../actions/sign-up";
import {Reducer} from "redux";
import {RegisterState} from "./types/RegistrationState";

const initialState: RegisterState = {
    registrationIsPending: false,
    registerUser: {}
};

export const signUp: Reducer<RegisterState, any> = (state= initialState, action) => {
    switch (action.type) {
        case REGISTER_PENDING:
            return {
                ...state,
                registrationIsPending: action.payload
            };
        case REGISTER_ERROR:
            return {
                ...state,
                registrationIsPending: action.payload
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registrationIsPending: false,
                registerUser: action.payload.registerUser.registerUser.data
            };
        default:
            return state;
    }
};