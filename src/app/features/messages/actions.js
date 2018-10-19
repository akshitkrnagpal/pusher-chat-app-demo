// @flow

import { ADD_MESSAGE } from './actionTypes';
import type { Message } from './types';

export function addMessage(data: Message) {
    return {
        type: ADD_MESSAGE,
        data
    }
}
