import React, { Component } from "react";
import configs from "../../../../Config/configs";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const {width, height}= Dimensions.get('window')

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../../Assets/tumcu_logo.png")}
            style={{ height: 100, width: 100,margin:10 }}
          />
        </View>

        <View style={styles.bodyContainer} >
        <View style={styles.header}>
          
        </View>
        <View style={styles.header}>
          
          </View>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: configs.colors.main_bright
  },
  header: {
    flex: 1,
    backgroundColor:'lightgray',
    margin:10
  },
  bodyContainer: {
    flex: 4,
    backgroundColor: "gray"
  }
});
