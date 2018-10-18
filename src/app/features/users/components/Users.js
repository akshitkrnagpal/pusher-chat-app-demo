import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Divider, Image } from 'semantic-ui-react';

import pusher from '../../../pusher';
import { addUser, removeUser } from '../actions'

class Users extends Component {

    _presenceChannel;

    constructor() {
        super();

        this.state = {
            me: {
                id: null,
                avatar: null
            }
        }

        this._renderUser = this._renderUser.bind(this);
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
            <div>
                <div key = { me.id } >
                    <Image src = { me.info && me.info.avatarURL } size = 'tiny' verticalAlign='middle' />
                    <span>{ me.id }</span>
                </div>
                <Divider />
                { this._renderOthers() }
            </div>
        );
    }

    _renderOthers() {
        const users = this.props._users.filter(
            (user) => this._presenceChannel.members.me.id !== user.id
        );
        return (
            <div>
                { users.map(this._renderUser) }
            </div>
        );
    }

    _renderUser(user) {
        return (
            <div key = { user.id } >
                <Image src = { user.info && user.info.avatarURL } size = 'tiny' verticalAlign='middle' />
                <span>{ user.id }</span>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    return {
        _users: state.users.users
    }
}

export default connect(_mapStateToProps)(Users);
