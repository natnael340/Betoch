/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  React.useEffect(() => setTimeout(() => SplashScreen.hide(), 3000), []);
  return (
    <NavigationContainer>
      <StatusBar />
    </NavigationContainer>
  );
}

export default App;
