import React from 'react'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="hero-decoration decoration-1"></div>
        <div className="hero-decoration decoration-2"></div>
        <div className="hero-decoration decoration-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{t.hero.name}</h1>
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              {t.hero.btnWork}
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
              {t.hero.btnProjects} <FiArrowDown />
            </button>
          </div>
        </div>

        <div className="hero-resume">
          <div className="resume-card">
            <div className="resume-glow"></div>
            <embed
              src="/Beige Watercolor Resume CV Graphic Designer A3 Portrait_20261008_202015_0000.pdf"
              type="application/pdf"
              className="resume-embed"
            />
            <div className="resume-overlay">
              <a 
                href="/Beige Watercolor Resume CV Graphic Designer A3 Portrait_20261008_202015_0000.pdf" 
                download
                className="btn btn-primary resume-download"
              >
                <FiDownload /> {t.hero.downloadResume}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
