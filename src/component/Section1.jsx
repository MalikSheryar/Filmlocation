import React from 'react'
import Navbar from './Navbar'
import img1 from '../images/img1.png'

export default function Section1() {
  return (
   <>

 <div className="div-1 bg-cover bg-no-repeat  h-screen w-full"
       style={{ backgroundImage: `url(${img1})` }} >
         <Navbar/>
         <div className="text flex justify-center pt-48 md:pt-80 lg:pt-[500px] xl:pt-[700px] 2xl:pt-80 flex-col items-center text-center">
      <div className="text-1 text-white font-bold text-lg md:text-4xl lg:text-7xl 2xl:text-5xl " style={{fontFamily:'Poppins'}}>
        <p>Best  Locations  Around  The  World</p>
      </div>
      <div className="text-2 text-white opacity-75 font-normal flex-wrap text-xs lg:text-xl 2xl:text-sm" style={{fontFamily:'Poppins'}}>
        <p>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
      </div>
    </div>
 </div>

 

  
 


   </>
  )
}
