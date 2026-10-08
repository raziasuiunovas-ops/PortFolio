import React from 'react'
import { 
  FiCode, FiLayout, FiDatabase, FiTool, 
  FiTarget, FiUsers, FiZap, FiHeart 
} from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Skills.css'

const Skills = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [contentRef, contentVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const techSkills = [
    {
      category: language === 'ru' ? 'Языки и библиотеки' : 'Languages & Libraries',
      icon: <FiCode />,
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Vite']
    },
    {
      category: language === 'ru' ? 'Верстка' : 'Layout',
      icon: <FiLayout />,
      skills: language === 'ru' 
        ? ['Адаптивная верстка', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Bootstrap', 'Figma']
        : ['Adaptive layout', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Bootstrap', 'Figma']
    },
    {
      category: language === 'ru' ? 'API и асинхронность' : 'API & Async',
      icon: <FiDatabase />,
      skills: ['Fetch API', 'REST API', 'Promises', 'Async/Await']
    },
    {
      category: language === 'ru' ? 'Инструменты' : 'Tools',
      icon: <FiTool />,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Wix', 'Canva']
    }
  ]

  const softSkills = [
    { icon: <FiTarget />, skill: language === 'ru' ? 'Целеустремлённость' : 'Goal-oriented' },
    { icon: <FiZap />, skill: language === 'ru' ? 'Быстрое обучение' : 'Fast learning' },
    { icon: <FiUsers />, skill: language === 'ru' ? 'Многозадачность' : 'Multitasking' },
    { icon: <FiHeart />, skill: language === 'ru' ? 'Креативность' : 'Creativity' },
    { icon: <FiCode />, skill: language === 'ru' ? 'Самостоятельность' : 'Independence' },
    { icon: <FiLayout />, skill: language === 'ru' ? 'Дисциплина' : 'Discipline' }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t.skills.subtitle}
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`skills-container scroll-reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="skills-column">
            <h3 className="skills-column-title">{t.skills.techSkills}</h3>
            <div className="tech-skills">
              {techSkills.map((item, index) => (
                <div key={index} className="tech-skill-card card">
                  <div className="tech-skill-header">
                    <div className="tech-skill-icon">{item.icon}</div>
                    <h4 className="tech-skill-category">{item.category}</h4>
                  </div>
                  <div className="tech-skill-tags">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-column-title">{t.skills.softSkills}</h3>
            <div className="soft-skills">
              {softSkills.map((item, index) => (
                <div key={index} className="soft-skill-card card">
                  <div className="soft-skill-icon">{item.icon}</div>
                  <span className="soft-skill-name">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
