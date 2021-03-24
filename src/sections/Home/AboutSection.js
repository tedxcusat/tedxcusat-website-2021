import React from 'react';

function AboutSection(props) {
    return (
        <section
            id="about"
            style={{background: 'linear-gradient(180deg, #290101 0%, #000000 30%)'}}
        >   
            <div
                className={`
                bg-black text-white p-20 px-5 lg:px-4 flex flex-col items-center justify-center
                lg:flex-row
            `}
            >
                <h1 className="text-center mb-7 leading-10 text-tedxRed text-4xl font-semibold mx-10 lg:text-right lg:leading-loose ">ABOUT<br className="m-5"/>TEDxCUSAT</h1>
                <div
                    style={{ 
                        width: 2,
                        minHeight: 300,
                        maxHeight: '100%',
                        background: 'white',
                    }}
                    className="hidden lg:block"
                ></div>
                <p  
                    className="about-text mx-2 max-w-2xl text-center text-sx lg:text-left lg:text-lg lg:mx-10">
                    We present to you the second edition of TEDxCUSAT with the aim of
                    celebrating the idea of ‘TED - Ideas Worth Spreading’ at the Cochin
                    University of Science and Technology campus. This season will give
                    a platform for the people from all walks of life who help, inspire and
                    catalyse our lives into powerful and better versions of ourselves. We believe that genius
                    ideas are generated when different people come together under one
                    roof and these ideas have the potential to mould attitudes, society
                    and ultimately the world. Such stories of endeavour and experience
                    will urge us to doubt reasons, redefine our definitions and play a vital
                    role in progressing forward for the greater good. All set to ignite some
                    sweet rebellions and ask many big questions, the second edition of
                    TEDxCUSAT is going to break the silence and crush the norms of life.
                    Are you ready to be radically open about the stuff of life? But we are..!!
                </p>
            </div>
            <div className= "flex flex-wrap min-w-full max-w-md content-around justify-center mx-auto pb-20 bg-green-400">
                <img className="about-image rounded-lg mx-2 w-1/3 h-1/6 md:w-2/12 md:1/12 md:mx-7 mb-5" src="/aboutPhotos/ab-p-1.jpg" width="200" height="100" alt=""/>
                <img className="about-image rounded-lg mx-2 w-1/3 h-1/6 md:w-2/12 md:1/12 md:mx-7 mb-5" src="/aboutPhotos/ab-p-2.jpg" width="200" height="100" alt=""/>
                <img className="about-image rounded-lg mx-2 w-1/3 h-1/6 md:w-2/12 md:1/12 md:mx-7 mb-5" src="/aboutPhotos/ab-p-3.jpg" width="200" height="100" alt=""/>
                <img className="about-image rounded-lg mx-2 w-1/3 h-1/6 md:w-2/12 md:1/12 md:mx-7 mb-5" src="/aboutPhotos/ab-p-4.jpg" width="200" height="100" alt=""/>
            </div>
        </section>
    );
}

export default AboutSection;