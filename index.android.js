/**
 * xiaowei  2017-3-17 15:04:27
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './js/reducers';
import App from './js/app';
import{
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

class Smartcomp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('hosmap', () => Smartcomp);