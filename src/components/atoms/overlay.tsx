import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};
const overlay = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute top-0 bottom-0 right-0 left-0 -z-10"
      style={styles.container}
    />
  );
};

export default overlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
