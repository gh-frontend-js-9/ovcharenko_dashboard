import {
    USER_ERROR,
    USER_SUCCESS,
    USER_PENDING
} from "../actions/getUserProfile";

import {GetUserById} from "./types/GetUserById";
import {Reducer} from "redux";


const initialState: GetUserById = {
    isPending: false,
    user: []
};

export const getUserById: Reducer<GetUserById> = (state= initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        case USER_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case USER_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        default:
            return state;
    }
};

