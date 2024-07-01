import React, { useState } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
  const [images,setimages]=useState([
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",  top:"50%",    left:"50%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",  top:"56%",  left:"44%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-800.webp",top:"45%",left:"56%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",top:"60%",left:"53%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",top:"43%",left:"40%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg",top:"65%",left:"55%",isActive:false},
    ]);
    const{ scrollYProgress }=useScroll();
    scrollYProgress.on("change", (data) => {
        function imagesShow(arr){
          setimages(prev=> prev.map((item,index)=>  arr.indexOf(index) === -1 ? {...item ,isActive:false} : {...item,isActive:true}
            )
          );
        }
        switch(Math.floor(data*100)){
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);
            break;
          case 2:
            imagesShow([0,1]);
            break;
          case 3:
            imagesShow([0,1,2]);
            break;
          case 4:
            imagesShow([0,1,2,3]);
            break;
          case 6:
            imagesShow([0,1,2,3,4]);
            break;
          case 8:
            imagesShow([0,1,2,3,4,5]);
            break;
        }
    })

  return (
    <div className='w-full mt-20'>
        <div className='relative max-w-screen-xl mx-auto text-center '>
            <h1 className='text-[30vw] leading-none font-medium | tracking-tight select-none'>work</h1>
            <div className='w-full h-full absolute top-0'>
                {images.map((elem,index)=>(elem.isActive && (<img key={index} className=' absolute w-60 rounded-md -translate-x-[50%] -translate-y-[50%]'  
                        src={elem.url} 
                        alt="" 
                        style={{top:elem.top ,left:elem.left}}/>)))}
            </div>
        </div>
        
    </div>
  )
}

export default Work