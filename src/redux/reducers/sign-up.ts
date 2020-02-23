import {
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../actions/sign-up";
import {Reducer} from "redux";
import {RegisterState} from "./types/RegistrationState";
import {RegisterActions } from "../actions/types/RegistrationAction";

const initialState: RegisterState = {
    registrationIsPending: false
};

export const signUp: Reducer<RegisterState, RegisterActions> = (state=initialState, action) => {
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
                registrationIsPending: action.payload
            };
        default:
            return state;
    }
};