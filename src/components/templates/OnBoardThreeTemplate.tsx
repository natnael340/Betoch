import {View} from 'react-native';
import React from 'react';
import Container from '../atoms/Container';
import {ActionType} from '../pages/OnBoardOneScreen';
import OnboardTwoBottom from '../organisms/OnboardTwoBottom';

type Props = {
  Top: React.FunctionComponent;
  Center: React.FunctionComponent;
  data: {
    title: string;
    info: string;
  };
  action: ActionType;
};
const OnBoardThreeTemplate = ({Top, Center, data, action}: Props) => {
  return (
    <View className="flex-1 justify-between bg-white">
      <Container flex={1.7}>
        <Top />
      </Container>
      <Container style={{top: -50}}>
        <Center />
      </Container>
      <Container>
        <OnboardTwoBottom
          data={data}
          OnNext={action.OnNext}
          currentScreenIndex={3}
        />
      </Container>
    </View>
  );
};

export default OnBoardThreeTemplate;
