import React from 'react';

function SponsorsSection(props) {
    return (
        <section
            id="partners"
            className="p-4 bg-gray md:p-20"
        >   
            <h1 className="text-center text-tedxRed text-5xl font-extrabold uppercase mb-4">SPONSORS</h1>
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
        </section>
    );
}

export default SponsorsSection;