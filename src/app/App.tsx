import React from 'react';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import SplashScreen from 'react-native-splash-screen';
import { configureStore } from './redux/configureStore';
import { HomeScreen, SignInScreen, SignUpScreen } from '../screens';

// import { ScreenLoading } from '../components';
// import { Container, Header, Content, Form, Item, Input } from 'native-base';

const { store } = configureStore();

const Stack = createStackNavigator();
/* const commonScreens = {
  Help: HelpScreen,
}; */
const authScreens = {
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
};
const userScreens = {
  Home: HomeScreen,
};

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [loaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });

  React.useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 400);
    }
  }, [loaded]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          {Object.entries({
            // Use the screens normally
            // Use some screens conditionally based on some condition
            ...(isSignedIn ? userScreens : authScreens),
          }).map(([name, component], index) => (
            <Stack.Screen
              key={`$${name}-${index}`}
              name={name}
              component={component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
