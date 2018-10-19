// @flow

import { ADD_USER, REMOVE_USER } from './actionTypes';
import type { User } from './types';

export function addUser(users: User | Array<User>) {
    return {
        type: ADD_USER,
        users
    }
}

export function removeUser(user: User) {
    return {
        type: REMOVE_USER,
        user
    }
}
