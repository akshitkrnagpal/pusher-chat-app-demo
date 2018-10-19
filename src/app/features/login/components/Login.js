// @flow

import Pusher from 'pusher-js';
import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Grid, Form, Button } from 'semantic-ui-react';

import { loginUser } from '../actions';
import { connectPusher } from '../../pusher';
import { APP_KEY, APP_CLUSTER } from '../../../../config';

Pusher.logToConsole = process.env.NODE_ENV === 'development';

type Props = {
    // Redux dispatch
    dispatch: Dispatch<*>;
};

type State = {
    // username
    username: string;
}

class Login extends Component<Props, State> {
    constructor() {
        super()

        this.state = {
            username: ''
        }

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        return (
            <Grid textAlign = 'center' verticalAlign = 'middle' style = {{ height: '100%' }}>
                <Grid.Column style = {{ maxWidth: 450 }} >
                    <Form size = 'large'>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='Enter Username'
                            onChange = { this._onChange }
                        />
                        <Button
                            color='teal'
                            fluid
                            size='large'
                            onClick = { this._onSubmit }>
                            Login
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

    _onChange: (*) => void;

    _onChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    _onSubmit: (*) => void;

    _onSubmit() {
        const { username } = this.state;
        if(!username || 0 === username.length) {
            return;
        }

        const pusher = new Pusher(APP_KEY, {
            cluster: APP_CLUSTER,
            auth: {
                params: {
                    username
                }
            }
        });

        pusher.connection.bind('connected', (data) => {
            this.props.dispatch(loginUser(data.socket_id))
        });
        pusher.connection.bind('error', console.log);

        this.props.dispatch(connectPusher(pusher));
    }
}

export default connect()(Login);
