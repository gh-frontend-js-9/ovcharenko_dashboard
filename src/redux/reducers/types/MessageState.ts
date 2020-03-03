import {Message} from "../../../models/Message";

export interface MessageState {
    getMessageIsPending: boolean,
    allMessage: Message[],
    threadId: string
}