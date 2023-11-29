import { SET_USER_TOKEN_DATA_MUTATION } from "../../storeconstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
        state.email = payload.email;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.userId = payload.userId;   
    }
};