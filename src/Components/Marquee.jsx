import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imagesurl ,dir}) {
  return (
    <div className='flex w-full  overflow-hidden'>
      <motion.div  initial={{x:dir==="left" ? "0" : "-100%"}} animate={{x:dir==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration : 40,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imagesurl.map((val,index)=><img key={index} className='' src={val} />)}
      </motion.div>
      <motion.div  initial={{x:dir==="left" ? "0" : "-100%"}} animate={{x:dir==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration : 40,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imagesurl.map((val,index)=><img key={index} className='' src={val} />)}
      </motion.div>
       
        
    </div>
  )
}

export default Marquee