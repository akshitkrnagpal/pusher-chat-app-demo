import Pusher from 'pusher-js';

Pusher.logToConsole = true;

var pusher = new Pusher('6e9f03e08571f8ae78f2', {
    authEndpoint: 'http://localhost:3002/pusher/auth',
    authTransport: 'jsonp',
    cluster: 'ap2'
});

export default pusher;
