import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export function loginUser(username) {
    return {
        type: LOGIN_USER,
        username
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}
