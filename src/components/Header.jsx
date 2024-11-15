import React, { useState } from 'react'
import styles from './Header.module.css'
import MyIcon from '../assets/app.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={MyIcon} alt="VLoader Icon" style={{ width: '2rem', height: '2rem' }} />
          <span style={{ color: '#DDE6ED' }}>VLoader</span>
        </div>
        <button className={styles.mobileMenuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#how-to-use" onClick={toggleMenu}>How to Use</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}