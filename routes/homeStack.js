import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameInspect',
      // headerStyle: { background: '#eee' }

    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      // headerStyle: { background: '#eee' }
      
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOpitions: {
    headerTintColor: '#444', 
    headerStyle: { background: '#eee', height: 60 }
  }
});

export default createAppContainer(HomeStack);