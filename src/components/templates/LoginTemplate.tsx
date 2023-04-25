import {View} from 'react-native';
import React from 'react';
import Container from '../atoms/Container';

type Props = {
  Top: React.FC;
  Body: JSX.Element;
  Footer: JSX.Element;
};
const LoginTemplate = ({Top, Body, Footer}: Props) => {
  return (
    <View className="flex-1 justify-between bg-white">
      <Container flex={1.7}>
        <Top />
      </Container>
      <View className="flex-1 mx-10 -mt-40">{Body}</View>
      {Footer}
    </View>
  );
};

export default LoginTemplate;
