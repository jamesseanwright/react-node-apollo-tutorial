import React from 'react';

const Message = () => <p />;

const Messages = ({ messages = [] }) => (
  <ul>
    {messages.map((message, i) => (
      <li key={i}>
        <Message {...message} />
      </li>
    ))}
  </ul>
);

export default Messages;
