import { motion } from 'framer-motion';
import React from 'react';

function TicketsAreOut(props) {
    return (
        <motion.div
            initial={{ right: -300, opacity: 0 }}
            animate={{ right: 20, opacity: 1 }}
            transition= {{ delay: 5 }}
            className="flex flex-col fixed right-auto left-auto  md:right-5 bottom-5 w-11/12 md:w-86 max-w-md h-25 bg-tedxRed rounded-xl z-10 p-3 md-p-10 border-black border-solid border-4 shadow-md"   
        >
           <p className="text-white text-md text-center  md:text-3xl uppercase font-bold">Tickets are available now!</p>
           <p className="text-white text-sm text-center  md:text-md uppercase font-bold mt-4">Tickets are running out! Grab them ASAP!</p>
           <button onClick={()=>{window.location.href = "https://app.tedxcusat.in/payment"}} className="mx-auto px-5 py-3 font-bold text-black bg-white rounded-md mt-4" >Get them now!</button>
        </motion.div>
    );
}

export default TicketsAreOut;