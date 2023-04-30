import {View, FlatList} from 'react-native';
import React from 'react';
import AuthenticationHeader from '../organisms/AuthenticationHeader';
import {MessagesType} from '../pages/Messages';
import MessageItem from '../organisms/MessageItem';
import Hbar from '../atoms/hbar';
type Props = {
  messages: MessagesType[] | [];
};
const MessagesTemplate = ({messages}: Props) => {
  return (
    <View>
      <AuthenticationHeader title="Messages" />
      <FlatList
        data={messages}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <MessageItem message={item} />}
        ItemSeparatorComponent={Hbar}
      />
    </View>
  );
};

export default MessagesTemplate;
