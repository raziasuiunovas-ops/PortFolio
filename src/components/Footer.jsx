import React from 'react'
import { FiGithub, FiMail } from 'react-icons/fi'
import { SiTelegram } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo gradient-text">razziyu</h3>
            <p className="footer-tagline">Building digital experiences with passion</p>
          </div>

          <div className="footer-social">
            <a 
              href="https://github.com/raziasuiunovas-ops" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href="https://t.me/RAXNVU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Telegram"
            >
              <SiTelegram />
            </a>
            <a 
              href="mailto:raziasuiunovas@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Razia Suiunova</p>
          <p>Built with React • Designed with love</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
