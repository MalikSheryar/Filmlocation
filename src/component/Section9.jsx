import React from 'react'
import img20 from "../images/img-20.png"
import img2 from "../images/img2.png"

export default function Section9() {
  return (
   <>
   <footer className="bg-[#0B1020] text-white py-10">
    <div className="flex gap-10   md:gap-16 lg:gap-32 xl:gap-40 2xl:gap-52 flex-wrap w-10/12 m-auto md:flex-row flex-col justify-center items-center">

      <div className="left flex flex-col gap-5 md:mt-16  ">
        <div className="para-img flex gap-5 ">
            <div className="img">
                <img src={img2} alt="" />
            </div>
            <div className="para flex items-center font-bold font-[Montserrat]">
            <h2 className="lg:text-xl xl:text-2xl">Film Locations</h2>
            </div>
        </div>
        <div className="para">
            <p className="font-[Poppins] text-xs text-nowrap opacity-50 lg:text-sm xl:text-base">
                There are many variations of <br /> passages of Lorem Ipsum available, <br /> but the majority have suffered <br /> alteration in some form.
            </p>
        </div>
        <div className="img">
            <img src={img20} alt="" />
            </div>
      </div>
        

     <div className="right flex gap-14  md:gap-14 2xl:gap-40 lg:gap-20  xl:gap-40   md:flex-nowrap flex-col md:flex-row">
     <div>
            <h2 className="text-sm lg:text-lg xl:text-3xl 2xl:text-2xl font-bold mb-4 text-nowrap">Quick Links</h2>
            <ul className="space-y-2 text-xs lg:text-sm xl:text-xl 2xl:text-base  opacity-50  font-[Poppins]">
                <li className='hover:underline hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Home</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">AboutUs</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">OurServices</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Price List</a></li>
            </ul>
        </div>

        <div>
            <h2 className="text-sm lg:text-lg xl:text-3xl 2xl:text-2xl  font-bold mb-4">About</h2>
            <ul className="space-y-2 text-xs lg:text-sm  xl:text-xl 2xl:text-base opacity-50   font-[Poppins] ">
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Our Blog</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Customers</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">OurTeam</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Careers</a></li> 
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Integrations</a></li>
            </ul>
        </div>

        
        <div>
            <h2 className="text-sm lg:text-lg  xl:text-3xl 2xl:text-2xl  font-bold mb-4">Support</h2>
            <ul className="space-y-2 text-xs lg:text-sm xl:text-xl 2xl:text-base opacity-50 font-[Poppins]">
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Test Zoom</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Account</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">SupportCenter</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">LiveTraining</a></li>
                <li className='hover:underline  hover:text-red-600 hover:font-bold hover:opacity-100'><a href="#">Accessibility</a></li>
            </ul>
        </div>
     </div>
       
    </div>

    <div className="text-center mt-10 text-sm">
        <hr className="border-gray-700 mb-4" />
        <p>Copyright © FT Locations 2022 All rights reserved</p>
    </div>
</footer>

   </>
  )
}
