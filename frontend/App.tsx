import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Create: CreateScreen,
  Login: LoginScreen,
  Register: RegisterScreen
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "MoviesGoer"
    }
  })

const AppContainer = createAppContainer(navigator);

const App: React.FC = () => {
  return <AppContainer />
}


export default App;
