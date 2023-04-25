import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardOneScreen from '../components/pages/OnBoardOneScreen';
import OnBoardTwoScreen from '../components/pages/OnBoardTwoScreen';
import OnBoardThreeScreen from '../components/pages/OnBoardThreeScreen';
import Signup from '../components/pages/Signup';
import Login from '../components/pages/Login';
export type RootStackParamList = {
  OnboardOne: undefined;
  OnboardTwo: undefined;
  OnboardThree: undefined;
  Signup: undefined;
  Login: undefined;
};
const Stack = () => {
  const StackNav = createNativeStackNavigator<RootStackParamList>();
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNav.Group
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <StackNav.Screen name="OnboardOne" component={OnBoardOneScreen} />
        <StackNav.Screen name="OnboardTwo" component={OnBoardTwoScreen} />
        <StackNav.Screen name="OnboardThree" component={OnBoardThreeScreen} />
      </StackNav.Group>
      <StackNav.Group>
        <StackNav.Screen name="Signup" component={Signup} />
        <StackNav.Screen name="Login" component={Login} />
      </StackNav.Group>
    </StackNav.Navigator>
  );
};

export default Stack;
