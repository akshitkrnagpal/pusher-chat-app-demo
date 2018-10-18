import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Login } from '../../login';
import Main from './Main';

class App extends Component {
    render() {
        if (this.props._loggedIn) {
            return <Main />;
        } else {
            return <Login />;
        }
    }
}

function _mapStateToProps(state) {
    return {
        _loggedIn: state.login.username !== undefined
    }
}

export default connect(_mapStateToProps)(App);
