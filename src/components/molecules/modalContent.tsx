import {View, Text} from 'react-native';
import React from 'react';
import Card from '../atoms/card';
import Close from '../atoms/close';

type Props = {
  onClose: () => void;
  title?: string;
  children?: JSX.Element[] | JSX.Element;
};
const modalContent = ({onClose, title, children}: Props) => {
  return (
    <Card style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
      <Text className="font-semibold text-lg text-center">{title}</Text>
      <View className="absolute right-0 top-0">
        <Close onClose={onClose} />
      </View>
      <View className="py-5">{children}</View>
    </Card>
  );
};

export default modalContent;
