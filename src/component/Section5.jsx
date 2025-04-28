import React from 'react'
import img15 from "../images/img-15.png"

export default function Section5() {
  return (
   <>
   <div className="Section-5 bg-black pt-20 pb-20 ">
   <div className="div-1 w-10/12 m-auto flex flex-col justify-items-center items-center">
    <div className="para text-white font-bold font-[Poppins] text-sm md:text-xl lg:text-3xl xl:text-4xl">
      <p>Best Film Location of the month</p>
    </div>
    <div className="para text-white font-normal font-[Poppins] text-xs md:text-lg lg:text-xl xl:text-2xl">
      <p>Lord of the Rings, Matamata</p>
    </div>
   </div>
   <div className="div-2 w-9/12 m-auto pt-10">
    <div className="img">
    <img src={img15} alt="" />
    </div>
   </div>
   </div>
  
   </>
  )
}
