import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Messages extends Component {
    render() {
        return (
            <div>
                <Segment vertical> First Message </Segment>
                <Segment vertical> Second Message </Segment>
                <Segment vertical> Third Message </Segment>
            </div>
        );
    }
}

export default Messages;
