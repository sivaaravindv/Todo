import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import Messages from './Messages';
import Input from './Input';

import API from './chatBotAPI.js';
import CloseIcon from '@material-ui/icons/Close';
import './Contact.css';

function Contact({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse('hi')}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="contact">
      <div className="support-chat">
        <h4 className="support-chat-title">Support</h4>
        <div className="close-chat" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>

      <Messages messages={messages} />
      <Input onSend={send} />
    </div>,

    document.getElementById('portal')
  );
}

export default Contact;
