import React from 'react'
import { AiOutlineArrowRight, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { CgAdidas } from "react-icons/cg";


const Footer = () => {
    return (
        <div>
            <footer className='flex flex-col justify-center bg-stone-200'>
                <div className='flex flex-col px-4'>
                    <div className='flex flex-col'>
                        <ul className='flex flex-col my-6 mx-5'>
                            <a href="" className='my-4 text-xs w-full flex justify-between items-center px-2'>SHOP <AiOutlineArrowRight /></a>
                            <a href="" className='my-4 text-xs w-full flex justify-between items-center px-2'>CORPORATE INFO <AiOutlineArrowRight /></a>
                            <a href="" className='my-4 text-xs w-full flex justify-between items-center px-2'>HELP <AiOutlineArrowRight /></a>
                        </ul>
                        <h3 className='text-center w-full my-2 text-xs px-2'>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</h3>
                        <a href="" className='my-4 text-sm w-full flex justify-between items-center px-5'>READ MORE <AiOutlineArrowRight /></a>
                    </div>
                    <div className='flex items-center justify-center my-4'>
                        <AiOutlineInstagram className='mx-2 text-xl' />
                        <AiOutlineTwitter className='mx-2 text-xl' />
                        <AiFillYoutube className='mx-2 text-xl' />
                        <BsPinterest className='mx-2 text-xl' />
                    </div>
                    <h3 className='text-center w-full my-2 text-xs'>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</h3>
                    <CgAdidas className="text-5xl font-thin ml-2 lg:ml-6 w-full text-center my-2" />
                </div>
            </footer>
        </div>
    )
}

export default Footer
