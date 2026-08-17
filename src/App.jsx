import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'text-white bg-[#11071F] min-h-screen'>
      <Header/>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  )
}

export default App
