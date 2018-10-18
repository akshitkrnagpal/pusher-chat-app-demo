import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment } from 'semantic-ui-react';

import { AutoSizer, List } from 'react-virtualized'

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
        var messageChannel = this.props._pusher.subscribe('main');

        messageChannel.bind('new-message', this._addMessage);
    }

    render() {
        return (
            <Comment.Group style = {{ height: 'calc(100% - 60px)', margin: 0 }}>
                <AutoSizer>
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
                </AutoSizer>
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

function _mapStateToProps(state) {
    return {
        _pusher: state.pusher.pusher
    }
}

export default connect(_mapStateToProps)(Messages);
