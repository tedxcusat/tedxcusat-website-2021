import React from "react"
import '../styles/home.css'

import HeroSection from '../sections/Home/HeroSection'
import AboutSection from '../sections/Home/AboutSection'
import ThemeSection from '../sections/Home/ThemeSection'

export default function Home() {
  return <main>
    <HeroSection />
    <AboutSection />
    <ThemeSection />
  </main>
}
