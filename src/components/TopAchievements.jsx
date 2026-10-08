import React from 'react'
import { FiYoutube, FiBriefcase, FiAward, FiBook } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './TopAchievements.css'

const TopAchievements = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [cardsRef, cardsVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const achievements = [
    {
      icon: <FiYoutube />,
      number: '300K+',
      title: t.achievements.youtube300k.title,
      description: t.achievements.youtube300k.desc
    },
    {
      icon: <FiYoutube />,
      number: '4.6K+',
      title: t.achievements.youtube4k.title,
      description: t.achievements.youtube4k.desc
    },
    {
      icon: <FiBriefcase />,
      number: t.achievements.internship.number,
      title: t.achievements.internship.title,
      description: t.achievements.internship.desc
    },
    {
      icon: <FiAward />,
      number: t.achievements.school.number,
      title: t.achievements.school.title,
      description: t.achievements.school.desc
    }
  ]

  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            {t.achievements.title} <span className="gradient-text">{t.achievements.titleHighlight}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t.achievements.subtitle}
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="achievements-grid"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`achievement-card card stagger-item ${cardsVisible ? 'visible' : ''}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-number gradient-text">{achievement.number}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopAchievements
