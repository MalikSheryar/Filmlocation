import React from 'react'
import img5 from "../images/img-5.png"
import img8 from "../images/img-8.png"
import img9 from "../images/img-9.png"
import img10 from "../images/img-10.png"
import Cards from './Cards'

export default function Section3() {
  return (
    <>
    <div className="section-3 bg-[#F5F6F7]">
    <div className="main-div w-10/12 m-auto pb-20 pt-20 ">
     <div className="div-1 text-black font-bold font-[Poppins] flex justify-center text-3xl lg:text-5xl">
        <p>Services</p>
     </div>
    
    <div className='w-10/12 m-auto flex items-center justify-between gap-10 lg:gap-14 flex-wrap lg:flex-nowrap '>
     <Cards title="House" img5={img5} des1="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."/>
     <Cards title="Appartment" img5={img8} des1="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."/>
     <Cards title="Studios" img5={img9} des1="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."/>
     <Cards title="Warehouses" img5={img10} des1="Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."/>
    </div>

    </div>
    </div>
   
    </>
  )
}
