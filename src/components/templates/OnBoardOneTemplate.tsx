import {View} from 'react-native';
import React from 'react';
import BottomHeader from '../organisms/OnboardOneFooterHeader';
import {ActionType} from '../pages/OnBoardOneScreen';
import Container from '../atoms/Container';
type Props = {
  Top: React.FunctionComponent;
  Center: React.FunctionComponent;
  data: {
    title: string;
    info: string;
  };
  action: ActionType;
};
const OnBoardOneTemplate = ({Top, data, action, Center}: Props) => {
  return (
    <View className="flex-1 justify-between">
      <Container flex={1.8}>
        <Top />
      </Container>
      <Container>
        <Center />
      </Container>
      <Container>
        <BottomHeader data={data} OnNext={action.OnNext} />
      </Container>
    </View>
  );
};

export default OnBoardOneTemplate;
