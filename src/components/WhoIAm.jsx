import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './WhoIAm.css'

const WhoIAm = () => {
  const [textRef, textVisible] = useScrollReveal({ once: true })
  const [statsRef, statsVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="who-i-am section" id="about">
      <div className="container">
        <div className="who-i-am-content">
          <div 
            ref={textRef}
            className={`who-i-am-text scroll-reveal-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title">
              {t.whoIAm.title} <span className="gradient-text">{t.whoIAm.titleHighlight}</span>
            </h2>
            <div className="text-content">
              <p>{t.whoIAm.text1}</p>
              <p>{t.whoIAm.text2}</p>
              <p>{t.whoIAm.text3}</p>
              <p>
                {t.whoIAm.text4_1} <strong>{t.whoIAm.studio}</strong> {t.whoIAm.text4_2} <strong>{t.whoIAm.direction}</strong>.
              </p>
            </div>
          </div>

          <div 
            ref={statsRef}
            className={`who-i-am-stats scroll-reveal-right ${statsVisible ? 'visible' : ''}`}
          >
            <div className="stat-item">
              <div className="stat-value gradient-text">16</div>
              <div className="stat-label">{t.whoIAm.yearsOld}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">4</div>
              <div className="stat-label">{t.whoIAm.languages}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">Bishkek</div>
              <div className="stat-label">{t.whoIAm.basedIn}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoIAm
