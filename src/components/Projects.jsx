import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [gridRef, gridVisible] = useScrollReveal({ once: true })

  const projects = [
    {
      title: 'Сайт для Окурмен',
      tech: 'React + Next.js + Tailwind CSS',
      description: 'Многоязычный сайт IT-академии Окурмен',
      features: [
        'Задача стажировки в Okurmen Studio',
        'Многоязычность (KY/RU/EN)',
        'Адаптивный дизайн',
        'Современный UI/UX'
      ],
      link: 'https://okurmen-seven.vercel.app/ky',
      hasLiveLink: true
    },
    {
      title: 'Todo List',
      tech: 'React + Vite + JavaScript',
      description: 'Веб-приложение для управления задачами с интерактивной фильтрацией',
      features: [
        'Добавление задач',
        'Удаление задач',
        'Интерактивная фильтрация',
        'Самостоятельно написанная логика'
      ],
      hasLiveLink: false
    },
    {
      title: 'Каталог товаров с API',
      tech: 'JavaScript + Fetch API',
      description: 'Динамический каталог товаров с асинхронными запросами',
      features: [
        'Динамические карточки категорий',
        'Fetch API',
        'Асинхронные запросы',
        'Адаптивная стилизация'
      ],
      hasLiveLink: false
    },
    {
      title: 'Адаптивная верстка по Figma',
      tech: 'HTML5 + CSS3 + Flexbox + Grid',
      description: 'Практические проекты по сложным макетам Figma',
      features: [
        'Flexbox и Grid',
        'Адаптивная верстка',
        'Responsive design',
        'Desktop / Tablet / Mobile'
      ],
      hasLiveLink: false
    },
    {
      title: 'Сайт-витрина кондитерской',
      tech: 'Wix',
      description: 'Концепция и структура сайта для заказа десертов',
      features: [
        'Структура сайта',
        'Дизайн витрины',
        'Онлайн-заказ',
        'Визуальная концепция'
      ],
      hasLiveLink: false
    }
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-center">
            Реальные проекты, созданные в процессе обучения
          </p>
        </div>

        <div 
          ref={gridRef}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card card stagger-item ${gridVisible ? 'visible' : ''}`}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <ul className="project-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.hasLiveLink ? (
                  <>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <FiExternalLink /> Открыть сайт
                    </a>
                    <a 
                      href="https://github.com/raziasuiunovas-ops" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub /> GitHub
                    </a>
                  </>
                ) : (
                  <a 
                    href="https://github.com/raziasuiunovas-ops" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
