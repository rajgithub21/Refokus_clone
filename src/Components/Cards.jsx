import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto  py-20 flex gap-2'>
            <Card width={"basis-1/3"}  start={false} para={true} 
            tophead={"Up Next : Projects"}  head={"Projects and Case Studies"} hover={"false"}/>
            <Card width={"basis-2/3"} 
            start={true} para={false}
            tophead={"Get in Touch"} head={"Let's get to it , together."} hover={"true"}/>
        </div>
    </div>
  )
}

export default Cards