import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width,start,para,tophead,head,hover}) {
  return (
    <motion.div  whileHover={{backgroundColor : hover==="true" ?  "#7443FF" : "#3E3E45",padding : "25px"}}   className={`bg-zinc-800 p-5  ${width} rounded-md   min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'> 
            <div className='w-full flex justify-between items-center'>
                <h3>{tophead}</h3>
                <IoIosArrowRoundForward />
            </div>
            <h1 className='text-3xl font-medium mt-5 w-1/3'>{head}</h1>
        </div>
        <div className='down w-full '>
            {
                start ===true ?(
                <>
                        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                        <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-500'>Contact Us</button>
                </>
                ) :null

            }
            {
                para ===true ? (
                    <>
                        <p className='text-sm text-zinc-500 w-1/2'>Web Design , Webflow Development and, Creative Development.</p>
                    </>
                ):null
            }
            
        </div>

        
        
        
    </motion.div>
  );
}

export default Card