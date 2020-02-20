import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About GameInspect'/>,
      }
    }  
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOpitions: {
    headerTintColor: '#444', 
    headerStyle: { background: '#eee', height: 60 }
  }
});

export default AboutStack;