import { useState, useEffect } from 'react'
import './App.css'
import MarketingPage from './pages/MarketingPage.tsx'
import AboutPage from './pages/AboutPage.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')

  // Прокрутка вверх при смене страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleNavigate = (page: 'home' | 'about') => {
    // Прокрутка вверх перед сменой страницы
    window.scrollTo({ top: 0, behavior: 'instant' })
    setCurrentPage(page)
  }

  return (
    <>
      {currentPage === 'home' ? (
        <MarketingPage onNavigate={handleNavigate} />
      ) : (
        <AboutPage onNavigate={handleNavigate} />
      )}
    </>
  )
}

export default App
