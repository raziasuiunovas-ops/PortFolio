import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'ru'
    setLanguage(savedLang)
    document.body.setAttribute('data-lang', savedLang)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.body.setAttribute('data-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
