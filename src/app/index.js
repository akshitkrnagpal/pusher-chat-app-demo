// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './index.css';

import { App } from './features/app';
import { store } from './features/redux';

type Props = {};

type State = {};

class Root extends Component<Props, State> {
    render() {
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        );
    }
}

export default Root;
