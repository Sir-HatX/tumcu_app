import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Events Screen</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
