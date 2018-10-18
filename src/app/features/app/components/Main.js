import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Messages, SendMessage } from '../../messages';

import UserList from './UserList';

class Main extends Component {
    render() {
        return (
            <Grid columns = {2} divided>
                <Grid.Column>
                    <UserList />
                </Grid.Column>
                <Grid.Column>
                    <Messages />
                    <SendMessage />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Main;
