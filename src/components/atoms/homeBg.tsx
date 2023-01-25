import {ImageBackground, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import React from 'react';
type props = {
  children: JSX.Element;
  style?: StyleProp<ImageStyle>;
};
const homeBg = ({children, style}: props) => {
  return (
    <ImageBackground
      style={[styles.container, style]}
      source={require('../../assets/homebg.jpg')}>
      {children}
    </ImageBackground>
  );
};

export default homeBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
