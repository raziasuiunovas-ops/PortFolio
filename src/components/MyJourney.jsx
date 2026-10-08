import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './MyJourney.css'

const MyJourney = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [timelineRef, timelineVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            {t.journey.title} <span className="gradient-text">{t.journey.titleHighlight}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t.journey.subtitle}
          </p>
        </div>

        <div 
          ref={timelineRef}
          className="journey-timeline"
        >
          {t.journey.steps.map((step, index) => (
            <div 
              key={index} 
              className={`journey-step stagger-item ${timelineVisible ? 'visible' : ''}`}
            >
              <div className="journey-number">{index + 1}</div>
              <div className="journey-content">
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyJourney
