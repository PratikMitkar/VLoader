import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowToUse from './components/HowToUse'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DownloadModal from './components/DownloadModal'
import styles from './App.module.css'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero openModal={openModal} />
        <Features />
        <HowToUse />
        <About />
        <Contact />
      </main>
      <Footer />
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}