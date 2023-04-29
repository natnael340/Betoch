import {Text, View, TextInput} from 'react-native';
import React from 'react';
import Modal from '../molecules/modal';
import ModalContent from '../molecules/modalContent';
import FormBody from './FormBody';
import Label from '../atoms/label';
import Card from '../atoms/card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black, primary} from '../../assets/colors';
import Button from '../atoms/button';

type Props = {
  fields: {
    name: string;
    value: string;
    inputType?: 'numeric' | 'email-address';
    showPassword?: boolean;
    leftComponent?: JSX.Element;
  }[];
  visible: boolean;
  toggleVisibility: () => void;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
};
const BookTour = ({
  fields,
  visible,
  toggleVisibility,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <Modal visible={visible} toggleVisibility={toggleVisibility}>
      <ModalContent onClose={toggleVisibility} title="Book Tour">
        <FormBody
          fields={fields.filter(field => field.name !== 'Date')}
          onChange={onChange}
        />
        <View>
          <Label>Date</Label>
          <View className="flex-row">
            <Card style={{flex: 1, marginRight: 10}}>
              <View className="flex-row justify-between items-center">
                <Text
                  style={{
                    color: black,
                  }}>
                  {
                    fields
                      .find(field => field.name === 'Date')
                      ?.value.split(' ')[0]
                  }
                </Text>
                <FontAwesome name="calendar" size={16} color={primary} />
              </View>
            </Card>
            <Card style={{flex: 1, marginLeft: 10}}>
              <View className="flex-row justify-between items-center">
                <Text
                  style={{
                    color: black,
                  }}>
                  {
                    fields
                      .find(field => field.name === 'Date')
                      ?.value.split(' ')[1]
                  }
                </Text>
                <FontAwesome name="clock-o" size={16} color={primary} />
              </View>
            </Card>
          </View>
          <View className="my-2">
            <Label>Comment</Label>
            <Card style={{padding: 5, marginTop: 10}}>
              <TextInput
                value={fields.find(field => field.name === 'Comment')?.value}
                onChangeText={text => onChange('Comment', text)}
                multiline
              />
            </Card>
          </View>
          <Button value="Request Tour" onPress={onSubmit} />
        </View>
      </ModalContent>
    </Modal>
  );
};

export default BookTour;
