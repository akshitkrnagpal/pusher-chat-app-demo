import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Messages, SendMessage } from '../../messages';
import { Users } from '../../users';

class Main extends Component {
    render() {
        return (
            <Grid columns = {2} divided>
                <Grid.Column>
                    <Users />
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
