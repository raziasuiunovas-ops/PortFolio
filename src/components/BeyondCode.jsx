import React from 'react'
import { FiHeart, FiGlobe, FiBook } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './BeyondCode.css'

const BeyondCode = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [gridRef, gridVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const languages = [
    { flag: '🇰🇬', name: language === 'ru' ? 'Кыргызский' : 'Kyrgyz', level: language === 'ru' ? 'Родной' : 'Native' },
    { flag: '🇷🇺', name: language === 'ru' ? 'Русский' : 'Russian', level: language === 'ru' ? 'Свободное владение' : 'Fluent' },
    { flag: '🇬🇧', name: language === 'ru' ? 'Английский' : 'English', level: 'B1' },
    { flag: '🇹🇷', name: language === 'ru' ? 'Турецкий' : 'Turkish', level: 'B1' },
    { flag: '🇫🇷', name: language === 'ru' ? 'Французский' : 'French', level: 'A0' }
  ]

  return (
    <section className="beyond-code section" id="beyond">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            {t.beyond.title} <span className="gradient-text">{t.beyond.titleHighlight}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t.beyond.subtitle}
          </p>
        </div>

        <div 
          ref={gridRef}
          className="beyond-grid"
        >
          {/* Творчество */}
          <div className={`beyond-card card stagger-item ${gridVisible ? 'visible' : ''}`}>
            <div className="beyond-icon">
              <FiHeart />
            </div>
            <h3 className="beyond-title">{t.beyond.creativity}</h3>
            <p className="beyond-text">
              {t.beyond.creativityText}
            </p>
          </div>

          {/* Языки */}
          <div className={`beyond-card card stagger-item ${gridVisible ? 'visible' : ''}`}>
            <div className="beyond-icon">
              <FiGlobe />
            </div>
            <h3 className="beyond-title">{t.beyond.languages}</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-flag">{lang.flag}</span>
                  <div className="language-info">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Образование */}
          <div className={`beyond-card card stagger-item ${gridVisible ? 'visible' : ''}`}>
            <div className="beyond-icon">
              <FiBook />
            </div>
            <h3 className="beyond-title">{t.beyond.education}</h3>
            <div className="education-list">
              <div className="education-item">
                <h4>{language === 'ru' ? 'IT-Академия «Окурмен»' : 'Okurmen IT Academy'}</h4>
                <p className="education-period">2026 - {t.beyond.present}</p>
                <p className="education-desc">Frontend {language === 'ru' ? 'разработка' : 'Development'}</p>
              </div>
              <div className="education-item">
                <h4>{language === 'ru' ? '№55 общеобразовательная школа, Бишкек' : 'School #55, Bishkek'}</h4>
                <p className="education-period">{t.beyond.excellent}</p>
                <p className="education-desc">
                  {t.beyond.diploma}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondCode
