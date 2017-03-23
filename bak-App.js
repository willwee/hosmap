/**
 *  xiaowei 2017-3-17 15:06:14   hosmap
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';

import ActionBar from 'react-native-action-bar';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import Icon3 from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon3 name="rocket" size={30} color="#900" />)

import BottomToolbar from 'react-native-bottom-toolbar'

const myButton = (
    <Icon2.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook} >
      Login with Facebook
    </Icon2.Button>
);

const customTextButton = (
    <View style={{margin: 5}}>
    <Icon2.Button name="facebook" backgroundColor="#3b5998">
      <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
    </Icon2.Button>
    </View>
);


export default class App extends Component {
    constructor(props){
          super(props);

          this._onSearchButtonPress = this._onSearchButtonPress.bind(this);
          this._handleResults = this._handleResults.bind(this);
    }
  render() {
    return (
      <View style={styles.container}>
          <ActionBar
              containerStyle={styles.bar}
              title={'example'}
              rightText={'Hello'}
              leftIconName={'menu'}
              leftBadge={''}
              onLeftPress={() => console.log('Left!')}
              onTitlePress={() => console.log('Title!')}
              rightIcons={[
                        {
                            name: 'star',
                            badge: '1',
                            onPress: () => console.log('Right Star !'),
                        },
                        {
                            name: 'phone',
                            badge: '1',
                            onPress: () => console.log('Right Phone !'),
                            isBadgeLeft: true,
                        },
                        {
                            name: 'plus',
                            onPress: () => console.log('Right Plus !'),
                        },
                        {
                            name: 'flag',
                            badge: '1',
                            onPress: () => console.log('Right Flag !'),
                        },
                    ]}
          />

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text>Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum</Text>
          {myButton}
          {customTextButton}
          {myIcon}
          <BottomToolbar
              actions={
                [
                    // note the extra spaces needed for perfect alignment
                    {title: 'Edit  ', onPress: ()=> {},iconName: 'ios-done-all-outline', size: 37},
                    {title: 'Copy ULR', onPress: ()=>{},iconName: 'pencil', font: 'simple', size: 15},
                    {title: 'Delete', onPress: ()=>{},iconName: 'ios-download-outline'},
                ]
            }
          />
      </View>
    );
  }

    _onSearchButtonPress(){

    }

    _handleResults(results) {
        this.setState({ results });
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
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
});
