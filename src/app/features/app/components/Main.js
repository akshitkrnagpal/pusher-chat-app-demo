import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Messages, SendMessage } from '../../messages';
import { Users } from '../../users';

class Main extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row divided columns = 'equal'>
                    <Grid.Column width = { 4 }>
                        <Users />
                    </Grid.Column>
                    <Grid.Column>
                        <Messages />
                        <SendMessage />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Main;
