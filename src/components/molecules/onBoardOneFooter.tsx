import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../atoms/text';
import {primary} from '../../assets/colors';
import OnBoardLoading from './onBoardLoading';

type Props = {
  OnNext: () => void;
  currentScreenIndex: number;
};
const OnBoardOneFooter = ({OnNext, currentScreenIndex}: Props) => {
  return (
    <View className="flex-row justify-between w-full p-5 mt-5 items-center">
      <Text>Skip</Text>
      <OnBoardLoading active={currentScreenIndex} />
      <TouchableOpacity onPress={OnNext}>
        <Text color={primary}>
          {currentScreenIndex === 3 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardOneFooter;
