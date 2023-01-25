import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type props = {
  style: StyleProp<ViewStyle>;
};
const overlay = ({style}: props) => {
  return <View style={[styles.container, style]} />;
};

export default overlay;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
