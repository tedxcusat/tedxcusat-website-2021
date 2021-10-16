import React from "react"

export default function Beyond() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <h2 className="text-2xl capitalize font-bold">Beyond "The Talk"</h2>
      <p className="my-4 flex items-center text-sm">
        <span className="px-2 py-1 rounded-lg bg-white text-black font-bold">
          7:30PM
        </span>
        <span className="mx-2">•</span>
        <span className="px-2 py-1 rounded-lg bg-white text-black font-bold">
          16 OCTOBER 2021
        </span>
      </p>
      <button
        className="bg-tedxRed transform transition-all ease-in-out duration-300 text-white py-2 px-8 text-base font-bold uppercase mb-4 rounded-3xl"
        disabled
        // Remove style before event
        style={{ opacity: 0.5, cursor: "not-allowed" }}
        onClick={() => (window.location.href = "")}
      >
        Join the Event
      </button>
      <small className="font-bold text-white opacity-50">
        EVENT LINK WILL BE UPDATED 10 MINUTES PRIOR TO THE EVENT.
      </small>
    </div>
  )
}
