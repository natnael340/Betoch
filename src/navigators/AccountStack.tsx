import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/pages/Profile';

export type AccountStackParamList = {
  ProfileScreen: undefined;
  Settings: undefined;
  AccountSetting: undefined;
};

const AccountStackNav = createNativeStackNavigator<AccountStackParamList>();
const AccountStack = () => {
  return (
    <AccountStackNav.Navigator>
      <AccountStackNav.Screen name="ProfileScreen" component={Profile} />
    </AccountStackNav.Navigator>
  );
};

export default AccountStack;
