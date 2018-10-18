import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import UserList from './UserList';
import Messages from './Messages';
import SendMessage from './SendMessage';

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
