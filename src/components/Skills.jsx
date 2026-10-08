import React from 'react'
import { 
  FiCode, FiLayout, FiDatabase, FiTool, 
  FiTarget, FiUsers, FiZap, FiHeart 
} from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const Skills = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [contentRef, contentVisible] = useScrollReveal({ once: true })

  const techSkills = [
    {
      category: 'Языки и библиотеки',
      icon: <FiCode />,
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Vite']
    },
    {
      category: 'Верстка',
      icon: <FiLayout />,
      skills: ['Адаптивная верстка', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Bootstrap', 'Figma']
    },
    {
      category: 'API и асинхронность',
      icon: <FiDatabase />,
      skills: ['Fetch API', 'REST API', 'Promises', 'Async/Await']
    },
    {
      category: 'Инструменты',
      icon: <FiTool />,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Wix', 'Canva']
    }
  ]

  const softSkills = [
    { icon: <FiTarget />, skill: 'Целеустремлённость' },
    { icon: <FiZap />, skill: 'Быстрое обучение' },
    { icon: <FiUsers />, skill: 'Многозадачность' },
    { icon: <FiHeart />, skill: 'Креативность' },
    { icon: <FiCode />, skill: 'Самостоятельность' },
    { icon: <FiLayout />, skill: 'Дисциплина' }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle text-center">
            Технологии и качества, которые помогают мне достигать целей
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`skills-container scroll-reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="skills-column">
            <h3 className="skills-column-title">Tech Skills</h3>
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
            <h3 className="skills-column-title">Soft Skills</h3>
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
