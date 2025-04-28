import React from 'react'

export default function Section8() {
  return (
    <>
    <div className="Section8 bg-[#F5F5FF] pb-20">
        <div className="div-1 w-10/12 m-auto gap-10 pt-20 flex flex-col justify-items-center items-center text-black font-bold font-[Poppins] 2xl:text-4xl  text-center">
         <div className="para text-xl md:text-3xl xl:text-4xl">
         <p>Subscribe Newsletter & <br /> Get Letest News</p>
         </div>
        <div className="relative">
        <input type="email" className='rounded-full text-xs 2xl:text-sm 2xl:py-5  xl:text-4xl font-normal 2xl:px-3 px-2 lg:px-5  py-5 lg:py-8 xl:py-10 xl:pl-10 xl:pr-96  lg:text-2xl pr-28 2xl:pr-52 md:pr-48 lg:pr-60  ' placeholder='Enter your email address' />
         <button className='absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#313EF7] poppins-semibold text-white   2xl:py-2 2xl:text-sm px-2 2xl:px-4 py-2 lg:py-4 lg:px-5 xl:py-5 xl:px-8 lg:mx-3 2xl:mx-0 lg:text-xl text-xs xl:text-3xl'>Subscribe</button>
        </div>
        </div>
    </div>
    </>
  )
}
