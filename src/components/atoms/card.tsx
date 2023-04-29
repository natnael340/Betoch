import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  style?: ViewStyle;
  children?: JSX.Element[] | JSX.Element;
};
const card = ({style, children}: Props) => {
  return (
    <View className="bg-white rounded-xl" style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
