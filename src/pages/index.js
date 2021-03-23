import React from "react"
import '../styles/home.css'

import HeroSection from '../sections/Home/HeroSection'
import AboutSection from '../sections/Home/AboutSection'
import ThemeSection from '../sections/Home/ThemeSection'
import TalksSpeakers from '../sections/Home/TalksSpeakers'
import Footer from '../sections/Home/Footer'
import Navbar from '../common/Navbar'
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const isSSR = typeof window === "undefined"
  return <main>
    {!isSSR && (
      <AnimatedCursor
        innerSize={5}
        outerSize={25}
        color='255, 0, 0'
        outerAlpha={0.5}
        innerAlpha={0.8}
        innerScale={1}
        outerScale={5}
      />)}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <TalksSpeakers />
      <Footer />
  </main>
}
