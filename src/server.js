const express =  require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;

const Pusher = require('pusher');

const { APP_ID, APP_KEY, APP_SECRET, APP_CLUSTER } =  require('./config');

const pusher = new Pusher({
    appId: APP_ID,
    key: APP_KEY,
    secret: APP_SECRET,
    cluster: APP_CLUSTER
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

const AVATAR_NAMES = ['christian', 'elliot', 'jenny', 'joe', 'matt', 'steve', 'stevie'];

function getAvatarURL(name) {
    return `/avatars/${name}.jpg`;
}

app.post('/pusher/auth', function(req, res) {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const username = req.body.username;

    const presenceData = {
        user_id:  socketId,
        user_info: {
            avatarURL: getAvatarURL(AVATAR_NAMES[Math.floor(Math.random()*AVATAR_NAMES.length)]),
            username
        }
    };

    const auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

app.post('/message', (req, res) => {
    const newMessage = {
        user_id: req.body.user_id,
        message: req.body.message
    };
    pusher.trigger('main', 'new-message', newMessage);
    res.sendStatus(200);
} );

app.listen(port);
