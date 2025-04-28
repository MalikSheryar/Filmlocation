


    import React, { useState } from 'react';
    import img2 from '../images/img2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-10/12 m-auto pt-5'>
      <nav>
        <div className="max-w-screen-2xl flex flex-wrap md:gap-5 md:justify-center lg:justify-start items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={img2} className='h-5 md:h-8' alt="Logo" />
            <span className="text-lg font-bold whitespace-nowrap text-white montserrat-extrabold xl:text-2xl">Film Locations</span>
          </a>
          <div className="flex md:order-3">
            <button 
              type="button" 
              data-collapse-toggle="navbar-search" 
              aria-controls="navbar-search" 
              aria-expanded={isOpen} 
              className="md:hidden text-white focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
              onClick={toggleNavbar}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button 
              type="button" 
              data-collapse-toggle="navbar-search" 
              aria-controls="navbar-search" 
              aria-expanded={isOpen} 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-3 ${isOpen ? 'block' : 'hidden'}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm rounded-lg text-white" placeholder="Search..." />
            </div>
            <ul className="flex bg-black md:bg-transparent items-center flex-col p-4 md:p-0 mt-4 xl:ml-80 font-medium border rounded-lg md:space-x-7 xl:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 montserrat-bold">
              <li>
                <a href="#" className="block py-2 px-3 text-blue-800 underline underline-offset-8 decoration-2 rounded md:bg-transparent md:p-0 font-bold">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 hover:text-blue-800 hover:underline underline-offset-8 decoration-2 text-white rounded md:p-0 dark:text-white dark:hover:text-white font-bold">About Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 hover:text-blue-800 hover:underline underline-offset-8 decoration-2 text-white rounded md:p-0 dark:text-white dark:hover:text-white font-bold">Our services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 hover:text-blue-800 hover:underline underline-offset-8 decoration-2 text-white rounded md:p-0 dark:text-white dark:hover:text-white font-bold">Price list</a>
              </li>
              <li>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="block w-28 p-2 ps-5 text-sm rounded-full bg-transparent placeholder-white text-white border border-white" placeholder="Search" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
