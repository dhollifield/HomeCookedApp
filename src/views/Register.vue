<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
        <div>
            <div>
            <h3>Register</h3>
            <hr />
            </div>
            <div class="alert alert-danger" v-if="error">
                {{ error }}
            </div>
            <form @submit.prevent="onRegister()">
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" autocomplete="on" v-model.trim="email"/>
                <div class="error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" autocomplete="on" v-model.trim="password"/>
                <div class="error" v-if="errors.password">{{ errors.password }}</div>
            </div>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" autocomplete="on" v-model.trim="firstName"/>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" autocomplete="on" v-model.trim="lastName"/>
            </div>

            <div class="my-3">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import RegisterValidations from '../services/RegisterValidations';
import { mapActions, mapMutations } from 'vuex';
import { LOADING_SPINNER_SHOW_MUTATION, REGISTER_ACTION } from '../store/storeconstants';

export default {
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            errors: [],
            error: '',
        };
    },
    beforeRouteLeave() {
        console.log('route leaving');
        console.log(this.$store);
    },
    beforeRouteEnter(_, _1, next) {
        next((vm) => {
            console.log('route entering');
            console.log(vm.$store.state.auth);
        })
    },
    methods: {
        ...mapActions('auth', {
            register: REGISTER_ACTION
        }),

        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),

        async onRegister() {
            let validations = new RegisterValidations(
                this.email, 
                this.password,
                this.firstName,
                this.lastName,
            );

            this.errors = validations.checkValidation();
            if ('email' in this.errors || 'password' in this.errors || 'firstName' in this.errors || 'lastName' in this.errors) {
                return false;
            }

            //make spinner true
            this.showLoading(true);

            //register registration
            await this.register({ 
                email: this.email, 
                password: this.password, 
                firstName: this.firstName, 
                lastName: this.lastName 
            }).catch(error => {
                this.error = error;
                this.showLoading(false);
            });
            this.showLoading(false);
            //make spinner false

        },
    },
};
</script>