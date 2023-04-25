import {View} from 'react-native';
import React from 'react';
import OnBoardThreeHeader from '../organisms/OnBoardThreeHeader';
import {RootStackParamList} from '../../navigators/Stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import OnBoardThreeTemplate from '../templates/OnBoardThreeTemplate';
import {onBoardThreeScreenTexts} from '../../assets/screenText';
import OnBoardThreeCenter from '../organisms/OnBoardThreeCenter';
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnboardThree'
>;
export type ActionType = {
  OnNext: () => void;
};
const OnBoardThreeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const action: ActionType = {
    OnNext: () => navigation.navigate('Signup'),
  };
  return (
    <View className="flex-1">
      <OnBoardThreeTemplate
        Top={OnBoardThreeHeader}
        data={onBoardThreeScreenTexts}
        action={action}
        Center={OnBoardThreeCenter}
      />
    </View>
  );
};

export default OnBoardThreeScreen;
