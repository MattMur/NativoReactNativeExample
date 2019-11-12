/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LandingPageScreen from './LandingPageScreen';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: App},
  LandingPage: {screen: LandingPageScreen},
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);

export default AppNavigation;
