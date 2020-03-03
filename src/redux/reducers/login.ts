import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS
} from "../actions/login";

import { LoginState } from "./types/LoginState";
import { Reducer } from "redux";

const initialState: LoginState = {
    isPending: false,
    user: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU',
        _id: "5e20481cec581500225c4de7"
    },
};

export const loginReducer: Reducer<LoginState> = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isPending: false,
                user: action.payload.user
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