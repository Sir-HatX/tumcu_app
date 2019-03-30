import React from 'react';
import {View, Text } from 'react-native';

const Card = (item) => {
    return (
     <View style={{height:devWidth/1.6,width:devWidth-30,margin:10,backgroundColor:'white',borderRadius:10}}>
      <Text style={{margin:5,fontStyle:'italic',fontWeight:'bold'}}>{item.name}</Text>
      <ImageBackground
        source={{ uri: item.item.image }}
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
    )
  }


  export default Card;