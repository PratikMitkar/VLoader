import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../assets/main.png'



export default function Hero({ openModal }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Download Videos with Ease</h1>
        <p>VideoGrab supports YouTube, Instagram, and more!</p>
        <button onClick={openModal} className={styles.ctaButton}>Download Now</button>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="VideoGrab Interface" width="600" height="400" />
      </div>
    </section>
  )
}