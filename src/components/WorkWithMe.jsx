import React from 'react'
import { FiSend, FiMail, FiGithub, FiPhone } from 'react-icons/fi'
import { SiTelegram } from 'react-icons/si'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './WorkWithMe.css'

const WorkWithMe = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [contentRef, contentVisible] = useScrollReveal({ once: true })

  const contacts = [
    {
      icon: <SiTelegram />,
      label: 'Telegram',
      value: '@RAXNVU',
      link: 'https://t.me/RAXNVU',
      primary: true
    },
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'raziasuiunovas@gmail.com',
      link: 'mailto:raziasuiunovas@gmail.com',
      primary: false
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'raziasuiunovas-ops',
      link: 'https://github.com/raziasuiunovas-ops',
      primary: false
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+996 554 19 04 10',
      link: 'tel:+996554190410',
      primary: false
    }
  ]

  const services = [
    'Frontend разработка',
    'Адаптивные лендинги',
    'Сайты-витрины',
    'Web-приложения на React'
  ]

  return (
    <section className="work-with-me section" id="contact">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle text-center">
            Ищу возможности для работы, проектов и командного сотрудничества
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`work-content scroll-reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="work-info">
            <h3>Что я предлагаю:</h3>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <div className="cta-box">
              <p>Готова обсудить ваш проект или присоединиться к команде</p>
              <a 
                href="https://t.me/RAXNVU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <FiSend /> Написать мне
              </a>
            </div>
          </div>

          <div className="work-contacts">
            <h3>Контакты:</h3>
            <div className="contacts-list">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`contact-card card ${contact.primary ? 'primary' : ''}`}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-info">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWithMe
