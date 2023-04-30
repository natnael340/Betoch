import {View, StyleSheet} from 'react-native';
import React from 'react';
import {grey, primary, white} from '../../assets/colors';

type Props = {
  online?: boolean;
};
const onlineStatus = ({online}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.component, {backgroundColor: online ? primary : grey}]}
      />
    </View>
  );
};

export default onlineStatus;

const styles = StyleSheet.create({
  container: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 6,
  },
  component: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
