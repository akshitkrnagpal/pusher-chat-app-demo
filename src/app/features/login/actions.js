// @flow

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export function loginUser(id: string) {
    return {
        type: LOGIN_USER,
        id
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}
