import {View} from 'react-native';
import React from 'react';
import Text from '../atoms/text';
import {primary} from '../../assets/colors';
import OnBoardLoading from './onBoardLoading';

const onBoardOneFooter = () => {
  return (
    <View className="flex-row justify-between w-full p-5 mt-5 mb-10 items-center">
      <Text>Skip</Text>
      <OnBoardLoading active={1} />
      <Text color={primary}>Next</Text>
    </View>
  );
};

export default onBoardOneFooter;
