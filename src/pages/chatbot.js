import React from "react"
import { useEffect } from "react"
import Helmet from 'react-helmet'

export default function ChatBot() {

    useEffect(()=>{
        window.location.replace("http://wa.me/918075217002?text=Hi");
    },[])
  return <main className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>TEDxCUSAT Chatbot</title>
        <meta name="title" content="TEDxCUSAT 2021" />
        <meta name="description" content="Official Chatbot for TEDxCUSAT 2021."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://tedxcusat.in/"/>
        <meta property="og:title" content="TEDxCUSAT 2021" />
        <meta property="og:description" content="Official Chatbot for TEDxCUSAT 2021."/>
        <meta property="og:image" content="https://tedxcusat.in/og.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://tedxcusat.in/"/>
        <meta property="twitter:title" content="TEDxCUSAT 2021"/>
        <meta property="twitter:description" content="Official Chatbot for TEDxCUSAT 2021."/>
        <meta property="twitter:image" content="https://tedxcusat.in/og.jpg"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e11010" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
       </Helmet>
      <img className="w-72 m-5" src="/logo.png" alt="TEDxCUSAT Logo"/>
      <h1 className="text-2xl mx-auto md:text-4xl text-center text-tedxRed">Redirecting to chatbot.....</h1>
  </main>
}
