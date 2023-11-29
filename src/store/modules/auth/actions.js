import RegisterValidations from '../../../services/RegisterValidations';
import { 
    LOGIN_ACTION, 
    REGISTER_ACTION, 
    SET_USER_TOKEN_DATA_MUTATION } from '../../storeconstants';
import axios from 'axios';

export default {
    async [LOGIN_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            firstName: payload.firstName,
            lastName: payload.lastName,
            userId: payload.userId,
        };
        let response = '';

        // context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {
        //     root: true
        // });

        try {
            response = await axios.get(`https://localhost:7026/api/User/{$id}`, postData);
        } catch(err) {
            // context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
            //     root: true
            // });
            let errorMessage = RegisterValidations.getErrorMessageFromCode(err.response.data.error.errors[0].message,
            );
            throw errorMessage;
        }

        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                userId: response.data.localId,
            }); 
        }
    },

    async [REGISTER_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            firstName: payload.firstName,
            lastName: payload.lastName
        };
        let response = '';

        // context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {
        //     root: true
        // });

        try {
            response = await axios.post(`https://localhost:7026/api/User`, postData);
        } catch(err) {
            // context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
            //     root: true
            // });
            let errorMessage = RegisterValidations.getErrorMessageFromCode(err.response.data.error.errors[0].message,
            );
            throw errorMessage;
        }

        // context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {
        //     root: true
        // });

        

        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                userId: response.data.localId,
            }); 
        }
    },
}