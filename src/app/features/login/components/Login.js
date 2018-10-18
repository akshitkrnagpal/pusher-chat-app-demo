import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button } from 'semantic-ui-react';

import { loginUser } from '../actions';

class Login extends Component {
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
            <Grid textAlign = 'center'>
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

    _onChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    _onSubmit() {
        const { username } = this.state;
        if(!username || 0 === username.length) {
            return;
        }
        this.props.dispatch(loginUser(username));
    }
}

export default connect()(Login);
