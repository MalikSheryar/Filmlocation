import React from 'react'
import img11 from  "../images/img-11.png"
import img12 from  "../images/img-12.png"
import img13 from  "../images/img-13.png"
import img14 from  "../images/img-14.png"


export default function Section4() {
  return (
    <>
    <div className="Section-4 bg-[#F5F6F7] pb-20">
    <div className="div-1 text-black font-bold font-[Poppins] flex justify-center text-xl lg:text-4xl pt-20 text-nowrap ">
        <p>Film Locations and Pricing</p>
     </div>
     <div className="div-2 w-10/12 m-auto flex pt-40 gap-40 md:gap-5 flex-wrap md:flex-nowrap   ">
     <div className="div-1 flex gap-10 flex-wrap lg:flex-nowrap">
     <div className="div-1 flex flex-col gap-5 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center pb-20">
            <div className="img">
                <img src={img11} alt="" />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Jaws, Martha’s <br />
                  Vineyard
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
            </div>
            <div className="button flex justify-center item center cursor-pointer">
            <div class="button bg-[#313EF7] rounded-full w-48  2xl:w-40  text-center " >
             <p class="h-14 text-center text-white font-bold text-lg pt-4" style={{fontFamily:'Poppins'}} >$ 90/day</p>
            </div>
            </div>
        </div>
        <div className="div-1 flex flex-col gap-5 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center md:pb-20 2xl:pb-0 ">
            <div className="img">
                <img src={img12} alt="" />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Inception, Nijo <br /> Castle

                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
            </div>
            <div className="button flex justify-center item center cursor-pointer">
            <div class="button bg-[#313EF7] rounded-full w-48  2xl:w-40  text-center " >
             <p class="h-14 text-center text-white font-bold text-lg pt-4" style={{fontFamily:'Poppins'}} >$ 90/day</p>
            </div>
            </div>
        </div>
     </div>
      
      <div className="div-2 flex gap-10 flex-wrap lg:flex-nowrap">
      <div className="div-1 flex flex-col gap-5 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center pb-20 md:pb-0 ">
            <div className="img">
                <img src={img13} alt="" />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Pretty Woman, <br /> Beverly Hills
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base">
                <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
            </div>
            <div className="button flex justify-center item center cursor-pointer">
            <div class="button bg-[#313EF7] rounded-full  w-48 2xl:w-40  text-center  " >
             <p class="h-14 text-center text-white font-bold text-lg pt-4" style={{fontFamily:'Poppins'}} >$ 90/day</p>
            </div>
            </div>
        </div>
        <div className="div-1 flex flex-col gap-5 hover:-translate-y-20 transition-transform duration-[500ms] justify-items-center items-center">
            <div className="img">
                <img src={img14} alt="" />
            </div>
            <div className="para text-black font-[Poppins] text-center font-bold 2xl:text-xl">
                <p>Christ Church <br /> College, Oxford
                 </p>
            </div>
            <div className="para  text-black font-[Poppins] text-center font-normal 2xl:text-base ">
                <p>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
            </div>
            <div className="button flex justify-center item center cursor-pointer">
            <div class="button bg-[#313EF7] rounded-full w-48  2xl:w-40  text-center " >
             <p class="h-14 text-center text-white font-bold text-lg pt-4" style={{fontFamily:'Poppins'}} >$ 90/day</p>
            </div>
            </div>
        </div>
      </div>
     </div>
    </div>
    
    </>
  )
}
