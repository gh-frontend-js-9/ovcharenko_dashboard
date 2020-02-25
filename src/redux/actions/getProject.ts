import {Action, ActionCreator, Dispatch} from "redux";
import Project from "../../models/Project";
import API from "../../service/apiService";

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const getProjectPending: ActionCreator<Action> = () => {
    return {
        type: GET_PROJECT_PENDING,
        payload: true
    };
};

export const getProjectSuccess: ActionCreator<Action> = () => {
    return {
        type: GET_PROJECT_SUCCESS,
        payload: false
    };
};

export const getProjectError: ActionCreator<Action> = () => {
    return {
        type: GET_PROJECT_ERROR,
        payload: false,
    };
};

export const getProject: (project: Project)
    => (dispatch: Dispatch)
    => void = (project: Project) => {
    return (dispatch: Dispatch) => {
        dispatch(getProjectPending());
        API.getProject()
            .then(success => {
                console.log(success);
                dispatch(getProjectSuccess(success));
            })
            .catch(err => {
                dispatch(getProjectError(err));
            });
    };
};