import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  flex?: number;
  alignment?: 'row' | 'column';
  position?:
    | 'center'
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter';
  style?: ViewStyle;
  children: JSX.Element;
};
type positionType = {
  justifyContent: 'center' | 'flex-end' | 'flex-start' | undefined;
  alignItems: 'center' | 'flex-end' | 'flex-start' | undefined;
};
const Container = ({
  flex,
  alignment,
  position,
  style: _style,
  children,
}: Props) => {
  let pos: positionType = {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };
  switch (position) {
    case 'center':
      pos.justifyContent = 'center';
      pos.alignItems = 'center';
      break;
    case 'top':
      pos.justifyContent = 'flex-start';
      pos.alignItems = 'center';
      break;
    case 'bottom':
      pos.justifyContent = 'flex-end';
      pos.alignItems = 'center';
      break;
    case 'left':
      pos.justifyContent = 'center';
      pos.alignItems = 'flex-start';
      break;
    case 'right':
      pos.justifyContent = 'center';
      pos.alignItems = 'flex-end';
      break;
    case 'topLeft':
      pos.justifyContent = 'flex-start';
      pos.alignItems = 'flex-start';
      break;
    case 'topRight':
      pos.justifyContent = 'flex-start';
      pos.alignItems = 'flex-end';
      break;
    case 'bottomLeft':
      pos.justifyContent = 'flex-end';
      pos.alignItems = 'flex-start';
      break;
    case 'bottomRight':
      pos.justifyContent = 'flex-end';
      pos.alignItems = 'flex-end';
      break;
    default:
      pos.justifyContent = undefined;
      pos.alignItems = undefined;
  }
  const style = StyleSheet.create({
    container: {
      flex: flex || 1,
      flexDirection: alignment || 'column',
      justifyContent: pos.justifyContent,
      alignItems: pos.alignItems,
    },
  });
  return <View style={[style.container, _style]}>{children}</View>;
};

export default Container;
