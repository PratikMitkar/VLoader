import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} VLoader. All rights reserved.</p>
      <p>
        <a href="#about">About Us</a> |
        <a href="#contact"> Contact</a>
      </p>
    </footer>
  )
}