import React from 'react';

function SponsorsSection(props) {
    return (
        <section
            id="partners"
            className="p-4 pt-10 bg-gray md:p-20"
        >   
            <h1 className="text-center text-tedxRed text-5xl font-extrabold uppercase mb-4">PARTNERS</h1>
            <div  style={{maxWidth: 700}} className="flex flex-col w-12/12 md:w-10/12 mx-auto text-center">
                <div className="m-1 w-100 md:m-4 md:w-50">
                    <p className="text-xl font-extrabold uppercase">Platinum partner</p>
                    <img 
                        
                        className="w-52 my-5 mx-auto" src="masstree.png" alt=""></img>
                    <p style={{ fontSize: 15 }} className="text-center text-sx md:text-sm lg:text-center lg:text-lg">
                        Mastree is a Bengaluru-based, online global platform for innovative and
                        outcome-driven Education Technology company. Mastree offers online learning
                        solutions that aim to strengthen the fundamentals of students through proven
                        pedagogical principles in the K-12 space. With a vision of enabling every child
                        to realize and reach their learning potential, Mastree’s proprietary platform
                        provides training to children in reading, listening, writing, speaking, and
                        learning Mathematics as a language, resulting in conceptual understanding and
                        heightening their curiosity.
                    </p>
                </div>
                <div>
                <div className="m-5">
                    <p className="text-xl font-extrabold uppercase">Tech partner</p>
                    <img className="w-52 my-5 mx-auto" src="chatveda.png" alt=""></img>
                </div>
                </div>
            </div>
            <h4 className="text-3xl md:text-5xl m-10 font-bold text-tedxRed text-center">TEDxCUSAT 2021</h4>
            <div className="flex flex-wrap justify-center mt-2 text-white">
                <div className="flex flex-col p-5 m-5 rounded-lg"
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                        width: 250,
                        height: 100,
                      }}
                >
                    <p className="font-bold text-center text-lg">1. Grab your tickets</p>
                </div>
                <div className="flex flex-col p-5 m-5 rounded-lg "
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                        width: 250,
                        height: 100,
                      }}
                >
                    <p className="font-bold text-center text-lg">2. Login TEDxCUSAT website</p>
                </div>
                <div className="flex flex-col p-5 m-5 items-center rounded-lg "
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                        height: 100,
                        width: 250,
                      }}
                >
                    <p className="font-bold text-center text-lg">3. Stream tedxcusat.in on 5th April at 6:00 pm</p>
                </div>
                <div className="flex flex-col p-5 m-5 items-center rounded-lg"
                    style={{
                        background: 'linear-gradient(180deg, #E12200 0%, #BC1C00 100%)',
                        boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.58)',
                        width: 250,
                        height: 100,
                      }}
                >
                    <p className="font-bold text-center text-lg">4. Enjoy the talk!</p>
                </div>
            </div>
        </section>
    );
}

export default SponsorsSection;