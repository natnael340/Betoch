import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  style?: ViewStyle;
  children?: JSX.Element[];
};
const card = ({style, children}: Props) => {
  return (
    <View
      className="bg-white rounded-xl border p-3"
      style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0,0,0,0.005)',
    elevation: 5,
  },
});
