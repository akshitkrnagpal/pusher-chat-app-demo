import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class SendMessage extends Component {
    constructor() {
        super()

        this.state = {
            message: ''
        }

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this._clearInput = this._clearInput.bind(this);
    }
    render() {
        return (
            <Form>
                <Form.Input
                    fluid
                    placeholder = 'Enter Message'
                    action = {
                        <Button onClick = { this._onSubmit } value = 'Send' />
                    }
                    value = { this.state.message }
                    onChange = { this._onChange }
                />
            </Form>
        );
    }

    _onChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    _onSubmit() {
        const { message } = this.state;
        if(!message || 0 === message.length) {
            return;
        }

        axios.post('http://localhost:3002/message', {
            username: 'akshitkrnagpal',
            message: this.state.message
        }).then( this._clearInput ).catch( function(error) {
            console.log(error)
        });
    }

    _clearInput() {
        this.setState({
            message: ''
        });
    }
}

export default SendMessage;
