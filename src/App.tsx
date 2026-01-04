import { useState, useEffect } from 'react'
import './App.css'
import MarketingPage from './pages/MarketingPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import HelikandijateMuykPage from './pages/HelikandijateMuykPage.tsx'
import ArtistsPage from './pages/ArtistsPage.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'music-carriers' | 'artists'>('home')

  // Прокрутка вверх при смене страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleNavigate = (page: 'home' | 'about' | 'music-carriers' | 'artists') => {
    // Прокрутка вверх перед сменой страницы
    window.scrollTo({ top: 0, behavior: 'instant' })
    setCurrentPage(page)
  }

  return (
    <>
      {currentPage === 'home' ? (
        <MarketingPage onNavigate={handleNavigate} />
      ) : currentPage === 'about' ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : currentPage === 'music-carriers' ? (
        <HelikandijateMuykPage onNavigate={handleNavigate} />
      ) : (
        <ArtistsPage onNavigate={handleNavigate} />
      )}
    </>
  )
}

export default App
