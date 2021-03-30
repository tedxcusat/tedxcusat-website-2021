import React from 'react';
import instagramIcon from './assets/instagram.svg'
import facebookIcon from './assets/facebook.svg'

function Footer(props) {
    return (
        <footer className="flex flex-col">
            <h4 className="text-center mt-10 mb-2 text-2xl">Contact:</h4>
            <div className="flex flex-wrap justify-center mt-2 text-white">
                <div className="flex flex-col p-5 m-5 rounded-lg"
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                      }}
                >
                    <p className="font-bold text-lg">Ahmed Ismail</p>
                    <p>Organizer, TEDxCUSAT 2020-21</p>
                    <a href="tel: +917561081873">Ph No: 7561081873</a>
                    <a href="mailto: ahmedismail5100@gmail.com">ahmedismail5100@gmail.com</a>
                </div>
                <div className="flex flex-col p-5 m-5 rounded-lg "
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                      }}
                >
                    <p className="font-bold text-lg">Midhun P</p>
                    <p>Organizer, TEDxCUSAT 2020-21</p>
                    <a href="tel: +917592959768">Ph No: 7592959768</a>
                    <a href="mailto: midhunr913@gmail.com">midhunr913@gmail.com</a>
                </div>
            </div>
            <div className="flex justify-between my-10 mx-20">
                <div>
                    <h1>© 2021 TEDxCUSAT.</h1>
                    <a href="https://tedxcusat.in/terms.pdf">Terms & Conditions.</a>
                </div>
                <div className="flex">
                    <a 
                        href="https://www.instagram.com/tedxcusat/">
                        <img className="w-5 mr-3" src={instagramIcon} alt=""/>   
                    </a>
                    <a 
                        href="https://www.facebook.com/tedxcusat21/">
                        <img className="w-5" src={facebookIcon} alt=""/>   
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;