import Pusher from 'pusher-js';

import { APP_KEY, APP_CLUSTER } from '../config';

Pusher.logToConsole = process.env.NODE_ENV === 'development';

var pusher = new Pusher(APP_KEY, {
    cluster: APP_CLUSTER
});

export default pusher;
