import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './index.css';

import { App } from './features/app';
import { store } from './features/redux';

class Root extends Component {
    render() {
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        );
    }
}

export default Root;
