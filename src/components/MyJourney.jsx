import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './MyJourney.css'

const MyJourney = () => {
  const [titleRef, titleVisible] = useScrollReveal({ once: true })
  const [timelineRef, timelineVisible] = useScrollReveal({ once: true })

  const journeySteps = [
    {
      title: 'Как я пришла в программирование',
      text: 'В IT меня просто тянуло. Мама поддержала меня и оплатила курсы — за что я очень благодарна.'
    },
    {
      title: 'Почему frontend',
      text: 'Начала с frontend как с входной точки в IT, постепенно изучая и backend, и дизайн.'
    },
    {
      title: 'Что было сложным',
      text: 'Основная сложность — совмещение IT с обычной школой. Но это научило меня дисциплине.'
    },
    {
      title: 'Главная победа',
      text: 'Сейчас я прохожу стажировку в Okrumen Studio — это переход от обучения к реальной практике.'
    },
    {
      title: 'Куда иду',
      text: 'Сейчас мой путь — AI Web Development: современные сайты, лендинги и интерфейсы.'
    }
  ]

  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div 
          ref={titleRef}
          className={`scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-center">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle text-center">
            Как я пришла в IT и куда иду дальше
          </p>
        </div>

        <div 
          ref={timelineRef}
          className="journey-timeline"
        >
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className={`journey-step stagger-item ${timelineVisible ? 'visible' : ''}`}
            >
              <div className="journey-number">{index + 1}</div>
              <div className="journey-content">
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyJourney
