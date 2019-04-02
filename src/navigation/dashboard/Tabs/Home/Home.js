import React, { Component } from "react";
import configs from "../../../../Config/configs";
import { FlatList,
  ActivityIndicator,View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    const url = `http://mtumcu.herokuapp.com/api/p/e`
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data:responseJson.events,
      });
      
    })
    .catch(error => {
      this.setState({ isLoading: false, refreshing: false });
    });
  };

  render() {
    return (
        <View style={styles.bodyContainer}>
      <FlatList
          style={{ Direction: 'row' }}
          data={this.state.data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
       
                <View style={styles.card}>
                  <View style={styles.title}>
                    <Text style={{ fontFamily: 'vincHand' }}>{item.title}</Text>
                  </View>
                  <View style={styles.image}>
                    <ImageBackground
              source={{ uri: item.url[0].url }}
              style={{
                height: width/2,
                width: undefined,
                alignSelf: 'stretch',
                borderColor: '#7F8C8D',
                overlayColor: '#E6B0AAk',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              />
            </ImageBackground>
                  </View>
                  <View style={styles.footer}>
                    <View style={styles.des}>

                      <Text>{item.venue}</Text>
                    </View>
                    <View style={styles.time}>
                      
                    </View>
                  </View>
                </View>
            
          )}
          // refreshing={this.state.refreshing}
          // onRefresh={this.handleRefresh}
          // onEndReached={this.handleLoadMore}
          onEndThreshold={100}
        />
     </View>
    );
    
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  bodyContainer: {
    flex: 1,
    margin:5,
    backgroundColor: '#d1f4ff'
  },
  card: {
    margin: 5,
    height: width * 0.75,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },
  title: {
    flex: 1,
    
    justifyContent: 'space-around',
    padding: 5
  },
  image: {
    minHeight: width / 2,
    backgroundColor: '#8a979b',
    margin:3
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    
  },
  des: {
    flex: 1,
    justifyContent: 'space-around',
    
    padding: 5
  },
  time: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 5
  }
});
