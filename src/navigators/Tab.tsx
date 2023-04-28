import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/pages/Home';
import Saved from '../components/pages/Saved';

export type TabNavigatorParamList = {
  Home: undefined;
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
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Saved" component={Saved} />
    </TabNav.Navigator>
  );
};

export default Tab;
