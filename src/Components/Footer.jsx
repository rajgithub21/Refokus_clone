import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2 '>
                    <h1 className='text-[12rem]  leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 capitalize text-zinc-500'>socials</h4>
                        {["Instagram","X", "LinkedIn"].map((item,index)=>(
                            <a key={index} className='block mt-3 text-zinc-600 capitalize' href=''>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 capitalize text-zinc-500'>sitemap</h4>
                        {["Home","Work", "Careers","Contact"].map((item,index)=>(
                            <a key={index} className='block mt-3 text-white capitalize' href=''>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/2 flex flex-col items-end'>
                        <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                        <img className='mt-20' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                    </div>

                    
            </div>
        </div>
        <h1 className='mt-32  mb-10 text-6xl max-w-screen-xl mx-auto text-orange-600'> Clone developed and created by Raj Mishra</h1>
    </div>
  )
}

export default Footer