import { CONNECT_PUSHER, DISCONNECT_PUSHER } from './actionTypes';

export function connectPusher(pusher) {
    return {
        type: CONNECT_PUSHER,
        pusher
    }
}

export function disconnectPusher() {
    return {
        type: DISCONNECT_PUSHER
    }
}
