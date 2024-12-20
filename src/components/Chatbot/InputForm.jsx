import React, { useState } from 'react'
import styles from './InputForm.module.css'

export default function InputForm({ onSendMessage }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  return (
    <form className={styles.inputForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className={styles.input}
      />
      <button type="submit" className={styles.sendButton}>
        Send
      </button>
    </form>
  )
}

