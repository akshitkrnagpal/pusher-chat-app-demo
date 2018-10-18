import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Image, Step, Header } from 'semantic-ui-react';

import { AutoSizer, List } from 'react-virtualized'

import pusher from '../../../pusher';
import { logoutUser } from '../../login';
import { addUser, removeUser } from '../actions'

class Users extends Component {

    _presenceChannel;

    _users;

    constructor() {
        super();

        this.state = {
            me: {
                id: null,
                avatar: null
            }
        }

        this._userRenderer = this._userRenderer.bind(this);
    }

    componentDidMount() {
        this._presenceChannel = pusher.subscribe('presence-main');
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

    render() {
        const { me } = this.state;
        return (
            <Step.Group vertical>
                <Step key = { me.id } >
                    <Header as='h2'>
                        <Image avatar src = { me.info && me.info.avatarURL } verticalAlign='middle' />
                        <Header.Content>{ me.id }</Header.Content>
                        <Button
                            color='teal'
                            onClick = { () => this.props.dispatch(logoutUser()) }>
                            Logout
                        </Button>
                    </Header>
                </Step>
                { this._renderOthers() }
            </Step.Group>
        );
    }

    _renderOthers() {
        this._users = this.props._users.filter(
            (user) => this._presenceChannel.members.me.id !== user.id
        );
        return (
            <AutoSizer>
            {
                (props) => (
                    <List
                        autoHeight
                        width = { props.width }
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

    _userRenderer(props) {
        const user = this._users[props.index]
        return (
            <Step key = { user.id } >
                <Header as='h3'>
                    <Image circular src = { user.info && user.info.avatarURL } verticalAlign='middle' />
                    <Header.Content>{ user.id }</Header.Content>
                </Header>
            </Step>
        )
    }
}

function _mapStateToProps(state) {
    return {
        _users: state.users.users
    }
}

export default connect(_mapStateToProps)(Users);
