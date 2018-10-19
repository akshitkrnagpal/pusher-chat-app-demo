// @flow

import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

type Props = {
    // Redux Dispatch
    dispatch: Dispatch<*>;

    // User ID
    _id: string;
};

type State = {
    // Message
    message: string;
};

class SendMessage extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            message: ''
        }

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this._clearInput = this._clearInput.bind(this);
    }
    render() {
        return (
            <Form style = {{ height: '5em', padding: '2em 0' }}>
                <Form.Input
                    fluid
                    placeholder = 'Enter Message'
                    action = {
                        <Button onClick = { this._onSubmit } color = 'teal' icon = 'chevron right'/>
                    }
                    value = { this.state.message }
                    onChange = { this._onChange }
                />
            </Form>
        );
    }

    _onChange: (*) => void;

    _onChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    _onSubmit: (*) => void;

    _onSubmit() {
        const { message } = this.state;
        if(!message || 0 === message.length) {
            return;
        }

        axios.post('/message', {
            user_id: this.props._id,
            message: this.state.message
        }).then( this._clearInput ).catch( function(error) {
            console.log(error)
        });
    }

    _clearInput: (*) => void;

    _clearInput() {
        this.setState({
            message: ''
        });
    }
}

function _mapStateToProps(state) {
    return {
        _id: state.login.id
    }
}

export default connect(_mapStateToProps)(SendMessage);
