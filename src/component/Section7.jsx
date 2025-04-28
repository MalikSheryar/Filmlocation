import React from 'react'

export default function Section7() {
  return (
   <div className="Section7 pb-20">
    <div className="div-1 text-black font-bold font-[Poppins] flex justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl pt-20 text-nowrap  ">
        <p>Feedback</p>
     </div>
     <div className="div-2 border-[10px] border-[rgba(255,255,255,.6)] w-10/12 m-auto md:w-8/12 2xl:w-4/12 flex flex-col justify-items-center items-center bg-[#D2D4EC]  rounded-[100px] gap-10 py-10 2xl:py-10 lg:py-20 mt-10">
    <div class=" w-52 md:w-72 lg:w-[500px] xl:w-[700px] 2xl:w-96 ">
        <input 
            type="text" 
            placeholder="Your Name" 
            class="w-full p-3 rounded-full border-black border lg:h-20 xl:h-32 2xl:h-auto lg:text-2xl xl:text-3xl 2xl:text-lg pl-6 "
        />
    </div>
    <div class="w-52 md:w-72 lg:w-[500px] xl:w-[700px] 2xl:w-96 ">
        <input 
            type="email" 
            placeholder="Your Email" 
            class="w-full p-3   rounded-full border  border-black lg:h-20 xl:h-32   lg:text-2xl xl:text-3xl 2xl:text-lg  pl-6 2xl:h-auto"
        />
    </div>
    <div class="w-52 md:w-72 lg:w-[500px] xl:w-[700px] 2xl:w-96 ">
        <input 
            type="tel" 
            placeholder="Phone number" 
            class="w-full p-3 rounded-full border  border-black lg:h-20 xl:h-32  lg:text-2xl xl:text-3xl 2xl:text-lg 2xl:h-auto pl-6"
        />
    </div>
    <div class="w-52 md:w-72 lg:w-[500px] xl:w-[700px] 2xl:w-96 ">
        <textarea 
            placeholder="Special Request" 
            class="w-full p-3  rounded-[20px]  border h-32  border-black lg:h-60 xl:h-72  lg:text-2xl xl:text-3xl 2xl:text-lg 2xl:h-32 pl-6 "
        ></textarea>
    </div>
    <div>
        <button 
            type="submit" 
            class="w-full md:w-72 bg-[#2732C6] lg:w-[500px] xl:w-[700px]  xl:h-32 text-white font-bold py-3 px-5 rounded-full  border-black lg:h-20 text-sm md:text-xl xl:text-3xl 2xl:text-2xl 2xl:w-96 2xl:h-auto "
        >
            SEND MESSAGE
        </button>
    </div>
     </div>
   </div>
  )
}
