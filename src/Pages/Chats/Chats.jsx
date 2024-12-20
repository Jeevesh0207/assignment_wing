import React, { useEffect, useState, useCallback } from "react";
import { InputForm, MessageList } from "../../components/Chatbot";
import styles from "../../components/Chatbot/ChatBot.module.css";
import { useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const data = location.state;

  const handleSendMessage = useCallback(async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch(BASE_URL+"/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.message, isUser: false },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, there was an error. Please try again.", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      if (data !== null) {
        handleSendMessage(data);
      } else {
        setMessages([
          { text: "Hi! Welcome to personalized shopping assistance.\n\n How can I help you today?\n\n Looking for a specific product or category?", isUser: false }
        ]);
      }
    }
  }, [data, messages.length, handleSendMessage]);

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center relative">
      <div
        className={`${styles.chatbot} rounded-lg bg-white border-[0.5px] border-gray box-border shadow shadow-gray`}
      >
        <div className={styles.header}>
          <h1 className="text-[16px] md:text-[24px] font-medium text-side-bar">
            Wingman AI
          </h1>
        </div>
        <MessageList messages={messages} isLoading={isLoading} />
        <InputForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default React.memo(Chat);
