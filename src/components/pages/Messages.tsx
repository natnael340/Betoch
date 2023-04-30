import React from 'react';
import MessagesTemplate from '../templates/MessagesTemplate';

export type MessagesType = {
  id: number;
  name: string;
  profileImage?: any;
  online?: boolean;
  lastMessage: {
    message: string;
    time: number;
  };
  unseen: number;
};
const Messages = () => {
  const messages: MessagesType[] = [
    {
      id: 1,
      name: 'Abeb Tesfaye',
      profileImage: null,
      online: false,
      lastMessage: {
        message:
          'Hello Abebe, do you have any available time so we can take a look at house',
        time: Date.now(),
      },
      unseen: 1,
    },
    {
      id: 2,
      name: 'Abeb Tesfaye',
      profileImage: null,
      online: false,
      lastMessage: {
        message:
          'Hello Abebe, do you have any available time so we can take a look at house',
        time: Date.now(),
      },
      unseen: 1,
    },
    {
      id: 3,
      name: 'Abeb Tesfaye',
      profileImage: null,
      online: true,
      lastMessage: {
        message:
          'Hello Abebe, do you have any available time so we can take a look at house',
        time: Date.now(),
      },
      unseen: 1,
    },
  ];
  return <MessagesTemplate messages={messages} />;
};

export default Messages;
