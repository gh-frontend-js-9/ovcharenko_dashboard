import {User} from "./User";

export interface Message {
    _id: string,
    user: User
    thread: string,
    body: string
    created_at: string
}