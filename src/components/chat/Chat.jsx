import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello!",
      sender: "receiver",
      time: "12:34 PM",
    },
    {
      id: 2,
      text: "Hi there!",
      sender: "sender",
      time: "12:35 PM",
    },
    {
      id: 3,
      text: "How are you?",
      sender: "receiver",
      time: "12:36 PM",
    },
  ]);

  const chatBoxRef = useRef(null);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value.trim();
    if (!message) {
      return;
    }
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "sender",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    e.target.elements.message.value = "";
  };

  useEffect(() => {
    chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  return (
    <>
    <div className="chat-container">
      <div ref={chatBoxRef} className="chat-box">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === "sender" ? "sender" : "receiver"}`}
          >
            <div className="message-text-container">
              <p className="message-text">{message.text}</p>
            </div>
            <div className="message-time-container">
              <p className="message-time">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <form onSubmit={handleMessageSend} className="chat-form">
        <input type="text" name="message" placeholder="Enter a messaage here..." className="chat-input" />
        <button type="submit" className="chat-button">
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
