import React, {useState} from "react"
import '../styles/home.css'

import HeroSection from '../sections/Home/HeroSection'
import AboutSection from '../sections/Home/AboutSection'
import ThemeSection from '../sections/Home/ThemeSection'
import TalksSpeakers from '../sections/Home/TalksSpeakers'
import Footer from '../sections/Home/Footer'
import Navbar from '../common/Navbar'
import Helmet from 'react-helmet'

// import AnimatedCursor from "react-animated-cursor";
import SponsorsSection from "../sections/Home/SponsorsSection"
// import TicketsAreOut from "../sections/Home/TicketsAreOut"

export default function Home() {
  let [isCanvasLoaded,setIsCanvasLoaded] = useState(false)
    // const isSSR = typeof window === "undefined"
  return <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TEDxCUSAT 2021</title>
        <meta name="title" content="TEDxCUSAT 2021" />
        <meta name="description" content="Official website for TEDxCUSAT 2021."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://tedxcusat.in/"/>
        <meta property="og:title" content="TEDxCUSAT 2021" />
        <meta property="og:description" content="Official website for TEDxCUSAT 2021."/>
        <meta property="og:image" content="https://tedxcusat.in/og.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://tedxcusat.in/"/>
        <meta property="twitter:title" content="TEDxCUSAT 2021"/>
        <meta property="twitter:description" content="Official website for TEDxCUSAT 2021."/>
        <meta property="twitter:image" content="https://tedxcusat.in/og.jpg"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e11010" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {
            `{
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "TEDxCUSAT 2021",
              "startDate": "2021-04-05",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://tedxcusat.in/"
              },
              "performer": {
                "@type": "PerformingGroup",
                "name": "TEDxCUSAT Curated Speakers"
              },
              "offers": {
                "@type": "Offer",
                "name": "Ticket",
                "price": "199",
                "priceCurrency": "INR",
                "validFrom": "",
                "url": "https://tedxcusat.in/tickets",
                "availability": "https://schema.org/InStock"
              }
            }`
          }
        </script>
      </Helmet>
    {/* {!isSSR && (
      <AnimatedCursor
        innerSize={5}
        outerSize={25}
        color='255, 0, 0'
        outerAlpha={0.5}
        innerAlpha={0.8}
        innerScale={1}
        outerScale={5}
      />)} */}
      {!isCanvasLoaded && <div style={{zIndex: 60}} className="fixed top-0 left-0 bg-black w-screen h-screen"></div>}
      <Navbar />
      <HeroSection isCanvasLoaded={isCanvasLoaded} setIsCanvasLoaded={setIsCanvasLoaded}/>
      {/* <TicketsAreOut /> */}
      <AboutSection />
      <ThemeSection />
      <SponsorsSection />
      <TalksSpeakers />
      <Footer />
  </main>
}
