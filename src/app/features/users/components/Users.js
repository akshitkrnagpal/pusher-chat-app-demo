// @flow

import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { Button, Image, Segment, Header } from 'semantic-ui-react';

import { AutoSizer, List } from 'react-virtualized'

import { logoutUser } from '../../login';
import { disconnectPusher } from '../../pusher';
import { addUser, removeUser } from '../actions'
import type { User } from '../types';

type Props = {
    // Redux dispatch
    dispatch: Dispatch<*>;

    // Pusher
    _pusher: any;

    // All Users
    _users: Array<User>;
};

type State = {
    // My User
    me: User;
};

class Users extends Component<Props, State> {

    _presenceChannel;

    _users;

    constructor(props: Props) {
        super(props);

        this.state = {
            me: {
                id: undefined,
                info: {
                    avatarURL: undefined,
                    username: undefined
                }
            }
        }

        this._userRenderer = this._userRenderer.bind(this);
    }

    componentDidMount() {
        this._presenceChannel = this.props._pusher.subscribe('presence-main');
        this._presenceChannel.bind('pusher:subscription_succeeded', (data) => {
            const id_array = Object.keys(data.members);
            const members = id_array.map( (id) => { return { id, info: data.members[id] }} );
            this.props.dispatch(addUser(members));
            this.setState({
                me: this._presenceChannel.members.me
            });
        });
        this._presenceChannel.bind('pusher:member_added', (member) => {
            this.props.dispatch(addUser(member));
        });
        this._presenceChannel.bind('pusher:member_removed', (member) => {
            this.props.dispatch(removeUser(member));
        });
    }

    componentWillUnmount() {
        this.props.dispatch(disconnectPusher());
    }

    render() {
        const { me } = this.state;
        return (
            <Segment.Group>
                <Segment key = { me.id } clearing>
                    <Header as='h2'>
                        <Image avatar src = { me.info && me.info.avatarURL } verticalAlign='middle' />
                        <Header.Content>{ me.info && me.info.username }</Header.Content>
                        <Button
                            color = 'teal'
                            floated = 'right'
                            onClick = { () => {
                                this.props.dispatch(logoutUser());
                                this.props.dispatch(removeUser(me));
                            }}>
                            Logout
                        </Button>
                    </Header>
                </Segment>
                { this._renderOthers() }
            </Segment.Group>
        );
    }

    _renderOthers() {
        this._users = this.props._users.filter(
            (user) => this.state.me.id !== user.id
        );
        return (
            <AutoSizer>
            {
                (props) => (
                    <List
                        autoHeight
                        width = { props.width - 2 }
                        height = { props.height }
                        rowCount = { this._users.length }
                        rowHeight = { 70 }
                        rowRenderer = { this._userRenderer }
                    />
                )
            }
            </AutoSizer>
        );
    }

    _userRenderer: (*) => void;

    _userRenderer(props) {
        const user = this._users[props.index]
        return (
            <Segment key = { user.id } style = {{ ...props.style, margin: 0 }}>
                <Header as='h3'>
                    <Image circular src = { user.info && user.info.avatarURL } verticalAlign='middle' />
                    <Header.Content>{ user.info && user.info.username }</Header.Content>
                </Header>
            </Segment>
        )
    }
}

function _mapStateToProps(state) {
    return {
        _users: state.users.users,
        _pusher: state.pusher.pusher
    }
}

export default connect(_mapStateToProps)(Users);
