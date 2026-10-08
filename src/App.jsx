import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import TopAchievements from './components/TopAchievements'
import MyJourney from './components/MyJourney'
import Skills from './components/Skills'
import Projects from './components/Projects'
import YouTubeStory from './components/YouTubeStory'
import BeyondCode from './components/BeyondCode'
import WorkWithMe from './components/WorkWithMe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhoIAm />
      <TopAchievements />
      <MyJourney />
      <Skills />
      <Projects />
      <YouTubeStory />
      <BeyondCode />
      <WorkWithMe />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
