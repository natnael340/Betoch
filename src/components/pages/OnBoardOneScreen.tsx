import {View} from 'react-native';
import React from 'react';
import TopHeader from '../organisms/OnboadOneTopHeader';
import OnBoardOneTemplate from '../templates/OnBoardOneTemplate';
import {onBoardScreenTexts} from '../../assets/screenText';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/Stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import OnboardOneCenter from '../organisms/OnboardOneCenter';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnboardOne'
>;
export type ActionType = {
  OnNext: () => void;
};
const OnBoardOneScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const action: ActionType = {
    OnNext: () => navigation.navigate('OnboardTwo'),
  };
  return (
    <View className="flex-1">
      <OnBoardOneTemplate
        Top={TopHeader}
        data={onBoardScreenTexts}
        action={action}
        Center={OnboardOneCenter}
      />
    </View>
  );
};

export default OnBoardOneScreen;
