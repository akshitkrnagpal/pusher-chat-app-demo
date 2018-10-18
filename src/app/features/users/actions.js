import { ADD_USER, REMOVE_USER } from './actionTypes';

export function addUser(users) {
    return {
        type: ADD_USER,
        users
    }
}

export function removeUser(user) {
    return {
        type: REMOVE_USER,
        user
    }
}
