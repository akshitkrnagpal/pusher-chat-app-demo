import { ADD_MESSAGE } from './actionTypes';

export function addMessage(data) {
    return {
        type: ADD_MESSAGE,
        data
    }
}
