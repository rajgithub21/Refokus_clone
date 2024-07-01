import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-black text-white '>
            <Navbar></Navbar>
            <Work></Work>
            <Stripes></Stripes>
            <Products></Products>
            <Marquees></Marquees>
            <Cards></Cards>
            <Footer></Footer>
    </div>
  )
}

export default App