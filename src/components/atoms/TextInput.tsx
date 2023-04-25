import {TextInput as TextInputNative} from 'react-native';
import React from 'react';
import {primary} from '../../assets/colors';
type Props = {
  onTextInput: (text: string) => void;
  value: string;
  inputType?: 'numeric' | 'email-address';
  togglePasswordVisibility?: (field: string) => void;
  secureTextEntry?: boolean;
};
const TextInput = ({onTextInput, value, inputType, secureTextEntry}: Props) => {
  return (
    <TextInputNative
      className="border-b-2 text-lg"
      style={{
        borderBottomColor: primary,
      }}
      value={value}
      onChangeText={onTextInput}
      keyboardType={inputType || 'default'}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;
