import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './YouTubeStory.css'

const YouTubeStory = () => {
  const [headerRef, headerVisible] = useScrollReveal({ once: true })
  const [contentRef, contentVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const achievements = [
    { number: '300K+', label: language === 'ru' ? 'Подписчиков' : 'Subscribers' },
    { number: '8', label: language === 'ru' ? 'Месяцев роста' : 'Months of growth' },
    { number: '14', label: language === 'ru' ? 'Лет было' : 'Years old' }
  ]

  const skills = language === 'ru' ? [
    'Самостоятельность',
    'Работа с контентом и аудиторией',
    'Видеомонтаж',
    'Понимание алгоритмов платформ',
    'Дисциплина',
    'Долгосрочная работа над проектом'
  ] : [
    'Independence',
    'Content and audience management',
    'Video editing',
    'Understanding platform algorithms',
    'Discipline',
    'Long-term project work'
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
            {t.youtube.title} <span className="gradient-text">{t.youtube.titleHighlight}</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className={`youtube-content scroll-reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="youtube-story-text">
            <p>
              {language === 'ru' 
                ? 'В 14 лет я самостоятельно начала развивать YouTube-канал.'
                : 'At 14, I independently started growing a YouTube channel.'}
            </p>
            <p>
              {language === 'ru' 
                ? 'За 8 месяцев вырастила его с нуля до почти 300 000 подписчиков.'
                : 'In 8 months, I grew it from scratch to nearly 300,000 subscribers.'}
            </p>
            <p>
              {language === 'ru'
                ? 'Канал был монетизирован, но позже заблокирован — но этот опыт научил меня многому.'
                : 'The channel was monetized but later blocked — but this experience taught me a lot.'}
            </p>
            <p>
              {language === 'ru'
                ? 'Сейчас развиваю новый канал (4.6K+ подписчиков), параллельно сосредоточившись на IT.'
                : 'Now I am growing a new channel (4.6K+ subscribers) while focusing on IT.'}
            </p>
            <p className="youtube-conclusion">
              {language === 'ru'
                ? 'Этот путь показал мне, что я умею создавать проекты и доводить их до измеримых результатов.'
                : 'This journey showed me that I can create projects and achieve measurable results.'}
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
              <h4>{t.youtube.learned}</h4>
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
