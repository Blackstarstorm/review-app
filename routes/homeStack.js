import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';


const screens = {
  Home: {
    screen: Home,
    navigationOptions:({ navigation }) => { 
    return {
      headerTitle: () => <Header navigation={navigation} title='GameInspect'/>,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOpitions: {
    headerTintColor: '#444', 
    headerStyle: { background: '#eee', height: 60 }
  }
});

export default HomeStack;