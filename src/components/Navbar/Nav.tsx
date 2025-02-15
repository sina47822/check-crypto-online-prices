'use client';
import React, { useEffect, useState } from 'react'

type Props = {
    openNav: () => void;
};

const Nav = ({openNav}:Props) => {
    const [navbg, setNavbg] = useState(false);

    useEffect(()=>{
        const handler = () =>{
            if (window.scrollY > 90) setNavbg(true);
            if (window.scrollY > 90) setNavbg(false);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    })
  return (
    <div className={`transition-all ${navbg?'bg-white dark:bg-gray-950':'fixed'} duration-200 z-[100] fixed w-full`}>
      <div className='flex item-center h-full justify-between w-[90%] x1:w-[80%] mx-auto py-4'>
        {/* LOGO */}
        <div>
            <h1>
                Crypto Pricing
            </h1>
        </div>
        {/* navlinks */}
        <div></div>
        {/* buttons */}
        <div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Nav
