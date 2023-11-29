import Validations from './Validations';

export default class RegisterValidations {
    constructor (email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    checkValidation() {
        let errors = [];

        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid email'
        }
        
        //password validation
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'Password should be at least 6 characters'
        }

        if (!Validations.checkFirstName(this.firstName)) {
            errors['firstName'] = 'First Name is required'
        }

        if (!Validations.checkLastName(this.lastName)) {
            errors['lastName'] = 'Last Name is required'
        }

        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch(errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Invalid password';
            default:
                return 'Unexpected error occurred. Please try again.'
        }
    }
};