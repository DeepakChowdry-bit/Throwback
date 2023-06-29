'use client'
import React from "react";
import { useRef } from "react";
import { CiSearch } from "react-icons/Ci";
import { HiOutlineMenuAlt1 } from "react-icons/Hi";
import { FaUserCircle } from "react-icons/Fa";
import { GrClose } from "react-icons/Gr";
import { AiOutlineArrowRight } from "react-icons/Ai";
import Link from "next/link";

const Navbar = () => {

  const ref = useRef()
  const openmenu = () => {
    if (ref.current.classList.contains('-translate-x-full')) {
      ref.current.classList.remove('-translate-x-full')
      ref.current.classList.add('-translate-x-0')
    } else {
      ref.current.classList.remove('-translate-x-0')
      ref.current.classList.add('-translate-x-full')
    }
  }
  return (
    <div>
      <header className="lg:px-20 px-5 h-20 flex justify-between items-center shadow-md fixed w-full bg-white">
        <div className="flex items-center">
          <HiOutlineMenuAlt1
            onClick={openmenu}
            id="menu"
            className="text-3xl font-thin mr-2 lg:mr-6 text-zinc-800 cursor-pointer"
          />
          {/* <CgAdidas className="text-3xl font-thin ml-3 lg:ml-6" /> */}
          <span className="text-lg tracking-wide font-bold ml-3 lg:ml-6">THROWBACK</span>
          <nav
            ref={ref}
            id="nav"
            className="absolute h-screen w-4/5 left-0 top-0 bg-white flex flex-col p-5 px-6 shadow-md border-r-2 lg:w-1/3 -translate-x-full transform transition-transform duration-500"
          >
            <div className="flex items-center justify-between px-1 py-2">
              <span className="flex items-center font-bold text-base">
                <FaUserCircle className="mx-1 text-2xl text-zinc-600" />
                Deepak Chowdry
              </span>
              <GrClose
                onClick={openmenu}
                className="mx-1 text-xl text-zinc-600 cursor-pointer" />
            </div>

            <ul className="flex flex-col w-full px-1 py-6">
              <Link href={'/'}>
                <p
                  className="text-sm font-semibold w-full  my-2 p-2 tracking-wider flex items-center justify-between"
                >
                  SALE
                  <AiOutlineArrowRight />
                </p>
              </Link>
              <Link href={'/mens'}>
                <p
                  className="text-sm font-semibold w-full  my-2 p-2 tracking-wider flex items-center justify-between"
                >
                  MEN
                  <AiOutlineArrowRight />
                </p>
              </Link>
              <Link href={'/womens'}>
                <p
                  className="text-sm font-semibold w-full  my-2 p-2 tracking-wider flex items-center justify-between"
                >
                  WOMEN
                  <AiOutlineArrowRight />
                </p>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex ">
          <CiSearch className="text-2xl mx-2" />
          <span className="mx-2">
            CART <span>0</span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
