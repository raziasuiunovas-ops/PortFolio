import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Projects.css'

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [gridRef, gridVisible] = useScrollReveal({ once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: language === 'ru' ? 'Сайт для Окурмен' : 'Okurmen Website',
      tech: 'React + Next.js + Tailwind CSS',
      description: language === 'ru' 
        ? 'Многоязычный сайт IT-академии Окурмен'
        : 'Multilingual website for Okurmen IT Academy',
      features: language === 'ru'
        ? [
            'Задача стажировки в Okurmen Studio',
            'Многоязычность (KY/RU/EN)',
            'Адаптивный дизайн',
            'Современный UI/UX'
          ]
        : [
            'Internship project at Okurmen Studio',
            'Multilingual (KY/RU/EN)',
            'Adaptive design',
            'Modern UI/UX'
          ],
      link: 'https://okurmen-seven.vercel.app/ky',
      hasLiveLink: true
    },
    {
      title: 'Todo List',
      tech: 'React + Vite + JavaScript',
      description: language === 'ru'
        ? 'Веб-приложение для управления задачами с интерактивной фильтрацией'
        : 'Task management web app with interactive filtering',
      features: language === 'ru'
        ? [
            'Добавление задач',
            'Удаление задач',
            'Интерактивная фильтрация',
            'Самостоятельно написанная логика'
          ]
        : [
            'Add tasks',
            'Delete tasks',
            'Interactive filtering',
            'Self-written logic'
          ],
      hasLiveLink: false
    },
    {
      title: language === 'ru' ? 'Каталог товаров с API' : 'Product Catalog with API',
      tech: 'JavaScript + Fetch API',
      description: language === 'ru'
        ? 'Динамический каталог товаров с асинхронными запросами'
        : 'Dynamic product catalog with async requests',
      features: language === 'ru'
        ? [
            'Динамические карточки категорий',
            'Fetch API',
            'Асинхронные запросы',
            'Адаптивная стилизация'
          ]
        : [
            'Dynamic category cards',
            'Fetch API',
            'Async requests',
            'Adaptive styling'
          ],
      hasLiveLink: false
    },
    {
      title: language === 'ru' ? 'Адаптивная верстка по Figma' : 'Adaptive Figma Layouts',
      tech: 'HTML5 + CSS3 + Flexbox + Grid',
      description: language === 'ru'
        ? 'Практические проекты по сложным макетам Figma'
        : 'Practical projects based on complex Figma designs',
      features: language === 'ru'
        ? [
            'Flexbox и Grid',
            'Адаптивная верстка',
            'Responsive design',
            'Desktop / Tablet / Mobile'
          ]
        : [
            'Flexbox & Grid',
            'Adaptive layout',
            'Responsive design',
            'Desktop / Tablet / Mobile'
          ],
      hasLiveLink: false
    },
    {
      title: language === 'ru' ? 'Сайт-витрина кондитерской' : 'Pastry Shop Website',
      tech: 'Wix',
      description: language === 'ru'
        ? 'Концепция и структура сайта для заказа десертов'
        : 'Website concept and structure for dessert ordering',
      features: language === 'ru'
        ? [
            'Структура сайта',
            'Дизайн витрины',
            'Онлайн-заказ',
            'Визуальная концепция'
          ]
        : [
            'Site structure',
            'Storefront design',
            'Online ordering',
            'Visual concept'
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
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t.projects.subtitle}
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
                      <FiExternalLink /> {language === 'ru' ? 'Открыть сайт' : 'Open site'}
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
                    <FiGithub /> {t.projects.viewGithub}
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
