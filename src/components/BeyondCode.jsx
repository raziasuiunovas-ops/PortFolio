import React from 'react'
import { FiHeart, FiGlobe, FiBook } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BeyondCode.css'

const BeyondCode = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [gridRef, gridVisible] = useScrollReveal({ once: true })

  const languages = [
    { flag: '🇰🇬', name: 'Кыргызский', level: 'Native' },
    { flag: '🇷🇺', name: 'Русский', level: 'Свободное владение' },
    { flag: '🇬🇧', name: 'Английский', level: 'B1' },
    { flag: '🇹🇷', name: 'Турецкий', level: 'B1' },
    { flag: '🇫🇷', name: 'Французский', level: 'A0' }
  ]

  return (
    <section className="beyond-code section" id="beyond">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle text-center">
            Творчество, языки и образование
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
            <h3 className="beyond-title">Творчество</h3>
            <p className="beyond-text">
              Я очень творческий человек. Рисую, пою, вяжу, плету, создаю сумки, работаю с бисером. 
              Креативность помогает мне находить нестандартные решения в коде.
            </p>
          </div>

          {/* Языки */}
          <div className={`beyond-card card stagger-item ${gridVisible ? 'visible' : ''}`}>
            <div className="beyond-icon">
              <FiGlobe />
            </div>
            <h3 className="beyond-title">Языки</h3>
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
            <h3 className="beyond-title">Образование</h3>
            <div className="education-list">
              <div className="education-item">
                <h4>IT-Академия «Окурмен»</h4>
                <p className="education-period">2026 - настоящее время</p>
                <p className="education-desc">Frontend-разработка</p>
              </div>
              <div className="education-item">
                <h4>№55 общеобразовательная школа, Бишкек</h4>
                <p className="education-period">Отличница</p>
                <p className="education-desc">
                  Претендую на красный диплом. Активистка: участвовала во многих мероприятиях, 
                  конкурсах и олимпиадах.
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
