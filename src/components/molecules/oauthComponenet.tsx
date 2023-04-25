import {Text, View} from 'react-native';
import React from 'react';
import {black} from '../../assets/colors';

type Props = {
  Icon: React.FunctionComponent;
  text: string;
};
const oauthComponenet = ({Icon, text}: Props) => {
  return (
    <View className="flex-row w-full p-3 rounded-lg border-slate-300 border my-2">
      <Icon />
      <View className="flex-1 justify-center items-center">
        <Text style={{color: black}}>{text}</Text>
      </View>
    </View>
  );
};

export default oauthComponenet;
