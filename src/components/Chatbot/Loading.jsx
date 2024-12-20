import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingDot}></div>
      <div className={styles.loadingDot}></div>
      <div className={styles.loadingDot}></div>
    </div>
  )
}

