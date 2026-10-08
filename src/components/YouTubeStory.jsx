import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './YouTubeStory.css'

const YouTubeStory = () => {
  const [headerRef, headerVisible] = useScrollReveal({ once: true })
  const [contentRef, contentVisible] = useScrollReveal({ once: true })

  const achievements = [
    { number: '300K+', label: 'Подписчиков' },
    { number: '8', label: 'Месяцев роста' },
    { number: '14', label: 'Лет было' }
  ]

  const skills = [
    'Самостоятельность',
    'Работа с контентом и аудиторией',
    'Видеомонтаж',
    'Понимание алгоритмов платформ',
    'Дисциплина',
    'Долгосрочная работа над проектом'
  ]

  return (
    <section className="youtube-story section" id="youtube">
      <div className="container">
        <div 
          ref={headerRef}
          className={`youtube-header scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <FiYoutube className="youtube-icon-large" />
          <h2 className="section-title">
            Beyond Code: <span className="gradient-text">My Content Journey</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className={`youtube-content scroll-reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="youtube-story-text">
            <p>
              В 14 лет я самостоятельно начала развивать YouTube-канал.
            </p>
            <p>
              За <strong>8 месяцев</strong> вырастила его с нуля до почти <strong>300 000 подписчиков</strong>.
            </p>
            <p>
              Канал был монетизирован, но позже заблокирован — но этот опыт научил меня многому.
            </p>
            <p>
              Сейчас развиваю новый канал (<strong>4.6K+ подписчиков</strong>), параллельно сосредоточившись на IT.
            </p>
            <p className="youtube-conclusion">
              Этот путь показал мне, что я умею создавать проекты и доводить их до измеримых результатов.
            </p>
          </div>

          <div className="youtube-stats">
            <div className="youtube-stats-grid">
              {achievements.map((item, index) => (
                <div key={index} className="youtube-stat-card">
                  <div className="youtube-stat-number gradient-text">{item.number}</div>
                  <div className="youtube-stat-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="youtube-skills-learned">
              <h4>Что я получила:</h4>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouTubeStory
