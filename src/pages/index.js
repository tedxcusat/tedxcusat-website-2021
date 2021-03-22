import React from "react"
import '../styles/home.css'

import HeroSection from '../sections/Home/HeroSection'
import AboutSection from '../sections/Home/AboutSection'
import ThemeSection from '../sections/Home/ThemeSection'
import TalksSpeakers from '../sections/Home/TalksSpeakers'
import Footer from '../sections/Home/Footer'
import Navbar from '../common/Navbar'
import AnimatedCursor from "react-animated-cursor";
// import { SmoothProvider } from 'react-smooth-scrolling'

export default function Home() {
  return <main>
      <AnimatedCursor
        innerSize={5}
        outerSize={25}
        color='255, 0, 0'
        outerAlpha={0.5}
        innerAlpha={0.8}
        innerScale={1}
        outerScale={5}
      />
      <Navbar />
    {/* <SmoothProvider skew={false}> */}
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <TalksSpeakers />
      <Footer />
    {/* </SmoothProvider> */}
  </main>
}
