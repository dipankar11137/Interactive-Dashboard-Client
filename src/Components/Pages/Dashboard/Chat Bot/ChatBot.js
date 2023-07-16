import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const ChatBot = () => {
  return (
    <div className="p-10 ">
      <div className="shadow-2xl">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatBot;
