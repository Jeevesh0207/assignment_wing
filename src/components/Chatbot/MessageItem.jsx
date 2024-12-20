import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./MessageItem.module.css";
import User from "../../img/user.png";
import Bot from "../../img/assistant.png";

export default function MessageItem({ message }) {
  return (
    <div
      className={`${styles.messageItem} ${
        message.isUser ? styles.user : styles.bot
      }`}
    >
      <div className={styles.avatar}>
        {message.isUser ? (
          <img src={User} className="w-[30px] h-[30px]" />
        ) : (
          <img src={Bot} className="w-[30px] h-[30px]" />
        )}
      </div>
      <div className={styles.messageContent}>
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>
    </div>
  );
}