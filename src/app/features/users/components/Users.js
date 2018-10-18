import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import pusher from '../../../pusher';

class Users extends Component {

    componentDidMount() {
        var presenceChannel = pusher.subscribe('presence-main');
        presenceChannel.bind('pusher:subscription_succeeded', () => {
            console.log(presenceChannel.members)
        });
    }

    render() {
        return (
            <div>
                <Segment vertical> First User </Segment>
                <Segment vertical> Second User </Segment>
                <Segment vertical> Third User </Segment>
            </div>
        );
    }
}

export default Users;
