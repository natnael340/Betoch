import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Saved from '../components/pages/Saved';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeStack, {HomeStackParamList} from './HomeStack';
import MessageStack from './MessageStack';
import AccountStack from './AccountStack';

export type TabNavigatorParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Saved: undefined;
  Messages: undefined;
  Account: undefined;
};
const TabNav = createBottomTabNavigator<TabNavigatorParamList>();
const Tab = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabNav.Screen name="Home" component={HomeStack} />
      <TabNav.Screen name="Saved" component={Saved} />
      <TabNav.Screen name="Messages" component={MessageStack} />
      <TabNav.Screen name="Account" component={AccountStack} />
    </TabNav.Navigator>
  );
};

export default Tab;
