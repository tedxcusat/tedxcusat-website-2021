import React, { useEffect } from 'react';
import themeImage from './assets/theme-section-graphic.jpg'
import pauseIcon from './assets/pauseIcon.svg'
import resetIcon from './assets/Reset.svg'
import restartIcon from './assets/restart.svg'
import lax from 'lax.js'

function ThemeSection(props) {
    useEffect(() => {
        lax.init();
        lax.addDriver("scrollY", function () {
          return window.scrollY;
        });
        lax.addElements('.slideLeft', {
            scrollY: {
              translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [0, '-screenWidth/10', '-screenWidth/5'],
              ],
              opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 0.1, 0.2],
              ]
            }
          })
        lax.addElements('.slideRight', {
            scrollY: {
              translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['-screenWidth/5', '-screenWidth/10', 0],
              ],
              opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 0.1, 0.2],
              ]
            }
          })

      }, []);
    return (
        <section
            className="flex w-full bg-grey-500"
        >   
            <div className="hidden lg:block bg-red-500 w-4/12">
                <img className="sideLeft object-cover w-full h-full" src={themeImage} alt=""/>
            </div>
            <div className="relative flex p-10 flex-col w-full justify-center lg:w-8/12 md:p-20">
                <h2 className="text-3xl font-extrabold">THEME</h2>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-tedxRed">PAUSE. RESET. RESTART.</h1>
                <p className="text-xs sm:text-sm my-3 md:text-lg font-semibold md:my-5 max-w-4xl">
                    2020 has been a year unlike any other. The unfolding of a
                    global pandemic has ushered in a new wave of obstacles
                    that have challenged the human race on an unprecedented
                    scale. These challenging times have demonstrated the 
                    interconnected nature of our world. In spite of these struggles
                    we are constantly inspired by the millions of stories of courage,
                    compassion, and all the beautiful qualities that make us human.
                    Here at CUSAT we hope to channel our collective
                    vision as a species to the opportunity that this situation
                    presents us with. An opportunity to ‘hard reset’ the world and
                    begin afresh with new aspirations and ideas for the dynamic
                    and challenging times that we are journeying through.
                </p>
                <div 
                    className="flex flex-wrap my-5">
                    <div className="flex w-26 p-1 px-2 md:w-36 lg:w-48 md:p-3 md:px-5 justify-center rounded-lg items-center mr-2 md:mr-5 mb-5 bg-tedxRedDarker">
                        <img className="w-2 md:w-3 mr-2" src={pauseIcon} alt=""/>
                        <p className="text-base md:text-xl lg:text-2xl font-bold text-white">PAUSE</p>
                    </div>
                    <div className="flex w-26 p-1 px-2 md:w-36 lg:w-48  md:p-3 md:px-5 justify-center rounded-lg items-center mr-2 md:mr-5 mb-5 bg-tedxRedDarker">
                        <img className="w-3 md:w-7 mr-2" src={resetIcon} alt=""/>
                        <p className="text-base md:text-xl lg:text-2xl font-bold text-white">RESET</p>
                    </div>
                    <div className="flex w-26 p-1 px-2 md:w-36 lg:w-48  md:p-3 md:px-5 justify-center rounded-lg items-center mb-5 bg-tedxRedDarker">
                        <img className="w-3 md:w-7 mr-2" src={restartIcon} alt=""/>
                        <p className="text-base md:text-xl lg:text-2xl font-bold text-white">RESTART</p>
                    </div>
                </div>
                <div style={{zIndex: -10}} className="flex flex-col justify-evenly overflow-hidden absolute bottom-0 left-0 w-full h-full z-0">
                    <p className="slideLeft whitespace-nowrap text-9xl font-extrabold text-tedxRed opacity-10">PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART</p>
                    <p className="slideRight whitespace-nowrap text-9xl font-extrabold text-tedxRed opacity-10">RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART</p>
                    <p className="slideLeft whitespace-nowrap text-9xl font-extrabold text-tedxRed opacity-10">PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART</p>
                    <p className="slideRight whitespace-nowrap text-9xl font-extrabold text-tedxRed opacity-10">RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART RESTART PAUSE RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART</p>
                    <p className="slideLeft whitespace-nowrap text-9xl font-extrabold text-tedxRed opacity-10">RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART RESET RESTART PAUSE RESET RESTART PAUSE RESET RESTART</p>
                </div>
            </div>
        </section>
    );
}

export default ThemeSection;