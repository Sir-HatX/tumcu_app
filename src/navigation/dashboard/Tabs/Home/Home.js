import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions, Button,ImageBackground ,FlatList,List} from 'react-native';
import Card from './../../../../componets/feed/card';

let devWidth = Dimensions.get('window').width;


export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      page:0,
      data:[],
      isLoading:false
    }
  }
 
  
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    const { page } = this.state;
    const url = `http://mreal.herokuapp.com/property`;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          refreshing: false,
          data:responseJson.available ,
        });
      })
      .catch(error => {
        this.setState({ isLoading: false, refreshing: false });
        console.error(error);
      });
  };

  render() {
    return (
      
      <FlatList
        style={{ Direction: 'row',margin:5,backgroundColor:'lightgrey' }}
        data={this.state.data}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
         <View style={{height:devWidth/1.6,width:devWidth-30,margin:10,backgroundColor:'white',borderRadius:10}}>
            <Text style={{margin:5,fontStyle:'italic',fontWeight:'bold'}}>{item.name}</Text>
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                height: 200,
                width: undefined,
                alignSelf: 'stretch',
                borderColor: '#7F8C8D',
                overlayColor: '#E6B0AAk',
                alignItems: 'center',
                margin:2
              }}></ImageBackground>
         </View>      
        )}
        
      />
    );
  }
}
