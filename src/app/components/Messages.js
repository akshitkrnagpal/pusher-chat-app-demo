import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

import { WindowScroller, List } from 'react-virtualized'

const data = [
    {
        'username': 'akshitkrnagpal',
        'message': 'Hi. My name is Akshit'
    },
    {
        'username': 'akshit1708',
        'message': 'Hi Akshit. My name is also Akshit'
    }
];

class Messages extends Component {
    constructor() {
        super();

        this._messageRenderer = this._messageRenderer.bind(this);
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
                            rowCount = { data.length }
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
        const { username, message } = data[props.index];

        return (
            <Comment key = { props.key } style = { props.style }>
                <Comment.Content>
                    <Comment.Author> { username } </Comment.Author>
                    <Comment.Text> { message } </Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }
}

export default Messages;
