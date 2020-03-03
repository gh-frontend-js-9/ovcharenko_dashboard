import {Message} from "../../../models/Message";

export interface SendMessageState {
    sendMessageIsPending: boolean,
    newMessage: Message[]
}