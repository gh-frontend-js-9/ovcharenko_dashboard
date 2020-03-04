import {
    USER_ERROR,
    USER_PENDING,
    USER_SUCCESS
} from "../actions/getAllUser";

import {Reducer} from "redux";
import {UsersState} from "./types/UsersState";

const initialState: UsersState = {
    getUsersIsPending: false,
    users: []
};

export const allUsers: Reducer<any, any> = (state= initialState, action) => {
    switch (action.type) {
        case USER_PENDING:
            return {
                ...state,
                getUsersIsPending: action.payload
            };
        case USER_ERROR:
            return {
                ...state,
                getUsersIsPending: action.payload
            };
        case USER_SUCCESS:
            return {
                ...state,
                getUsersIsPending: false,
                users: action.payload.users
            };
        default:
            return state;
    }
};