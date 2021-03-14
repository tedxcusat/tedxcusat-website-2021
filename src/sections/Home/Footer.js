import React from 'react';
import instagramIcon from './assets/instagram.svg'
import facebookIcon from './assets/facebook.svg'

function Footer(props) {
    return (
        <footer className="flex justify-between m-20">
            <div>
                <h1>© 2021 TEDxCUSAT.</h1>
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
        </footer>
    );
}

export default Footer;