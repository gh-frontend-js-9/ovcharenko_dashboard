import {User} from "../../../models/User";



export interface IRegisterSuccess {
    type: string;
    payload: {
        registerUser: User
    };
}



export type RegisterActions =IRegisterSuccess
