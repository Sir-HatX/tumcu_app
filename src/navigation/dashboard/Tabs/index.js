import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Event from 'react-native-vector-icons/MaterialIcons';

import Home from './Home/HomeStack';
import Gallery from './Gallery/Gallery';
//import Events from './Events/Events';
import Learn from './Learn/Learn';

export default createMaterialBottomTabNavigator({
    HOME: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (
                <Icon name="home" size={25} style={{color:tintColor}} />
                )
        }
    },
    GALLERY: {
        screen: Gallery,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (
                <Icon name="picture-o" size={22} style={{color:tintColor}} />
                )

        }
    },
    // EVENTS: {
    //     screen: Events,
    //     navigationOptions: {
    //         tabBarIcon: ({ tintColor }) =>
    //             (
    //             <Event name="event" size={25} style={{color:tintColor}} />
    //             )

    //     }
    // },
    LEARN: {
        screen: Learn,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (
                <Icon name="book" size={22} style={{color:tintColor}} />
                )

        }
    }
},
    {
        initialRouteName: 'HOME',
        activeColor: 'green',
        inactiveColor: 'grey',
        barStyle: { backgroundColor: 'white' },
        shifting: true,
        activeTintColor: 'red',
        swipeEnabled: true,
        order:['HOME','GALLERY','LEARN' ]
    }
);