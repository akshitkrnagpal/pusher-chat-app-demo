import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react';

import pusher from '../../../pusher';
import { addUser, removeUser } from '../actions'

class Users extends Component {

    componentDidMount() {
        var presenceChannel = pusher.subscribe('presence-main');
        presenceChannel.bind('pusher:subscription_succeeded', (data) => {
            const id_array = Object.keys(data.members);
            const members = id_array.map( (id) => { return { id, info: data.members[id] }} );
            this.props.dispatch(addUser(members));
        });
        presenceChannel.bind('pusher:member_added', (member) => {
            this.props.dispatch(addUser(member));
        });
        presenceChannel.bind('pusher:member_removed', (member) => {
            this.props.dispatch(removeUser(member));
        });
    }

    render() {
        const users = this.props._users;
        console.log(users);
        return (
            <div>
                { users.map(this._renderUser) }
            </div>
        );
    }

    _renderUser(user) {
        return (
            <div key = { user.id } >
                <Image verticalAlign='middle' />
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
