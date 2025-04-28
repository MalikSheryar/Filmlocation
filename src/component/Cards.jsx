import React from 'react'
import img7 from "../images/img-7.png"

export default function Cards(props) {
  return (
    <>
     <div className="cards flex pt-20 ">
        <div className="cards-1 cursor-pointer flex flex-col justify-center items-center rounded-full bg-white p-10 2xl:p-0 2xl:py-5 md:py-10  gap-5 hover:bg-[#D6D8FB] hover:-translate-y-9 transition-transform duration-[500ms] ">
         <img src={props.img5} alt="" />
         <p className='text-center text-black font-bold font-[Poppins] text-xl md:text-3xl lg:text-sm 2xl:text-xl'>{props.title}</p>
         <p className='text-center text-black font-normal font-[Poppins] text-xs md:text-2xl lg:text-sm 2xl:text-base'>{props.des1}</p>
         <img src={img7} alt="" />
        </div>
     </div>
    </>
  )
}
