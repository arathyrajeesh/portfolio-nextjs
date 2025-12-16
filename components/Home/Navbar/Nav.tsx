"use client";

import React, { useEffect, useState } from 'react';
import { NavLinks } from '@/constant/constant';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
        setNavBg(window.scrollY >= 90);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                <FaCode className='w-5 h-5 text-black' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Arathy</h1>
            </div>

            <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() =>
                    document.getElementById(link.url)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                >
                    {link.Label}
                </button>
            ))}
            </div>

            <div className='flex items-center space-x-4'>
            <a
                href="/files/Arathy.pdf"
                download
                className='px-5 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'
            >
                <BiDownload className='w-5 h-5' />
                <span>Download CV</span>
            </a>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
        </div>
    );
};

export default Nav;
