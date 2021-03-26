import React from "react"
export default function PageNotFound() {
  return <main className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <img className="w-72 m-5" src="logo.png" alt="TEDxCUSAT Logo"/>
      <h1 className="text-2xl mx-auto md:text-4xl text-center text-tedxRed">Error 404! Page Not Found.</h1>
      <a className="text-white underline m-5" href="/">Go to TEDxCUSAT Homepage</a>
  </main>
}
