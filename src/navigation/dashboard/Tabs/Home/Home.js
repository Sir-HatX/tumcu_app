import React, { Component } from "react";
import configs from "../../../../Config/configs";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
  ImageBackground
} from "react-native";
import { hidden } from "ansi-colors";
const { width, height } = Dimensions.get("window");

class Home extends Component {
  static navigationOptions = {};
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    // const { page, seed } = this.state;
    const url = "https://mtumcu.herokuapp.com/api/p/c";
    this.setState({ loading: true });

    try {
      let result = await fetch(url);
      let res = await result.json();
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      this.setState({
        dataSource: res.collections,
        dataSource1: res.collections.url,
        error: res.error || null,
        loading: false,
        refreshing: false
      });
    } catch (err) {
      console.log(err);
    }
  };
  keyExtractor = (item, index) => {
    return index.toString();
  };

  _renderHBody = ({ item }) => (
    <View style={styles.Hscroll}>
      <ImageBackground
        source={{
          uri: item.url[0].url
        }}
        style={{
          height: 100,
          width: 100,
          margin: 10,
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          justifyContent: "space-around",
          borderRadius: 4,
          borderColor: "rgba(0, 0, 0, 0.1)"
        }}
        overflow={hidden}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>{item.title},</Text>
        <Text style={{ color: "white", fontWeight: "500" }}>{item.event}</Text>
      </ImageBackground>
    </View>
  );
  _renderBody = ({ item }) => (
    <View style={styles.Hscroll}>
      <Image
        source={{
          uri: item.url[0].url
        }}
        style={{ height: width / 2, width: width / 2 - 20, margin: 10 }}
      />
    </View>
  );

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.hscrollContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderHBody}
            keyExtractor={this.keyExtractor}
            horizontal={true}
          />
        </View>

        <View style={styles.bodyContainer}>
          <FlatList
            numColumns={2}
            data={this.state.dataSource}
            renderItem={this._renderBody}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  hscrollContainer: {
    flex: 1,
    backgroundColor: "white",
    margin: 10
  },
  Hscroll: {},
  bodyContainer: {
    flex: 4,
    backgroundColor: "gray",
    paddingTop: 20
  }
});
