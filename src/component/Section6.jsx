import React from 'react'
import img16 from "../images/img-16.png"
import img17 from "../images/img-17.png"
import img18 from "../images/img-18.png"
import img19 from "../images/img-19.png"

export default function Section6() {
  return (
    <div className="Section-4 bg-white  pb-20">
    <div className="div-1 text-black font-bold font-[Poppins] flex justify-center text-2xl md:text-3xl lg:text-4xl pt-20 text-nowrap  ">
        <p>Blogs & News</p>
     </div>
     <div className="div-2 w-10/12  m-auto flex pt-28 pl-10 gap-20 md:gap-5 flex-wrap md:flex-nowrap">
     <div className="div-1 flex gap-10 flex-wrap lg:flex-nowrap">
     <div className="div-1 flex flex-col  gap-3 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center pb-20">
            <div className="img  bg-gradient-to-r from-gray-300 to-gray-300  rounded-t-full p-2 ">
                <img src={img16} alt="" className='rounded-t-full'/>
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Jaws, Martha’s <br />
                  Vineyard
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>26 April 2018</p>
            </div>
        </div>
        <div className="div-1 flex flex-col gap-3 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center md:pb-20 2xl:pb-0 ">
            <div className="img  bg-gradient-to-r from-gray-300 to-gray-300  rounded-t-full p-2">
                <img src={img17} alt="" className='rounded-t-full' />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Inception, Nijo <br /> Castle

                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>20 June 2019</p>
            </div>
        </div>
     </div>
      
      <div className="div-2 flex gap-10 flex-wrap lg:flex-nowrap">
      <div className="div-1 flex flex-col gap-3 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center pb-20 md:pb-0 ">
            <div className="img bg-gradient-to-r from-gray-300 to-gray-300  rounded-t-full p-2 ">
                <img src={img18} alt="" className='rounded-t-full' />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Pretty Woman, <br /> Beverly Hills
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>17 December 2020</p>
            </div>
        </div>
        <div className="div-1 flex flex-col gap-3 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center">
            <div className="img  bg-gradient-to-r from-gray-300 to-gray-300  rounded-t-full p-2 ">
                <img src={img19} alt="" className='rounded-t-full' />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Christ Church <br /> College, Oxford
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base ">
                <p>07 August 2021</p>
            </div>
        </div>
      </div>
     </div>
    </div>
    
  )
}
