import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SendMessage extends Component {
    render() {
        return (
            <Input fluid placeholder = 'Enter Message' action = 'Send' />
        );
    }
}

export default SendMessage;
