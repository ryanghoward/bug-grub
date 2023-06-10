"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-black text-white fixed top-0 right-0 z-10'>
      <div className='justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-6xl'>
        <div className='flex justify-between items-center py-3 md:py-6'>
          <Link href='/'>
            <h2 className='text-3xl font-bold text-[var(--primary-color)] md:text-2xl'>
              BugGrub
            </h2>
          </Link>
          <div className='md:hidden'>
            <button
              className='p-2 rounded-md outline-none text-2xl text-[var(--primary-color)]'
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <FaTimesCircle /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "p-12 md:p-0 block" : "hidden"
        }`}
      >
        <ul className='h-screen justify-end items-center md:h-auto md:flex'>
          <li className='text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link
              href='https://en.wikipedia.org/wiki/Insects_as_food'
              target='_blank'
              onClick={() => setNavbar(!navbar)}
            >
              Insects as Food
            </Link>
          </li>
          <li className='text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link href='/#ikea' onClick={() => setNavbar(!navbar)}>
              Ikea&apos;s Insect Burger
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
