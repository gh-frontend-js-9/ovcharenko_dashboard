import {Action, ActionCreator, Dispatch} from "redux";
import Project from "../../models/Project";
import API from "../../service/apiService";

export const PROJECT_PENDING = 'PROJECT_PENDING';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_ERROR = 'PROJECT_ERROR';

export const setProjectPending: ActionCreator<Action> = () => {
    return {
        type: PROJECT_PENDING,
        payload: true
    };
};

export const setProjectSuccess: ActionCreator<Action> = () => {
    return {
        type: PROJECT_SUCCESS,
        payload: false
    };
};

export const setProjectError: ActionCreator<Action> = () => {
    return {
        type: PROJECT_ERROR,
        payload: false,
    };
};

export const postProject: (project: Project)
    => (dispatch: Dispatch)
    => void = (project: Project) => {
    return (dispatch: Dispatch) => {
        dispatch(setProjectPending());
        API.postProject(project)
            .then(success => {
                console.log(success);
                dispatch(setProjectSuccess(success));
            })
            .catch(err => {
                dispatch(setProjectError(err));
            });
    };
};