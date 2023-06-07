import toast from 'react-hot-toast'

// ***  validate Login Page username *** //
export async function usernameValidate(values) {
    const error = usernameVarify({}, values);

    return error
}

// ***  validate Login Page password *** //
export async function passwordValidate(values) {
    const error = passwordVarify({}, values);

    return error
}

// ***  validate reset password *** //
export async function resetPasswordValidate(values) {
    const error = passwordVarify({}, values);

    if (values.password !== values.confirm_pwd) {
        error.exist = toast.error("Password does not match...!")
    }

    return error
}

// ***  validate register form *** //
export async function registerValidate(values) {
    const error =usernameVarify({}, values)
     passwordVarify({}, values)
     emailVarify({}, values);

    return error
}
// ***  validate profile page *** //
export async function profileValidate(values) {
    const error = emailVarify({}, values);

    return error
}

// ***  validate password *** //
function passwordVarify(error = {}, values) {

    const specialCharacters = "[`~!@#$%^&*()\\]\\[+={}/|:;\"'<>,.?-_]"

    if (!values.password) {
        error.password = toast.error('Password Required...!')
    } else if (values.password.includes(" ")) {
        error.password = toast.error('Wrong Password...!')
    } else if (values.password.length < 4) {
        error.password = toast.error('Password must be at least 4 characters...!')
    } else if (!specialCharacters.test(values.password)) {
        error.password = toast.error('Password must contain at least one special character...!')
    }

    return error;
}



// ***  validate username *** //
function usernameVarify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required...!')
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}


// *** validate email *** //
function emailVarify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        error.email = toast.estur("Invalid email address...!")
}
