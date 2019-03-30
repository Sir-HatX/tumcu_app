import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import Drawer from './src/navigation/dashboard/Drawer/index'


export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
    
  }
}

const AppContainer = createAppContainer(Drawer);