import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import auth from './src/navigation/switch/index';
import Drawer from './src/navigation/dashboard/Drawer/index'


export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
    
  }
}

const AppContainer = createAppContainer(auth);