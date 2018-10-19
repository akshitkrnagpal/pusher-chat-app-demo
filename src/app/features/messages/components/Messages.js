// @flow

import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Comment } from 'semantic-ui-react';

import { AutoSizer, List } from 'react-virtualized';

import { addMessage } from '../actions';
import type { Message } from '../types';

import type { User } from '../../users';

type Props = {
    // Redux Dispatch
    dispatch: Dispatch<*>;

    // Messages
    _messages: Array<Message>;

    // Pusher
    _pusher: any;

    // Users
    _users: Array<User>;
};

type State = {};

class Messages extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this._messageRenderer = this._messageRenderer.bind(this);
        this._addMessage = this._addMessage.bind(this);

    }

    componentDidMount() {
        var messageChannel = this.props._pusher.subscribe('main');
        messageChannel.bind('new-message', this._addMessage);
    }

    render() {
        return (
            <Comment.Group style = {{ height: 'calc(100% - 5em)', margin: 0, overflow: 'hidden scroll', maxWidth: 'unset' }}>
                <AutoSizer>
                {
                    (props) => (
                        <List
                            autoHeight
                            width = { props.width }
                            height = { props.height }
                            rowCount = { this.props._messages.length }
                            rowHeight = { 70 }
                            rowRenderer = { this._messageRenderer }
                        />
                    )
                }
                </AutoSizer>
            </Comment.Group>
        );
    }

    _messageRenderer: (*) => void;

    _messageRenderer(props) {
        const { user_id, message } = this.props._messages[props.index];
        const user: User = this.props._users.find(user => user.id === user_id);
        const { username, avatarURL } = user && user.info;
        return (
            <Comment key = { props.key } style = { props.style }>
                <Comment.Avatar src = { avatarURL } />
                <Comment.Content>
                    <Comment.Author> { username } </Comment.Author>
                    <Comment.Text> { message } </Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }

    _addMessage: (*) => void;

    _addMessage(data) {
        this.props.dispatch(addMessage(data))
    }
}

function _mapStateToProps(state) {
    return {
        _users: state.users.users,
        _messages: state.messages.messages,
        _pusher: state.pusher.pusher
    }
}

export default connect(_mapStateToProps)(Messages);
