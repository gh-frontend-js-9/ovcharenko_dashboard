import {User} from "../../../models/User";

export interface UsersState {
    getUsersIsPending: boolean,
    user: User[]
}