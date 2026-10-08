import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './WhoIAm.css'

const WhoIAm = () => {
  const [textRef, textVisible] = useScrollReveal({ once: true })
  const [statsRef, statsVisible] = useScrollReveal({ once: true })

  return (
    <section className="who-i-am section" id="about">
      <div className="container">
        <div className="who-i-am-content">
          <div 
            ref={textRef}
            className={`who-i-am-text scroll-reveal-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title">
              Who <span className="gradient-text">I Am</span>
            </h2>
            <div className="text-content">
              <p>
                Я — самостоятельная и целеустремлённая начинающая фронтенд-разработчица из Бишкека.
              </p>
              <p>
                Совмещаю учёбу на отлично в школе, интенсивное обучение в IT-академии «Окурмен», 
                изучение иностранных языков и создание контента.
              </p>
              <p>
                Быстро обучаюсь, умею работать в многозадачности и доводить проекты до результата.
              </p>
              <p>
                Сейчас прохожу стажировку в <strong>Okrumen Studio</strong> и ищу возможности расти 
                в направлении <strong>AI Web Development</strong>.
              </p>
            </div>
          </div>

          <div 
            ref={statsRef}
            className={`who-i-am-stats scroll-reveal-right ${statsVisible ? 'visible' : ''}`}
          >
            <div className="stat-item">
              <div className="stat-value gradient-text">16</div>
              <div className="stat-label">years old</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">4</div>
              <div className="stat-label">languages</div>
            </div>
            <div className="stat-item">
              <div className="stat-value gradient-text">Bishkek</div>
              <div className="stat-label">based in</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoIAm
