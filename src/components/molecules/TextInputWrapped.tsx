import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Label from '../atoms/label';
import TextInput from '../atoms/TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  label: string;
  value: string;
  onTextInput: (t: string) => void;
  inputType?: 'numeric' | 'email-address';
  showPassword?: boolean;
  togglePasswordVisibility?: (field: string) => void;
  leftComponent?: JSX.Element;
};
const TextInputWrapped = ({
  label,
  value,
  onTextInput,
  inputType,
  showPassword,
  togglePasswordVisibility,
  leftComponent,
}: Props) => {
  return (
    <View className="my-1">
      <Label>{label}</Label>
      <TextInput
        value={value}
        onTextInput={onTextInput}
        inputType={inputType}
        secureTextEntry={showPassword}
      />
      {showPassword === undefined ? (
        <></>
      ) : (
        <TouchableOpacity
          className="absolute right-0 bottom-2"
          onPress={() =>
            togglePasswordVisibility && togglePasswordVisibility(label)
          }>
          {showPassword === false ? (
            <FontAwesome name="eye" size={24} color="rgb(107 114 128)" />
          ) : (
            <FontAwesome name="eye-slash" size={24} color="rgb(107 114 128)" />
          )}
        </TouchableOpacity>
      )}
      <View className="absolute right-0 bottom-2">{leftComponent}</View>
    </View>
  );
};

export default TextInputWrapped;
