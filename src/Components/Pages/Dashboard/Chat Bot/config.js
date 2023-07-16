import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'Atif Aziz';
const config = {
  initialMessages: [
    createChatBotMessage(`Hello! I'm ${botName}    How Can I help You ?`),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
