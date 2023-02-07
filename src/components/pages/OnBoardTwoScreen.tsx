import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {onBoardTwoScreenTexts} from '../../assets/screenText';
import {RootStackParamList} from '../../navigators/Stack';
import Container from '../atoms/Container';
import OnboardTwoBottom from '../organisms/OnboardTwoBottom';
import OnboardTwoCenterHeader from '../organisms/OnboardTwoCenterHeader';
import OnboardTwoTopHeader from '../organisms/OnboardTwoTopHeader';
import {ActionType} from './OnBoardOneScreen';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnboardTwo'
>;
const OnBoardTwoScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const action: ActionType = {
    OnNext: () => navigation.navigate('OnboardThree'),
  };
  return (
    <View className="flex-1 justify-between">
      <Container>
        <OnboardTwoTopHeader />
      </Container>
      <Container flex={2} position="center">
        <OnboardTwoCenterHeader />
      </Container>
      <Container>
        <OnboardTwoBottom data={onBoardTwoScreenTexts} OnNext={action.OnNext} />
      </Container>
    </View>
  );
};

export default OnBoardTwoScreen;
