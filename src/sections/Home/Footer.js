import React from "react"
import instagramIcon from "./assets/instagram.svg"
import facebookIcon from "./assets/facebook.svg"

function Footer(props) {
  return (
    <footer className="flex flex-col">
      <h4 className="text-center mt-10 mb-2 text-2xl">Contact:</h4>
      <div className="flex flex-wrap justify-center mt-2 text-white">
        <div
          className="flex flex-col p-5 m-5 rounded-lg"
          style={{
            background: "linear-gradient(180deg, #E12200 0%, #BC1C00 100%)",
            boxShadow: "0px 10px 40px rgba(255, 0, 0, 0.58)",
          }}
        >
          <p className="font-bold text-lg">Suryanarayanan R</p>
          <p>Organizer, TEDxCUSAT 2021-22</p>
          <a href="tel: +919446114249">Ph No: 9446114249</a>
          <a href="mailto: surya@tedxcusat.in">surya@tedxcusat.in</a>
        </div>
        <div
          className="flex flex-col p-5 m-5 rounded-lg "
          style={{
            background: "linear-gradient(180deg, #E12200 0%, #BC1C00 100%)",
            boxShadow: "0px 10px 40px rgba(255, 0, 0, 0.58)",
          }}
        >
          <p className="font-bold text-lg">Thamanna Azhar</p>
          <p>Organizer, TEDxCUSAT 2021-22</p>
          <a href="tel: +919747051190">Ph No: 9747051190</a>
          <a href="mailto: thamanna@tedxcusat.in">thamanna@tedxcusat.in</a>
        </div>
      </div>
      <div className="flex justify-between my-10 mx-20">
        <div>
          <h1>© 2021 TEDxCUSAT.</h1>
          <a href="https://tedxcusat.in/terms.pdf">Terms & Conditions.</a>
        </div>
        <div className="flex">
          <a href="https://www.instagram.com/tedxcusat/">
            <img className="w-5 mr-3" src={instagramIcon} alt="" />
          </a>
          <a href="https://www.facebook.com/tedxcusat21/">
            <img className="w-5" src={facebookIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
