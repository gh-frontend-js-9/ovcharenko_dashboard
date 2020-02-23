import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS
} from "../actions/login";

import { LoginState } from "./types/LoginState";
import { Reducer } from "redux";

const initialState: LoginState = {
    isPending: false,
    user: {},
};

export const loginReducer: Reducer<LoginState> = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        case LOGIN_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        default:
            return state;
    }
};