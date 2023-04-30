import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../components/pages/Messages';

export type MessageStackParamList = {
  MessagesScreen: undefined;
  Message: {
    id: number;
  };
};
const MessageStackNav = createNativeStackNavigator<MessageStackParamList>();

const MessageStack = () => {
  return (
    <MessageStackNav.Navigator screenOptions={{headerShown: false}}>
      <MessageStackNav.Screen name="MessagesScreen" component={Messages} />
    </MessageStackNav.Navigator>
  );
};

export default MessageStack;
