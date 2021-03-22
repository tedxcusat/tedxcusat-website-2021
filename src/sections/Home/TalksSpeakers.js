import React, { useEffect, useRef } from 'react';
import lax from 'lax.js'
import useScrollBox from './useScrollBox';

import ACKphoto from './assets/ack.jpg'
import qnMarkPhoto from './assets/qnsmark.jpg'
import instagramIcon from './assets/instagram.svg'

function TalksSpeakers(props) {
    useEffect(() => {
        
        lax.addElements('.slideLeftTalks', {
            scrollY: {
              translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [0, '-screenWidth/20', '-screenWidth/10'],
              ],
              opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 0.1, 0.0],
              ]
            }
          })
        lax.addElements('.slideRightTalks', {
            scrollY: {
              translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['-screenWidth/10', '-screenWidth/20', 0],
              ],
              opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 0.1, 0],
              ]
            }
          })

      }, []);
    const scrollWrapperRef = useRef();
    const { isDragging } = useScrollBox(scrollWrapperRef);
    return (
        <section
        id="talks"
            className="flex w-full justify-center bg-grey-500 relative min-h-screen rounded-b-3xl shadow-2xl"
        >   
          <div className="w-10/12 md:w-5/12 lg:w-4/12 p-5 my-20 mb-32 pb-10" style={{
            background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
            boxShadow: '0px 40px 80px rgba(255, 0, 0, 0.58)',
            borderRadius: 18,
            minHeight: 300,
            maxHeight: 750,
            height: 750
          }}>
            <div>
              <h1 className="text-4xl text-center text-white font-semibold my-5" >Talks & Speakers</h1>
              <p className="my-5 text-sm text-center text-white">Some content here please. arelum o content thaa. ivide vallom idanam. balh bleh blooo bleehh</p>
            </div>
            <div 
              ref={scrollWrapperRef}
              style={{ userSelect: 'none', cursor: isDragging ? 'grabbing' : 'grab', pointerEvents: isDragging ? 'none' : undefined}}
              className="flex absolute w-full pl-5 pr-10 -left-0 no-scrollbar overflow-x-scroll p-5 my-5 box-border" >
              <SpeakerCard 
                speakerName="Mr. ACK Nair"
                designation="Director, CIAL"
                talkTitle="i dont know bro"
                photo={ACKphoto}
              />
              <SpeakerCard data={2}/>
              <SpeakerCard data={3}/>
              <SpeakerCard data={4}/>
              <SpeakerCard data={5}/>
              <SpeakerCard data={6}/>
            </div>
          </div>
          
          <div style={{zIndex: -10}} className="flex flex-col justify-evenly overflow-hidden absolute bottom-0 left-0 w-full h-full z-0">
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideRightTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideRightTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideRightTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideRightTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
                <p className="slideLeftTalks whitespace-nowrap text-6xl font-normal text-tedxRed opacity-10">TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT TEDxCUSAT</p>
          </div>
        </section>
    );
}

export default TalksSpeakers;

let SpeakerCard = ({speakerName,designation,talkTitle,photo}) =>{
  return <div className="w-64 flex-shrink-0 rounded-xl shadow-md bg-white mx-5 overflow-hidden hover:scale-125 hover:mx-10">
    <img src={photo || qnMarkPhoto} className="w-full rounded-xl" draggable="false"  alt=""/>
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-2">{speakerName || 'Speaker Releasing Soon'}</h1>
      <div className="text-normal">{designation || <div className="flex items-center justify-center">
        <p className="text-xs">Watch out for latest speaker release on INstagram</p><a 
            href="https://www.instagram.com/tedxcusat/">
            <img className="w-5 mr-3" src={instagramIcon} alt=""/>   
        </a>
      </div> }
         </div>
         {talkTitle && <p className="text-tedxRed uppercase font-semibold mt-5">{talkTitle}</p>}
    </div>
  </div>
}