export interface RegisterState {
    registrationIsPending: boolean;
    registerUser: {
        _id?: string,
        name?: string,
        email?: string
    }
}
