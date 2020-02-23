import {
    RESET_ERROR,
    RESET_PENDING,
    RESET_SUCCESS
} from "../actions/reset";
import {Reducer} from "redux";
import {ResetState} from "./types/ResetState";
import {RegisterActions } from "../actions/types/RegistrationAction";

const initialState: ResetState = {
    isPending: false
};

export const reset: Reducer<ResetState, RegisterActions> = (state= initialState, action) => {
    switch (action.type) {
        case RESET_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case RESET_ERROR:
            return {
                ...state,
                isPending: action.payload
            };
        case RESET_SUCCESS:
            return {
                ...state,
                isPending: action.payload
            };
        default:
            return state;
    }
};