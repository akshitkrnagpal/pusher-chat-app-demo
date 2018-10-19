// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Login } from '../../login';
import Main from './Main';

type Props = {
    // Is user logged in.
    _loggedIn: boolean;
};

type State = {};

class App extends Component<Props, State> {
    render() {
        if (this.props._loggedIn) {
            return <Main />;
        } else {
            return <Login />;
        }
    }
}

function _mapStateToProps(state: Object) {
    return {
        _loggedIn: state.login.id !== undefined
    }
}

export default connect(_mapStateToProps)(App);
