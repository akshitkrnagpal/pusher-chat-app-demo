import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Messages, SendMessage } from '../../messages';
import { Users } from '../../users';

class Main extends Component {
    render() {
        return (
            <Grid columns = 'equal' padded>
                <Grid.Column style = {{ maxWidth: 400, padding: 0 }}>
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
