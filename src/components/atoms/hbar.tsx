import {StyleSheet, View} from 'react-native';
import React from 'react';
import {light} from '../../assets/colors';

const hbar = () => {
  return <View style={styles.bar} />;
};

export default hbar;

const styles = StyleSheet.create({
  bar: {
    height: 1,
    backgroundColor: light,
  },
});
