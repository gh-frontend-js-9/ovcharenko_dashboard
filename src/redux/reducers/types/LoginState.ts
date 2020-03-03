import {User} from "../../../models/User";

export interface LoginState {
    isPending: boolean;
    user: User | {};

}