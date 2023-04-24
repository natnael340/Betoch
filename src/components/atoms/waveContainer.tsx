import {View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: JSX.Element;
  style?: ViewStyle;
};
const waveContainer = ({children, style}: Props) => {
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0" style={style}>
      {children}
    </View>
  );
};

export default waveContainer;
