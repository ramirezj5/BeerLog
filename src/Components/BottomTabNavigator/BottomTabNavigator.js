import React from 'react';
import Nearby from '../../Pages/Nearby/Nearby';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../../Pages/Feed/Feed';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from '../../Pages/Profile/Profile';
import Wishlist from '../../Pages/Wishlist/Wishlist';
import Post from '../../Pages/Post/Post';

export default function BottomTabNavigator() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = focused ? 'home' : 'home-outline';
        }
        else if (route.name === 'Nearby') {
          iconName = focused ? 'search' : 'search-outline';
        } 
        else if (route.name === 'Post') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }
        else if (route.name === 'Wishlist') {
          iconName = focused ? 'heart' : 'heart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Nearby" component={Nearby} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
