import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {withNavigation} from 'react-navigation';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Screen</Text>
        <Button title='LogIn' onPress={()=> this.props.navigation.navigate('Drawer')}/>
        <Button title='SignUp' onPress={()=> this.props.navigation.navigate('Drawer')}/>
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
