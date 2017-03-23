/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import  App from './bak-App'
let  _navigator;

const initialRoute = {
    title: 'wwtest',
    name: 'list',
};

function RouteMapper(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'list') {
        return (
            <View style={{flex: 1}}>
              <Ionicons.ToolbarAndroid
                  style={styles.toolbar}
                  titleColor="white"
                  title={route.title} />
              <App></App>
            </View>
        );
    } else if (route.name === 'iconSet') {
        return (
            <View style={{flex: 1}}>
              <Ionicons.ToolbarAndroid
                  actions={[]}
                  navIconName="md-arrow-back"
                  onIconClicked={navigationOperations.pop}
                  style={styles.toolbar}
                  titleColor="white"
                  title={route.title} />
              <IconList
                  style={{flex: 1}}
                  navigator={navigationOperations}
                  iconSet={route.iconSet}
              />
            </View>
        );
    }
}

export default class wwtest extends Component {


    render() {

        return (
            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={RouteMapper}
            />
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56,
    },
});

AppRegistry.registerComponent('hosmap', () => hosmap);
