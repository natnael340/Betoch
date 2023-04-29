import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/pages/Home';
import ResidenceDetail from '../components/pages/ResidenceDetail';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ResidenceDetail: {
    id: number;
  };
};
const HomeStackNav = createNativeStackNavigator<HomeStackParamList>();
const HomeStack = () => {
  return (
    <HomeStackNav.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNav.Screen name="HomeScreen" component={Home} />
      <HomeStackNav.Screen name="ResidenceDetail" component={ResidenceDetail} />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
