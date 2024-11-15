import React from 'react'
import styles from './DownloadModal.module.css'
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa'

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Download VLoader</h2>
        <p>Click the button below to download VLoader. After downloading, unzip the file to start using the software.</p>
        <div className={styles.downloadButtons}>
          <a href="#" className={styles.downloadButton}>
            <FaWindows /> Download for Windows
          </a>
          <a href="#" className={styles.downloadButton}>
            <FaApple /> Download for Mac
          </a>
          <a href="#" className={styles.downloadButton}>
            <FaLinux /> Download for Linux
          </a>
        </div>
        <button className={styles.closeModal} onClick={onClose}>&times;</button>
      </div>
    </div>
  )
}