import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarketingPage from './pages/MarketingPage.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MarketingPage />
    </>
  )
}

export default App
