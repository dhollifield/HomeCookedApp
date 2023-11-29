export default class Validations {
    static checkEmail(email) {
        if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,
            )
        ) {
            return (true)
        }
        return false;
    }

    static minLength(password, minLength) {
        if (password.length < minLength) {
            return false;
        }
        return true;
    }

    static checkFirstName(firstName) {
        if (!firstName) {
            return false;
        }
        return true;
    }

    static checkLastName(lastName) {
        if (!lastName) {
            return false;
        }
        return true;
    }
}