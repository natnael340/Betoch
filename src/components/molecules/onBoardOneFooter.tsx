import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../atoms/text';
import {primary} from '../../assets/colors';
import OnBoardLoading from './onBoardLoading';

type Props = {
  OnNext: () => void;
};
const OnBoardOneFooter = ({OnNext}: Props) => {
  return (
    <View className="flex-row justify-between w-full p-5 mt-5 items-center">
      <Text>Skip</Text>
      <OnBoardLoading active={1} />
      <TouchableOpacity onPress={OnNext}>
        <Text color={primary}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardOneFooter;
