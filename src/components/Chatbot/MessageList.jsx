import React from 'react'
import MessageItem from './MessageItem'
import Loading from './Loading'
import styles from './MessageList.module.css'

export default function MessageList({ messages, isLoading }) {
  return (
    <div className={styles.messageList}>
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
      {isLoading && <Loading />}
    </div>
  )
}

