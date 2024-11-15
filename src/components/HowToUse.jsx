import React from 'react'
import styles from './HowToUse.module.css'
import { FiDownload } from 'react-icons/fi'
import { BiArchiveOut } from 'react-icons/bi'
import { BsPlayCircle } from 'react-icons/bs'

export default function HowToUse() {
  const steps = [
    { 
      title: 'Download', 
      description: 'Click the download button and save the zip file', 
      icon: <FiDownload />
    },
    { 
      title: 'Unzip', 
      description: 'Extract the contents of the zip file', 
      icon: <BiArchiveOut />
    },
    { 
      title: 'Run', 
      description: 'Open VideoGrab and start downloading!', 
      icon: <BsPlayCircle />
    }
  ]

  return (
    <section id="how-to-use" className={styles.howToUse}>
      <h2>How to Use VideoGrab</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.iconWrapper}>
              {step.icon}
            </div>
            <h3>{`${index + 1}. ${step.title}`}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}