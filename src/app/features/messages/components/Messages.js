import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

import { WindowScroller, List } from 'react-virtualized'

import pusher from '../../../pusher';

class Messages extends Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };

        this._messageRenderer = this._messageRenderer.bind(this);
        this._addMessage = this._addMessage.bind(this);

    }

    componentDidMount() {
        var messageChannel = pusher.subscribe('message');

        messageChannel.bind('new-message', this._addMessage);
    }

    render() {
        return (
            <Comment.Group>
                <WindowScroller>
                {
                    (props) => (
                        <List
                            autoHeight
                            width = { props.width }
                            height = { props.height }
                            rowCount = { this.state.messages.length }
                            rowHeight = { 70 }
                            rowRenderer = { this._messageRenderer }
                        />
                    )
                }
                </WindowScroller>
            </Comment.Group>
        );
    }

    _messageRenderer(props) {
        const { username, message } = this.state.messages[props.index];

        return (
            <Comment key = { props.key } style = { props.style }>
                <Comment.Content>
                    <Comment.Author> { username } </Comment.Author>
                    <Comment.Text> { message } </Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }

    _addMessage(data) {
        this.setState( (prevState) => {
            prevState.messages.push(data);
            return prevState;
        });
    }
}

export default Messages;
