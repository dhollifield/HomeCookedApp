<!-- <template>
    <div id="app">
      <div id="alert" v-if="alert">{{ alert }}</div>
      <form @submit.prevent="loginWithPassword">
        <label>
          Email
          <input type="text" v-model="email" />
        </label>
        <label>
          Password
          <input type="password" v-model="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  </template> -->

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Login {{ firstName }}</h3>
          <hr />
        </div>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        <form @submit.prevent="onLogin()">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" autocomplete="on" v-model.trim="email" />
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
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import RegisterValidations from '../services/RegisterValidations';
import { mapActions, mapMutations } from 'vuex';
import { 
  LOADING_SPINNER_SHOW_MUTATION, 
  LOGIN_ACTION } from '../store/storeconstants';
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
  methods: {
    ...mapActions('auth', {
      login: LOGIN_ACTION,
    }),

    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),

    async onLogin() {
      let validations = new RegisterValidations(
        this.email, 
        this.password,
        this.firstName,
        this.lastName,
      );

      this.errors = validations.checkValidation();
      if (this.errors.length) {
        return false;
      }
      this.error = '';

      this.showLoading(true);
      //Login check
      try {
        await  this.login({
          email: this.email, 
          password: this.password
        });
      } catch(e) {
        this.error = e;
        this.showLoading(false);
      }

      this.showLoading(false);
      this.$router.push('/meals');
    },
  },
};
</script>

<style scoped>
/* button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
} */
</style>