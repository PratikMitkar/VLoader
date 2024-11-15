import React from 'react'
import styles from './DownloadModal.module.css'
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa'

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const windowsDownloadUrl = "https://github.com/PratikMitkar/VLoader-python/releases/download/v0.1/VLoader-v0.1-windows.zip"

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Download VLoader</h2>
        <p>Click the button below to download VLoader. After downloading, unzip the file to start using the software.</p>
        <div className={styles.downloadButtons}>
          <a href={windowsDownloadUrl} className={styles.downloadButton} download>
            <FaWindows /> Download for Windows
          </a>
          <a href="#" className={styles.downloadButton} onClick={(e) => e.preventDefault()}>
            <FaApple /> Coming Soon for Mac
          </a>
          <a href="#" className={styles.downloadButton} onClick={(e) => e.preventDefault()}>
            <FaLinux /> Coming Soon for Linux
          </a>
        </div>
        <button className={styles.closeModal} onClick={onClose}>&times;</button>
      </div>
    </div>
  )
}