import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Users extends Component {
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
