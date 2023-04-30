import {View, Text} from 'react-native';
import React from 'react';
import {MessagesType} from '../pages/Messages';
import MessagePro from '../molecules/messagePro';
import Label from '../atoms/label';
import Badge from '../atoms/badge';
import {black} from '../../assets/colors';
type Props = {
  message: MessagesType;
};
const MessageItem = ({message}: Props) => {
  const time = new Date(message.lastMessage.time);

  return (
    <View className="flex-row mx-5 my-3">
      <MessagePro img={message.profileImage} online={message.online} />
      <View className="justify-center w-4/6 mx-2">
        <Text className="font-semibold text-base" style={{color: black}}>
          {message.name}
        </Text>
        <Text numberOfLines={1}>{message.lastMessage.message}</Text>
      </View>
      <View className="space-y-3">
        <View>
          <Label>{`${
            time.getHours() > 10 ? time.getHours() : '0' + time.getHours()
          }:${
            time.getMinutes() > 10 ? time.getMinutes() : '0' + time.getMinutes()
          }`}</Label>
        </View>
        <View className="items-end">
          <Badge>{message.unseen}</Badge>
        </View>
      </View>
    </View>
  );
};

export default MessageItem;
