import React from 'react'
import styles from './Features.module.css'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { BiSolidCloudDownload } from 'react-icons/bi'
import { MdHighQuality } from 'react-icons/md'

export default function Features() {
  const features = [
    { 
      title: 'Multiple Platforms', 
      description: 'Download from YouTube and more', 
      icon: <FaYoutube className={styles.youtube} />
    },
    { 
      title: 'High-Speed Downloads', 
      description: 'Get your videos faster than ever', 
      icon: <BiSolidCloudDownload className={styles.downloadIcon} />
    },
    { 
      title: 'Multiple Formats', 
      description: 'Choose from various video and audio formats', 
      icon: <MdHighQuality className={styles.formatIcon} />
    }
  ]

  return (
    <section id="features" className={styles.features}>
      <h2>Features</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}