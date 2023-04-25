import {View} from 'react-native';
import React from 'react';

type Props = {
  Header: React.FC;
  Body: JSX.Element;
  Footer: JSX.Element;
};
const SignupTemplate = ({Header, Body, Footer}: Props) => {
  return (
    <View className="flex-1 justify-between bg-white">
      <View className="h-40">
        <Header />
      </View>
      <View className="flex-1 my-5 mx-10">{Body}</View>

      {Footer}
    </View>
  );
};

export default SignupTemplate;
