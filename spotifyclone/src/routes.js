import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import Login from './pages/SignIn/Login';

import Dashboard from './pages/Main';

const SignUp = createStackNavigator(
  {
    SignIn,
    Login,
  },
  {
    headerMode: 'none',
  },
);

const Main = createStackNavigator({
  Dashboard,
});

export default isSigned =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignUp,
        Main,
      },
      {
        initialRouteName: isSigned ? 'Main' : 'SignUp',
      },
    ),
  );
