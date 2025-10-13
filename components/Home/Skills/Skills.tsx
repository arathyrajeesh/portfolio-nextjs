'use client';
import React from 'react'
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiPython, SiReact } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name:'Python',
        icon:<SiPython/>
    },
    {
        name:'Django',
        icon:<SiDjango/>
    },
    {
        name:'Javascript',
        icon:<SiJavascript/>
    },
    {
        name:'Html',
        icon:<SiHtml5/>
    },
    {
        name:'Css',
        icon:<SiCss3/>
    },
    {
        name:'React js',
        icon:<SiReact/>
    },
]

function Skills() {
    return (
        <div  id ="skill" className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>My 
                <span className='text-cyan-300'>Skills</span>
            </h1>
            <div className='flex flex-wrap justify-center gap-6 mt-16 '>
                {skills.map((skil,i)=>{
                    return (
                        <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                            <div  data-aos="flip-right" data-aos-anchor-placement='top-center' date-aos-delay={i * 100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center 
                            justify-center shadow-lg transition hover:scale-105'>
                                <div className='text-5xl mb-4 text-gray-300 '>{skil.icon}</div>
                                <p className='text-purple-400 mt-1'>{skil.name}</p>
                            </div>
                        </Tilt>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
