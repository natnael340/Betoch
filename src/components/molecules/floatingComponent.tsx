import {View, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  children: JSX.Element[] | JSX.Element;
};
const floatingComponent = ({position, children}: Props) => {
  const style = StyleSheet.create({
    container: {
      top: position?.top,
      left: position?.left,
      right: position?.right,
      bottom: position?.bottom,
    },
  });
  return (
    <View className="absolute" style={style.container}>
      {children}
    </View>
  );
};

export default floatingComponent;
