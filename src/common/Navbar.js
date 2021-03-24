import React, { useState } from 'react';
import logo from '../sections/Home/assets/logo.png'
// import { Link } from "gatsby"
import styled from 'styled-components'
import HamburgerMenu from 'react-hamburger-menu'
import { motion, AnimatePresence } from "framer-motion"
import scrollTo from 'gatsby-plugin-smoothscroll';


function Navbar(props) {
    let navLinks = [
        {
            linkName: 'About',
            linkUrl: '#about',
        },
        {
            linkName: 'Theme',
            linkUrl: '#theme'
        },
        {
            linkName: 'Talks and Speakers',
            linkUrl: '#talks'
        },
        {
            linkName: 'Sponsors',
            linkUrl: '#sponsors'
        },
        
    ]
    let [isHamOpen,setIsHamOpen] = useState(false)
    return (
        <StyledNav>
            <div>
                <img src={logo} className="nav-logo" alt=""/>
            </div>
            <div className="nav-link-container">
                {
                    navLinks.map((navLink,id)=>{
                        return <button 
                            onClick={() => scrollTo(navLink.linkUrl)}
                            key={id} className="nav-link" style={{textDecoration: 'none'}}> 
                            {navLink.linkName}
                        </button>
                    })
                }
            </div>
                <button className="nav-btn">Tickets soon!</button>
            <HamburgerMenu
                isOpen={isHamOpen}
                menuClicked={()=>{setIsHamOpen(!isHamOpen)}}
                width={20}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='#FF4920'
                borderRadius={0}
                animationDuration={0.5}
                className="ham-menu-btn"
            />
            
            <AnimatePresence>
                {
                    isHamOpen && <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: 'fit-content' }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="ham-menu-list"
                                >
                                    {
                                        navLinks.map((navLink,id)=>{
                                            return <button 
                                                onClick={() => scrollTo(navLink.linkUrl)}
                                                key={id} className="ham-nav-link" style={{textDecoration: 'none'}}> 
                                                {navLink.linkName}
                                            </button>
                                        })
                                    }
                            <button className="nav-btn">Tickets soon!</button>
                    </motion.div>
                }
            </AnimatePresence>
            
            
        </StyledNav>
    );
}

export default Navbar;

let StyledNav = styled.nav`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.473);
    backdrop-filter: blur(20px);
    box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.623);
    border-radius: 16px;
    max-width: 1200px;
    width: 80vw;
    z-index: 20;
    color: white;
    outline: none;
    .nav-link-container{
        display: flex;
    }
    .nav-logo{
        width: 200px
    }
    .ham-menu-btn{
        display: none;
        cursor: pointer;
    }
    .ham-menu-list{
        position: fixed!important;
        max-width: 1200px;
        width: 95vw;
        background: rgba(0, 0, 0, 0.473);
        box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.623);
        display: flex;
        backdrop-filter: blur(100px);
        align-items: center;
        flex-direction: column;
        top: 100px;
        left: 0;
        display: none;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 20px;
        overflow: hidden;
        height: fit-content;
        z-index: 10; 
    }
    .ham-nav-link{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 17px;
        margin: 10px 4px;
        text-transform: uppercase;
    }
    .nav-link{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        font-weight: bold;
        line-height: 17px;
        margin: 0 10px;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
        :hover{
            background-color: rgba(255, 0, 0, 0.171);
        }
    }
    .ham-nav-button{
        margin-top: 10px;
    }
    .nav-btn{
        padding: 5px 10px;
        background-color: #D92002;
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
    }
    @media only screen and (max-width: 1160px){
        width: 95vw;
        .ham-menu-btn, .ham-menu-list{
            display: flex;
        }
        .nav-link,.nav-btn{
            display: none;
        }

    }
`
