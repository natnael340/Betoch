/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Stack from './src/navigators/Stack';
import {primary} from './src/assets/colors';

function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack />
      <StatusBar backgroundColor={primary} />
    </NavigationContainer>
  );
}

export default App;
