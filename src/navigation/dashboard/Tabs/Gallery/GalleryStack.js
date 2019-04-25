import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Main  from "./Gallery";
import Details from './More';
import configs from '../../../../Config/configs'

export default createStackNavigator({
    GALLERY: {
        screen: Main,
        navigationOptions: ({ navigation }) => ({
          title: 'GALLERY',
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: configs.colors.main_dark },
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="bars"
                style={{
                  color: 'white',
                  padding: 10,
                  marginLeft: 10,
                  fontSize: 30,
                }}
              />
            </TouchableOpacity>
          ),
        }),
      },
    More : Details,
});