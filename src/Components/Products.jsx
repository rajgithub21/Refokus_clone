import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'framer-motion';
function Products() {
    var products=[
        {
            title : "arqitel",
            description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate",
            live : true,
            case:false,
        },
         {
            title : "Cula",
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live : true,
            case:false,
        },
         {
            title : "webflow",
            description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live : true,
            case:true,
        },
         {
            title : "refokus",
            description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live : true,
            case:false,
        },
         {
            title : "MAN / V",
            description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live : true,
            case:true,
        },
         {
            title : "Silvr",
            description:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live : true,
            case:false,
        },
    ];
  const [pos,setpos]= useState(0);
  const mover=(val)=>{
    setpos(val*23);
  }
  return (
    <div className='mt-32 relative'>
        {products.map((val,index)=> <Product key={index} val={val} mover={mover} count={index}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
            <motion.div 
            initial={{y:pos ,x:"-50%"}}
            animate={{y:pos+`rem`}}
            transition={{ease : [0.76, 0, 0.24, 1] , duration:0.6}}
            className=' absolute w-[32rem] h-[23rem] bg-white left-[44%] -translate-x-[50%] overflow-hidden rounded-[7%] '>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className=' w-full h-full bg-sky-100   '>
                        <img  className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp" alt="" />
                    </motion.div>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className=' w-full h-full bg-sky-200   '>
                       <img   className="w-full h-full object-cover"  src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png" alt="" />

                    </motion.div>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className='  w-full h-full bg-sky-300   '>
                        <img  className="w-full h-full object-cover"  src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-800.webp" alt="" />

                    </motion.div>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className='  w-full h-full bg-sky-400   '>
                       <img  className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg" alt="" />
                    </motion.div>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className='  w-full h-full bg-sky-500   '>
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png" alt="" />
                    </motion.div>
                    <motion.div  transition={{ease : [0.76, 0, 0.24, 1] , duration:0.5}}
                    animate={{y:-pos + `rem`}} className='  w-full h-full bg-sky-600   '>
                        <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg" alt="" />
                    </motion.div>

            </motion.div>
        </div>
    </div>
  );
}

export default Products