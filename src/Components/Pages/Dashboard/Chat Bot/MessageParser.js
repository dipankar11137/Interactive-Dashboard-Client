import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = message => {
    if (message.includes('My booking Problem')) {
      actions.handleHello();
    }

    if (message.includes) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
